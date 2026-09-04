#!/usr/bin/env python3
"""Portfolio-style sharp OG PNGs at native 1200x627 for LinkedIn."""
from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

WIDTH, HEIGHT = 1200, 627
OG_FILENAME = "og-share-v3.png"
BG = (36, 36, 82)  # portfolio --navy #242452
WHITE = (255, 255, 255)
MUTED = (200, 206, 220)
LAVENDER = (128, 18, 255)
TEAL = (45, 212, 191)
BLUE = (59, 130, 246)

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
    outline: tuple[int, int, int] | None = None,
) -> int:
    bbox = draw.textbbox((0, 0), label, font=font)
    w = bbox[2] - bbox[0] + 40
    h = 44
    if fill:
        draw.rounded_rectangle((x, y, x + w, y + h), radius=22, fill=fill)
    else:
        draw.rounded_rectangle((x, y, x + w, y + h), radius=22, outline=outline or WHITE, width=2)
    draw.text((x + 20, y + 10), label, fill=text_color, font=font)
    return w + 12


def draw_card(
    title: str,
    subtitle: str,
    tagline: str,
    accent: tuple[int, int, int],
    pills: list[tuple[str, tuple[int, int, int] | None, tuple[int, int, int]]],
) -> Image.Image:
    img = Image.new("RGB", (WIDTH, HEIGHT), BG)
    draw = ImageDraw.Draw(img)

    title_font = load_font(68, bold=True)
    sub_font = load_font(34, bold=True)
    tag_font = load_font(26, bold=False)
    pill_font = load_font(20, bold=True)

    x, y = 56, 64
    draw.text((x, y), title, fill=WHITE, font=title_font)
    y += 88
    draw.text((x, y), subtitle, fill=accent, font=sub_font)
    y += 52
    draw.text((x, y), tagline, fill=MUTED, font=tag_font)

    pill_y = HEIGHT - 88
    pill_x = 56
    for label, fill, text_color in pills:
        pill_x += draw_pill(draw, pill_x, pill_y, label, pill_font, fill, text_color, WHITE)

    return img


CARDS = {
    "queryforge": {
        "title": "QueryForge",
        "subtitle": "Citation-first document Q&A",
        "tagline": "Intent routing · Retrieval · Source-linked answers",
        "accent": LAVENDER,
        "pills": [
            ("Open source", WHITE, BG),
            ("Acme Corp demo", LAVENDER, WHITE),
            ("MIT", None, WHITE),
        ],
    },
    "corpus-search": {
        "title": "CorpusSearch",
        "subtitle": "Markdown FTS + snippet UI",
        "tagline": "Keyword search with intent-aware ranking — no LLM",
        "accent": TEAL,
        "pills": [
            ("FTS", TEAL, WHITE),
            ("Snippets", None, WHITE),
            ("No LLM", None, WHITE),
        ],
    },
    "formatdesk-lite": {
        "title": "FormatDesk Lite",
        "subtitle": "Merge PDFs in the browser",
        "tagline": "Client-side pdf-lib merge — files never leave your device",
        "accent": BLUE,
        "pills": [
            ("Client-side", BLUE, WHITE),
            ("No upload", None, WHITE),
            ("MIT", None, WHITE),
        ],
    },
}

OUT_DIR = Path(__file__).resolve().parent.parent / "public" / "demo-og"
PROJECT_ROOTS = {
    "queryforge": Path("/Users/amitsingh/Cursor/queryforge/public"),
    "corpus-search": Path("/Users/amitsingh/Cursor/corpus-search/public"),
    "formatdesk-lite": Path("/Users/amitsingh/Cursor/formatdesk-lite/public"),
}


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    for key, spec in CARDS.items():
        img = draw_card(
            spec["title"],
            spec["subtitle"],
            spec["tagline"],
            spec["accent"],
            spec["pills"],
        )
        out = OUT_DIR / f"{key}-{OG_FILENAME}"
        img.save(out, "PNG", optimize=True)
        dest = PROJECT_ROOTS[key]
        if dest.exists():
            img.save(dest / OG_FILENAME, "PNG", optimize=True)
        print(f"Wrote {out} {img.size} ({out.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
