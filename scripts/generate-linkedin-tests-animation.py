#!/usr/bin/env python3
"""
Animated LinkedIn assets (1080x1080 MP4 + GIF) for the "tests found real bugs" post.

Every figure here is measured, not estimated:

  654 kcal/day  — pre-fix PulseDesk output for the smallest profile the form
                  accepts (female, 40 kg, 140 cm, 90, sedentary). Verified by
                  replaying `max(round(tdee * 0.82), tdee - 600)` from git
                  history across all 7,824,600 profiles the form allows.
  2.4%          — share of those profiles that came in under 1,200 kcal.
  2 sources     — documents the pre-fix QueryForge retriever cited for a query
                  matching no corpus term (offer-approval, onboarding-checklist),
                  because the intent boost added a point regardless of match.
"""
from __future__ import annotations

import shutil
import subprocess
import tempfile
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

SIZE = 1080
DURATION_S = 9
GIF_FPS = 10
VIDEO_FPS = 30
# LinkedIn rejects images over ~5 MB, and a flat palette on flat artwork costs
# nothing visually. The MP4 is the intended upload; the GIF is a fallback.
GIF_COLORS = 40

BG = (36, 36, 82)
CARD = (46, 46, 98)
WHITE = (255, 255, 255)
MUTED = (176, 184, 205)
LAVENDER = (146, 86, 255)
AMBER = (255, 186, 92)

FONT_BOLD = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"
FONT_REG = "/System/Library/Fonts/Supplemental/Arial.ttf"


def font(path: str, size: int) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    try:
        return ImageFont.truetype(path, size)
    except OSError:
        return ImageFont.load_default()


F_TITLE = font(FONT_BOLD, 66)
F_SUB = font(FONT_REG, 30)
F_EYEBROW = font(FONT_BOLD, 23)
F_BIG = font(FONT_BOLD, 58)
F_BODY = font(FONT_REG, 27)
F_FIX = font(FONT_BOLD, 27)
F_FOOT = font(FONT_BOLD, 29)
F_URL = font(FONT_REG, 25)

MARGIN = 64
GHOST = 0.34


def ease(t: float) -> float:
    """Ease-out cubic, clamped to 0..1."""
    t = max(0.0, min(1.0, t))
    return 1 - (1 - t) ** 3


def mix(a: tuple[int, int, int], b: tuple[int, int, int], t: float) -> tuple[int, int, int]:
    t = max(0.0, min(1.0, t))
    return tuple(round(a[i] + (b[i] - a[i]) * t) for i in range(3))


def ghost(colour: tuple[int, int, int]) -> tuple[int, int, int]:
    """The dimmed state an element sits in before its cue."""
    return mix(BG, colour, GHOST)


def lit(colour: tuple[int, int, int], t: float) -> tuple[int, int, int]:
    return mix(ghost(colour), colour, t)


class Card:
    """One bug: what it was, the number that shows it, and what changed."""

    def __init__(self, y: int, eyebrow: str, figure: str, detail: list[str], fix: str, cue: float):
        self.y = y
        self.eyebrow = eyebrow
        self.figure = figure
        self.detail = detail
        self.fix = fix
        self.cue = cue

    HEIGHT = 244

    def draw(self, d: ImageDraw.ImageDraw, s: float) -> None:
        t = ease((s - self.cue) / 0.5)
        y = self.y

        d.rounded_rectangle(
            (MARGIN, y, SIZE - MARGIN, y + self.HEIGHT),
            radius=18,
            fill=mix(BG, CARD, t),
        )
        # Accent bar, amber because each of these was a shipped defect.
        d.rounded_rectangle((MARGIN, y + 18, MARGIN + 6, y + self.HEIGHT - 18), radius=3, fill=lit(AMBER, t))

        x = MARGIN + 34
        d.text((x, y + 24), self.eyebrow, fill=lit(MUTED, t), font=F_EYEBROW)
        d.text((x, y + 58), self.figure, fill=lit(LAVENDER, t), font=F_BIG)

        line_y = y + 132
        for line in self.detail:
            d.text((x, line_y), line, fill=lit(MUTED, t), font=F_BODY)
            line_y += 36

        d.text((x, y + self.HEIGHT - 44), self.fix, fill=lit(WHITE, t), font=F_FIX)


