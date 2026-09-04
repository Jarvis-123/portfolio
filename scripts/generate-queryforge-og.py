#!/usr/bin/env python3
"""Generate QueryForge OG as sharp JPEG (portfolio-style) for LinkedIn Featured."""
from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

SCALE = 2
OUT_W, OUT_H = 1200, 627
RENDER_W, RENDER_H = OUT_W * SCALE, OUT_H * SCALE
OG_FILENAME = "og-share-v4.jpg"

BG = (36, 36, 82)
WHITE = (255, 255, 255)
MUTED = (210, 216, 228)
LAVENDER = (128, 18, 255)

FONT_BOLD = [
    "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
    "/Library/Fonts/Arial Bold.ttf",
]
FONT_REG = [
    "/System/Library/Fonts/Supplemental/Arial.ttf",
    "/Library/Fonts/Arial.ttf",
]


def load_font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    paths = FONT_BOLD if bold else FONT_REG
    for path in paths:
        if Path(path).exists():
            try:
                return ImageFont.truetype(path, size)
            except OSError:
                continue
    return ImageFont.load_default()


def draw_pill(
    draw: ImageDraw.ImageDraw,
    x: int,
    y: int,
    label: str,
    font: ImageFont.FreeTypeFont | ImageFont.ImageFont,
    fill: tuple[int, int, int] | None,
    text_color: tuple[int, int, int],
) -> int:
    s = SCALE
    bbox = draw.textbbox((0, 0), label, font=font)
    w = bbox[2] - bbox[0] + 40 * s
    h = 44 * s
    if fill:
        draw.rounded_rectangle((x, y, x + w, y + h), radius=22 * s, fill=fill)
    else:
        draw.rounded_rectangle((x, y, x + w, y + h), radius=22 * s, outline=WHITE, width=2 * s)
    draw.text((x + 20 * s, y + 10 * s), label, fill=text_color, font=font)
    return w + 12 * s


def render() -> Image.Image:
    img = Image.new("RGB", (RENDER_W, RENDER_H), BG)
    draw = ImageDraw.Draw(img)
    s = SCALE

    title_font = load_font(72 * s, bold=True)
    sub_font = load_font(36 * s, bold=True)
    tag_font = load_font(28 * s, bold=True)
    pill_font = load_font(22 * s, bold=True)

    x, y = 56 * s, 70 * s
    draw.text((x, y), "QueryForge", fill=WHITE, font=title_font)
    y += 92 * s
    draw.text((x, y), "Citation-first document Q&A", fill=LAVENDER, font=sub_font)
    y += 56 * s
    draw.text((x, y), "Intent routing · Retrieval · Source-linked answers", fill=MUTED, font=tag_font)

    pill_y = RENDER_H - 90 * s
    pill_x = 56 * s
    for label, fill, text in [
        ("Open source", WHITE, BG),
        ("Acme Corp demo", LAVENDER, WHITE),
        ("MIT", None, WHITE),
    ]:
        pill_x += draw_pill(draw, pill_x, pill_y, label, pill_font, fill, text)

    return img.resize((OUT_W, OUT_H), Image.Resampling.LANCZOS)


def main() -> None:
    img = render()
    out_dir = Path("/Users/amitsingh/Cursor/queryforge/public")
    out_dir.mkdir(parents=True, exist_ok=True)
    out = out_dir / OG_FILENAME
    img.save(out, "JPEG", quality=98, optimize=True, subsampling=0)
    demo = Path(__file__).resolve().parent.parent / "public" / "demo-og" / f"queryforge-{OG_FILENAME}"
    demo.parent.mkdir(parents=True, exist_ok=True)
    img.save(demo, "JPEG", quality=98, optimize=True, subsampling=0)
    print(f"Wrote {out} ({out.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
