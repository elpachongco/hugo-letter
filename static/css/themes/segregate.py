"""Segregates themes by dark / light mode
"""


from pathlib import Path
import json
import colorsys
import os


def hex_to_rgb(hex):
    hex = hex.lstrip("#")
    return tuple(
        int(hex[i:i+2], 16)
        for i in ((0, 2, 4) if len(hex) == 6 else (0, 2, 2))
    )


def is_light(rgb: tuple):
    hls = colorsys.rgb_to_hls(*rgb)
    luminance = hls[1]
    return luminance > 50


themes = {
    "dark": [],
    "light": []
}

here = Path(os.path.realpath(__file__)).parent
for file in here.iterdir():
    if file.suffix != ".css":
        continue
    with open(file, "r") as file_obj:
        while line := file_obj.readline():
            if "bg-color" not in line:
                continue

            color = line[line.find("#"):line.find(";")]
            light_mode = is_light(hex_to_rgb(color))
            key = "light" if light_mode else "dark"
            themes[key].append(file.name)
            break

print(json.dumps(themes))
