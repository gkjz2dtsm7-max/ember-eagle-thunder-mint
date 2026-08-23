#!/usr/bin/env python3
"""Crop and grade verified Gulf County photographs for the homepage."""

from pathlib import Path
from PIL import Image, ImageEnhance, ImageFilter

SRC = Path("/workspace/tmp/gulf-photos")
OUT = Path("/workspace/public/photos")
OG = Path("/workspace/public/og.jpg")


def cover_crop(im: Image.Image, rw: float, rh: float, fx=0.5, fy=0.45) -> Image.Image:
    w, h = im.size
    target = rw / rh
    current = w / h
    if current > target:
        nw = int(h * target)
        x = max(0, min(w - nw, int((w - nw) * fx)))
        im = im.crop((x, 0, x + nw, h))
    else:
        nh = int(w / target)
        y = max(0, min(h - nh, int((h - nh) * fy)))
        im = im.crop((0, y, w, y + nh))
    return im


def grade(im: Image.Image, warmth=1.04, color=1.06, contrast=1.07, brightness=1.02) -> Image.Image:
    im = im.convert("RGB")
    r, g, b = im.split()
    r = r.point(lambda p: min(255, int(p * warmth)))
    b = b.point(lambda p: min(255, int(p * (2 - warmth))))
    im = Image.merge("RGB", (r, g, b))
    im = ImageEnhance.Color(im).enhance(color)
    im = ImageEnhance.Contrast(im).enhance(contrast)
    im = ImageEnhance.Brightness(im).enhance(brightness)
    im = im.filter(ImageFilter.UnsharpMask(radius=1.1, percent=85, threshold=2))
    return im


def save(im: Image.Image, name: str, width: int) -> None:
    if im.width > width:
        h = int(im.height * (width / im.width))
        im = im.resize((width, h), Image.Resampling.LANCZOS)
    dest = OUT / name
    im.save(dest, "JPEG", quality=84, optimize=True, progressive=True)
    print(f"wrote {dest} {im.size}")


def run():
    OUT.mkdir(parents=True, exist_ok=True)

    sunset = Image.open(SRC / "indian-pass-sunset.jpg")
    hero = grade(cover_crop(sunset, 16, 9, 0.42, 0.38), warmth=1.05, color=1.08, contrast=1.08, brightness=1.01)
    save(hero, "hero.jpg", 1920)
    save(hero, "sunset.jpg", 1600)
    hero.save(OG, "JPEG", quality=82, optimize=True, progressive=True)

    reid2 = Image.open(SRC / "reid-south2.jpg")
    downtown = grade(cover_crop(reid2, 16, 9, 0.52, 0.58), warmth=1.03, color=1.05, contrast=1.1, brightness=1.04)
    save(downtown, "downtown.jpg", 1600)
    save(downtown, "market.jpg", 1600)

    reid_s = Image.open(SRC / "reid-south.jpg")
    festival = grade(cover_crop(reid_s, 16, 9, 0.5, 0.55), warmth=1.03, color=1.05, contrast=1.1, brightness=1.04)
    save(festival, "festival.jpg", 1600)

    reid_n = Image.open(SRC / "reid-north.jpg")
    music = grade(cover_crop(reid_n, 16, 9, 0.48, 0.52), warmth=1.03, color=1.05, contrast=1.1, brightness=1.04)
    save(music, "music.jpg", 1600)

    salinas = Image.open(SRC / "salinas-bay.jpg")
    marina = grade(cover_crop(salinas, 16, 9, 0.5, 0.42), warmth=1.04, color=1.07, contrast=1.06, brightness=1.02)
    save(marina, "marina.jpg", 1600)

    harbor = Image.open(SRC / "hos-rocinante.jpg")
    boats = grade(cover_crop(harbor, 16, 9, 0.55, 0.38), warmth=1.03, color=1.04, contrast=1.08, brightness=1.03)
    save(boats, "boats.jpg", 1600)

    cape = Image.open(SRC / "cape-light-houses.jpg")
    turtles = grade(cover_crop(cape, 16, 9, 0.55, 0.4), warmth=1.04, color=1.06, contrast=1.07, brightness=1.03)
    save(turtles, "turtles.jpg", 1600)
    save(turtles, "turtle-swim.jpg", 1600)

    light = Image.open(SRC / "cape-light-2.jpg")
    save(grade(cover_crop(light, 4, 3, 0.5, 0.45), warmth=1.02, color=1.04, contrast=1.08), "lighthouse.jpg", 1400)


if __name__ == "__main__":
    run()
