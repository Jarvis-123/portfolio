#!/usr/bin/env python3
"""Animated LinkedIn post assets (1080x1080 MP4 + GIF) for the public-builds announcement."""
from __future__ import annotations

import shutil
import subprocess
import tempfile
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

SIZE = 1080
DURATION_S = 8
GIF_FPS = 12
VIDEO_FPS = 30

BG = (36, 36, 82)
WHITE = (255, 255, 255)
MUTED = (176, 184, 205)
LAVENDER = (146, 86, 255)

FONT_BOLD = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"
FONT_REG = "/System/Library/Fonts/Supplemental/Arial.ttf"

ROWS = [
    ("QueryForge", "Citation-first document Q&A"),
    ("LaneForge", "Swimlane process builder"),
    ("CorpusSearch", "Markdown search, no LLM"),
    ("FormatDesk Lite", "PDF merge in the browser"),
    ("IntentRouter", "Intent classification library"),
]


def font(path: str, size: int) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    try:
        return ImageFont.truetype(path, size)
    except OSError:
        return ImageFont.load_default()


F_TITLE = font(FONT_BOLD, 76)
F_SUB = font(FONT_REG, 32)
F_NAME = font(FONT_BOLD, 40)
F_DESC = font(FONT_REG, 27)
F_FOOT = font(FONT_BOLD, 30)
F_URL = font(FONT_REG, 26)


def ease(t: float) -> float:
    """Ease-out cubic, clamped to 0..1."""
    t = max(0.0, min(1.0, t))
    return 1 - (1 - t) ** 3


def blend(fg: tuple[int, int, int], t: float) -> tuple[int, int, int]:
    """Fade a color in from the background."""
    t = max(0.0, min(1.0, t))
    return tuple(round(BG[i] + (fg[i] - BG[i]) * t) for i in range(3))


GHOST = 0.34
ROW_Y0 = 322
ROW_STEP = 104


def mix(a: tuple[int, int, int], b: tuple[int, int, int], t: float) -> tuple[int, int, int]:
    t = max(0.0, min(1.0, t))
    return tuple(round(a[i] + (b[i] - a[i]) * t) for i in range(3))


def render_frame(i: int, fps: int) -> Image.Image:
    s = i / fps
    img = Image.new("RGB", (SIZE, SIZE), BG)
    d = ImageDraw.Draw(img)

    # Every element is present from frame 0, dimmed rather than absent, so the
    # poster frame and any mid-scroll glance both show the whole composition.
    d.text((64, 84), "Five tools. All public.", fill=WHITE, font=F_TITLE)
    d.text(
        (64, 190),
        "Personal projects · fictional Acme Corp data · MIT",
        fill=MUTED,
        font=F_SUB,
    )
    d.rectangle((64, 252, 484, 256), fill=LAVENDER)

    lit_at = [0.45 + idx * 0.32 for idx in range(len(ROWS))]
    all_lit = lit_at[-1] + 0.5

    # A highlight travelling down the list keeps motion going through the hold.
    if s > all_lit:
        cursor = int((s - all_lit) / 0.42) % len(ROWS)
        cy = ROW_Y0 + cursor * ROW_STEP
        d.rectangle((48, cy - 16, SIZE - 48, cy + 88), fill=(48, 48, 104))
        d.rectangle((48, cy - 16, 53, cy + 88), fill=LAVENDER)

    for idx, (name, desc) in enumerate(ROWS):
        t = ease((s - lit_at[idx]) / 0.42)
        y = ROW_Y0 + idx * ROW_STEP

        dot_r = 6 + round(2 * t)
        d.ellipse(
            (64, y + 20, 64 + dot_r * 2, y + 20 + dot_r * 2),
            fill=mix(blend(LAVENDER, GHOST), LAVENDER, t),
        )
        d.text((98, y), name, fill=mix(blend(WHITE, GHOST), WHITE, t), font=F_NAME)
        d.text((98, y + 50), desc, fill=mix(blend(MUTED, GHOST), MUTED, t), font=F_DESC)

    foot_t = ease((s - 2.05) / 0.6)
    d.rectangle((64, 876, 484, 880), fill=mix(blend(LAVENDER, GHOST), LAVENDER, foot_t))
    d.text(
        (64, 906),
        "All live demos · MIT licensed",
        fill=mix(blend(WHITE, GHOST), WHITE, foot_t),
        font=F_FOOT,
    )
    d.text(
        (64, 952),
        "github.com/Jarvis-123",
        fill=mix(blend(LAVENDER, GHOST), LAVENDER, ease((s - 2.3) / 0.6)),
        font=F_URL,
    )
    d.text(
        (64, 990),
        "Next.js · TypeScript · local-first",
        fill=mix(blend(MUTED, GHOST), MUTED, ease((s - 2.5) / 0.6)),
        font=F_URL,
    )

    prog = s / DURATION_S
    d.rectangle((0, SIZE - 8, round(SIZE * prog), SIZE), fill=LAVENDER)

    return img


def write_gif(out_dir: Path) -> Path:
    total = GIF_FPS * DURATION_S
    frames = [
        render_frame(i, GIF_FPS).convert("P", palette=Image.ADAPTIVE, colors=64)
        for i in range(total)
    ]
    gif = out_dir / "linkedin-builds-animated.gif"
    frames[0].save(
        gif,
        save_all=True,
        append_images=frames[1:],
        duration=round(1000 / GIF_FPS),
        loop=0,
        optimize=True,
        disposal=2,
    )
    return gif


def write_mp4(out_dir: Path) -> Path:
    """H.264 1:1 video with a silent AAC track, which LinkedIn's uploader expects."""
    ffmpeg = shutil.which("ffmpeg")
    if not ffmpeg:
        raise SystemExit("ffmpeg not found on PATH; install it to export MP4.")

    mp4 = out_dir / "linkedin-builds-animated.mp4"
    total = VIDEO_FPS * DURATION_S

    with tempfile.TemporaryDirectory() as tmp:
        tmp_dir = Path(tmp)
        for i in range(total):
            render_frame(i, VIDEO_FPS).save(tmp_dir / f"f_{i:04d}.png")

        subprocess.run(
            [
                ffmpeg, "-y", "-loglevel", "error",
                "-framerate", str(VIDEO_FPS),
                "-i", str(tmp_dir / "f_%04d.png"),
                "-f", "lavfi",
                "-i", "anullsrc=channel_layout=stereo:sample_rate=48000",
                "-shortest",
                "-c:v", "libx264", "-preset", "slow", "-crf", "18",
                "-pix_fmt", "yuv420p",
                "-c:a", "aac", "-b:a", "128k",
                "-movflags", "+faststart",
                str(mp4),
            ],
            check=True,
        )

    return mp4


def main() -> None:
    out_dir = Path(__file__).resolve().parent.parent / "public" / "social"
    out_dir.mkdir(parents=True, exist_ok=True)

    mp4 = write_mp4(out_dir)
    gif = write_gif(out_dir)

    # Fully lit but before the travelling highlight starts, so the still reads
    # clean as a LinkedIn custom video thumbnail.
    png = out_dir / "linkedin-builds-still.png"
    render_frame(round(2.2 * VIDEO_FPS), VIDEO_FPS).save(png, "PNG", optimize=True)

    for path in (mp4, gif, png):
        print(f"{path} ({path.stat().st_size // 1024} KB)")


if __name__ == "__main__":
    main()
