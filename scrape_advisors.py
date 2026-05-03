#!/usr/bin/env python3
"""Scrape advisor photos and names from regaladogroup.net"""

import os
import re
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin

URL = "https://regaladogroup.net/nuestros-asesores.html"
OUT_DIR = os.path.join(os.path.dirname(__file__), "public", "asesores")

def slugify(name: str) -> str:
    """Convert name to a filesystem-safe slug."""
    s = name.lower().strip()
    s = re.sub(r'[áàä]', 'a', s)
    s = re.sub(r'[éèë]', 'e', s)
    s = re.sub(r'[íìï]', 'i', s)
    s = re.sub(r'[óòö]', 'o', s)
    s = re.sub(r'[úùü]', 'u', s)
    s = re.sub(r'[ñ]', 'n', s)
    s = re.sub(r'[^a-z0-9]+', '_', s)
    return s.strip('_')

def main():
    os.makedirs(OUT_DIR, exist_ok=True)
    print(f"📁 Output: {OUT_DIR}\n")

    resp = requests.get(URL, timeout=30)
    resp.raise_for_status()
    soup = BeautifulSoup(resp.text, "html.parser")

    # Find advisor cards — each one has an image and an h5 with the name
    advisors = []
    cards = soup.select(".sp-column")  # Try common Joomla/SP Page Builder selectors
    if not cards:
        cards = soup.select(".sppb-addon-person, .sppb-person, .team-member, .card")
    if not cards:
        # Fallback: find all h5 tags and look for sibling images
        h5_tags = soup.find_all("h5")
        for h5 in h5_tags:
            name = h5.get_text(strip=True)
            if not name or len(name) < 3:
                continue
            # Walk up to find container, then find img inside it
            parent = h5.parent
            for _ in range(5):
                if parent is None:
                    break
                img = parent.find("img")
                if img and img.get("src"):
                    src = img["src"]
                    if "logo" not in src.lower() and "icon" not in src.lower():
                        advisors.append({"name": name, "img_url": urljoin(URL, src)})
                        break
                parent = parent.parent
    else:
        for card in cards:
            name_el = card.find(["h5", "h4", "h3"])
            img_el = card.find("img")
            if name_el and img_el and img_el.get("src"):
                name = name_el.get_text(strip=True)
                src = img_el["src"]
                if name and "logo" not in src.lower():
                    advisors.append({"name": name, "img_url": urljoin(URL, src)})

    if not advisors:
        # Last resort: grab ALL images and pair with nearby h5
        print("⚠️  Trying raw img scan...")
        imgs = soup.find_all("img")
        for img in imgs:
            src = img.get("src", "")
            if not src or any(x in src.lower() for x in ["logo", "icon", "whatsapp", "banner", "bg"]):
                continue
            # Find nearest heading
            parent = img.parent
            name = "unknown"
            for _ in range(8):
                if parent is None:
                    break
                h = parent.find(["h5", "h4", "h3"])
                if h:
                    name = h.get_text(strip=True)
                    break
                parent = parent.parent
            if name and name != "unknown":
                advisors.append({"name": name, "img_url": urljoin(URL, src)})

    print(f"✅ Found {len(advisors)} advisors\n")

    # Download images
    seen = set()
    downloaded = 0
    for adv in advisors:
        name = adv["name"]
        url = adv["img_url"]
        
        if url in seen:
            continue
        seen.add(url)

        slug = slugify(name)
        ext = os.path.splitext(url.split("?")[0])[1] or ".jpg"
        filename = f"{slug}{ext}"
        filepath = os.path.join(OUT_DIR, filename)

        try:
            print(f"  ⬇️  {name} → {filename}")
            img_resp = requests.get(url, timeout=15)
            img_resp.raise_for_status()
            with open(filepath, "wb") as f:
                f.write(img_resp.content)
            downloaded += 1
        except Exception as e:
            print(f"  ❌ Error downloading {name}: {e}")

    print(f"\n🎉 Downloaded {downloaded} advisor photos to {OUT_DIR}")

if __name__ == "__main__":
    main()
