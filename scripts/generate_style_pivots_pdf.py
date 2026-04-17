from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path

W, H = 842, 595  # A4 landscape points


def esc(text: str) -> str:
    return text.replace('\\', '\\\\').replace('(', '\\(').replace(')', '\\)')


@dataclass
class Theme:
    name: str
    bg: tuple[float, float, float]
    frame: tuple[float, float, float]
    nav: tuple[float, float, float]
    hero: tuple[float, float, float]
    about: tuple[float, float, float]
    footer: tuple[float, float, float]
    text_dark: tuple[float, float, float]
    text_muted: tuple[float, float, float]
    accent_green: tuple[float, float, float]
    accent_purple: tuple[float, float, float]


COPY = {
    "brand": "Ryan Winter",
    "nav": ["Home", "Resume", "Portfolio", "Photography"],
    "hero_title": "Hi, I'm Ryan!",
    "hero_body": "An Experienced Professional with a varied background in Tech, Esports, Events, and Media.",
    "social": ["Instagram", "GitHub", "LinkedIn", "Adobe Portfolio"],
    "about_title": "About Me",
    "about_body": "Welcome to my personal website!",
    "footer": "© 2026 Ryan Winter. All rights reserved.",
}


def set_fill(r: float, g: float, b: float) -> str:
    return f"{r:.3f} {g:.3f} {b:.3f} rg"


def text_block(x: int, y: int, size: int, text: str, rgb: tuple[float, float, float], font: str = "F1") -> str:
    r, g, b = rgb
    return (
        "BT\n"
        f"/{font} {size} Tf\n"
        f"{r:.3f} {g:.3f} {b:.3f} rg\n"
        f"1 0 0 1 {x} {y} Tm\n"
        f"({esc(text)}) Tj\n"
        "ET"
    )


def draw_page(theme: Theme, variant: int) -> bytes:
    c = []
    # page background
    c.append(set_fill(*theme.bg))
    c.append(f"0 0 {W} {H} re f")

    # page label
    c.append(text_block(36, H - 42, 12, f"Style Pivot {variant}: {theme.name}", theme.text_dark, "F2"))

    # website frame
    fx, fy, fw, fh = 32, 48, W - 64, H - 88
    c.append(set_fill(*theme.frame))
    c.append(f"{fx} {fy} {fw} {fh} re f")

    # nav bar
    nav_h = 58
    c.append(set_fill(*theme.nav))
    c.append(f"{fx+14} {fy+fh-nav_h-14} {fw-28} {nav_h} re f")

    # footer strip
    foot_h = 44
    c.append(set_fill(*theme.footer))
    c.append(f"{fx+14} {fy+14} {fw-28} {foot_h} re f")

    # hero block
    hero_y = fy + fh - nav_h - 220
    c.append(set_fill(*theme.hero))
    c.append(f"{fx+24} {hero_y} {fw-48} 190 re f")

    # about block
    c.append(set_fill(*theme.about))
    c.append(f"{fx+24} {fy+76} {fw-48} 118 re f")

    # fake slideshow panel
    slide_x, slide_y = fx + fw - 330, hero_y + 18
    c.append(set_fill(0.78, 0.89, 0.98))
    c.append(f"{slide_x} {slide_y} 282 154 re f")
    c.append(set_fill(0.58, 0.39, 0.84))
    c.append(f"{slide_x+16} {slide_y+14} 250 12 re f")
    c.append(set_fill(0.49, 0.90, 0.45))
    c.append(f"{slide_x+16} {slide_y+34} 170 9 re f")

    # nav text
    c.append(text_block(fx + 36, fy + fh - 48, 18, COPY["brand"], theme.text_dark, "F2"))
    nx = fx + 310
    for label in COPY["nav"]:
        c.append(text_block(nx, fy + fh - 44, 13, label, theme.text_dark))
        nx += 84

    # hero text
    c.append(text_block(fx + 46, hero_y + 136, 34, COPY["hero_title"], theme.text_dark, "F2"))
    c.append(text_block(fx + 46, hero_y + 104, 14, "An Experienced Professional with a varied background in Tech,", theme.text_muted))
    c.append(text_block(fx + 46, hero_y + 84, 14, "Esports, Events, and Media.", theme.text_muted))

    # social pills
    sx = fx + 46
    sy = hero_y + 40
    for i, label in enumerate(COPY["social"]):
        pill_w = 110 if label != "Adobe Portfolio" else 132
        c.append(set_fill(*(theme.accent_green if i % 2 == 0 else theme.accent_purple)))
        c.append(f"{sx} {sy} {pill_w} 24 re f")
        c.append(text_block(sx + 10, sy + 8, 10, label, (0.07, 0.08, 0.18), "F2"))
        sx += pill_w + 10

    # about text
    c.append(text_block(fx + 46, fy + 160, 24, COPY["about_title"], theme.text_dark, "F2"))
    c.append(text_block(fx + 46, fy + 134, 14, COPY["about_body"], theme.text_muted))

    # footer text
    c.append(text_block(fx + 46, fy + 30, 11, COPY["footer"], theme.text_muted))

    stream = "\n".join(c).encode("latin-1")
    return stream