CARDS = [
    Card(
        y=332,
        eyebrow="PULSEDESK · HEALTH PLANNER",
        figure="654 kcal/day",
        detail=[
            "prescribed to the smallest profile the form accepts.",
            "2.4% of accepted profiles came in under 1,200.",
        ],
        fix="Now floors at 1,200 / 1,500, or holds at maintenance.",
        cue=0.55,
    ),
    Card(
        y=606,
        eyebrow="QUERYFORGE · CITATION-FIRST Q&A",
        figure="2 cited sources",
        detail=[
            "returned for a query matching no term in the corpus.",
            "The intent boost scored documents regardless of match.",
        ],
        fix="Now it only breaks ties between real matches.",
        cue=1.75,
    ),
]


def render_frame(i: int, fps: int, highlight: bool = True) -> Image.Image:
    s = i / fps
    img = Image.new("RGB", (SIZE, SIZE), BG)
    d = ImageDraw.Draw(img)

    # The headline is lit from frame 0 so the poster frame and any mid-scroll
    # glance both land on the point. Everything else is dimmed, never absent.
    d.text((MARGIN, 74), "The tests found bugs", fill=WHITE, font=F_TITLE)
    d.text((MARGIN, 148), "I had already shipped.", fill=WHITE, font=F_TITLE)
    d.text(
        (MARGIN, 236),
        "Six public builds · 150 tests · every repo green",
        fill=MUTED,
        font=F_SUB,
    )
    d.rectangle((MARGIN, 292, MARGIN + 420, 296), fill=LAVENDER)

    for card in CARDS:
        card.draw(d, s)

    # A highlight moving between the two cards keeps motion through the hold.
    all_lit = CARDS[-1].cue + 0.5
    if highlight and s > all_lit:
        active = CARDS[int((s - all_lit) / 1.15) % len(CARDS)]
        d.rounded_rectangle(
            (MARGIN, active.y, SIZE - MARGIN, active.y + Card.HEIGHT),
            radius=18,
            outline=LAVENDER,
            width=3,
        )

    foot_t = ease((s - 2.85) / 0.6)
    d.rectangle((MARGIN, 892, MARGIN + 420, 896), fill=lit(LAVENDER, foot_t))
    d.text((MARGIN, 922), "github.com/Jarvis-123", fill=lit(WHITE, foot_t), font=F_FOOT)
    d.text(
        (MARGIN, 964),
        "npm i query-intent-router",
        fill=lit(LAVENDER, ease((s - 3.05) / 0.6)),
        font=F_URL,
    )
    d.text(
        (MARGIN, 1000),
        "Next.js · TypeScript · zero-dependency · MIT",
        fill=lit(MUTED, ease((s - 3.25) / 0.6)),
        font=F_URL,
    )

    d.rectangle((0, SIZE - 7, round(SIZE * (s / DURATION_S)), SIZE), fill=LAVENDER)
    return img


def write_gif(out_dir: Path) -> Path:
    total = GIF_FPS * DURATION_S
    frames = [
        render_frame(i, GIF_FPS).convert("P", palette=Image.ADAPTIVE, colors=GIF_COLORS)
        for i in range(total)
    ]
    gif = out_dir / "linkedin-tests-animated.gif"
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
    """H.264 1:1 with a silent AAC track, which LinkedIn's uploader expects."""
    ffmpeg = shutil.which("ffmpeg")
    if not ffmpeg:
        raise SystemExit("ffmpeg not found on PATH; install it to export MP4.")

    mp4 = out_dir / "linkedin-tests-animated.mp4"
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

    # Fully lit with the travelling highlight suppressed, so the thumbnail does
    # not freeze an arbitrary card in an outline.
    png = out_dir / "linkedin-tests-still.png"
    render_frame(round(4.2 * VIDEO_FPS), VIDEO_FPS, highlight=False).save(png, "PNG", optimize=True)

    for path in (mp4, gif, png):
        print(f"{path.name} ({path.stat().st_size // 1024} KB)")


if __name__ == "__main__":
    main()