def build_pdf(streams: list[bytes]) -> bytes:
    objects: list[bytes] = []

    # 1: catalog (filled later pages ref 2)
    # 2: pages
    # then for each page: page object + content object

    # placeholders
    objects.append(b"<< /Type /Catalog /Pages 2 0 R >>")

    kids = []
    page_obj_nums = []
    obj_num = 3
    for _ in streams:
        page_obj_nums.append(obj_num)
        kids.append(f"{obj_num} 0 R")
        obj_num += 2

    pages_obj = f"<< /Type /Pages /Count {len(streams)} /Kids [{' '.join(kids)}] >>".encode("latin-1")
    objects.append(pages_obj)

    current_num = 3
    for s in streams:
        page = (
            f"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 {W} {H}] "
            f"/Resources << /Font << /F1  {len(streams)*2+3} 0 R /F2 {len(streams)*2+4} 0 R >> >> "
            f"/Contents {current_num+1} 0 R >>"
        ).encode("latin-1")
        content = b"<< /Length " + str(len(s)).encode("ascii") + b" >>\nstream\n" + s + b"\nendstream"
        objects.append(page)
        objects.append(content)
        current_num += 2

    # fonts
    objects.append(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>")
    objects.append(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>")

    pdf = bytearray(b"%PDF-1.4\n")
    offsets = [0]
    for idx, obj in enumerate(objects, start=1):
        offsets.append(len(pdf))
        pdf.extend(f"{idx} 0 obj\n".encode("ascii"))
        pdf.extend(obj)
        pdf.extend(b"\nendobj\n")

    xref_pos = len(pdf)
    pdf.extend(f"xref\n0 {len(objects)+1}\n".encode("ascii"))
    pdf.extend(b"0000000000 65535 f \n")
    for i in range(1, len(objects)+1):
        pdf.extend(f"{offsets[i]:010d} 00000 n \n".encode("ascii"))

    pdf.extend(
        (
            f"trailer\n<< /Size {len(objects)+1} /Root 1 0 R >>\n"
            f"startxref\n{xref_pos}\n%%EOF\n"
        ).encode("ascii")
    )
    return bytes(pdf)


def main() -> None:
    themes = [
        Theme(
            name="Soft Glass Editorial",
            bg=(0.19, 0.64, 0.94),
            frame=(0.85, 0.94, 1.0),
            nav=(1.0, 1.0, 1.0),
            hero=(0.90, 0.96, 1.0),
            about=(1.0, 1.0, 1.0),
            footer=(0.95, 0.98, 1.0),
            text_dark=(0.10, 0.10, 0.18),
            text_muted=(0.56, 0.57, 0.61),
            accent_green=(0.49, 0.90, 0.45),
            accent_purple=(0.62, 0.39, 0.84),
        ),
        Theme(
            name="Bold Split Contrast",
            bg=(0.17, 0.60, 0.88),
            frame=(0.96, 0.98, 1.0),
            nav=(0.86, 0.93, 1.0),
            hero=(0.94, 0.91, 0.99),
            about=(0.92, 0.97, 1.0),
            footer=(0.89, 0.94, 0.99),
            text_dark=(0.08, 0.09, 0.20),
            text_muted=(0.46, 0.47, 0.54),
            accent_green=(0.52, 0.88, 0.48),
            accent_purple=(0.55, 0.36, 0.79),
        ),
        Theme(
            name="Minimal Signal Lines",
            bg=(0.15, 0.58, 0.90),
            frame=(0.93, 0.97, 1.0),
            nav=(0.98, 1.0, 1.0),
            hero=(0.97, 0.99, 1.0),
            about=(0.99, 1.0, 1.0),
            footer=(0.93, 0.97, 1.0),
            text_dark=(0.09, 0.10, 0.21),
            text_muted=(0.47, 0.50, 0.56),
            accent_green=(0.50, 0.90, 0.47),
            accent_purple=(0.60, 0.39, 0.82),
        ),
    ]

    streams = [draw_page(t, i + 1) for i, t in enumerate(themes)]
    pdf = build_pdf(streams)

    out = Path("artifacts/style-pivots.pdf")
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_bytes(pdf)
    print(f"Wrote {out} ({len(pdf)} bytes)")


if __name__ == "__main__":
    main()
