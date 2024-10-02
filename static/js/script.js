/* Themes are copied from the MonkeyType repo
 * https://github.com/monkeytypegame/monkeytype/tree/master/frontend/static/themes
 * Filenames segrated by theme using the script css/themes/segregate.py
 */

let themes = {
  dark: [
    "mountain.css",
    "blue_dolphin.css",
    "joker.css",
    "anti_hero.css",
    "dots.css",
    "trance.css",
    "earthsong.css",
    "peach_blossom.css",
    "material.css",
    "superuser.css",
    "metropolis.css",
    "aether.css",
    "olivia.css",
    "husqy.css",
    "miami_nights.css",
    "wavez.css",
    "future_funk.css",
    "stealth.css",
    "bouquet.css",
    "sonokai.css",
    "fire.css",
    "voc.css",
    "rgb.css",
    "catppuccin.css",
    "rose_pine.css",
    "red_dragon.css",
    "arch.css",
    "drowning.css",
    "vscode.css",
    "incognito.css",
    "monokai.css",
    "pulse.css",
    "viridescent.css",
    "tron_orange.css",
    "chaos_theory.css",
    "ryujinscales.css",
    "norse.css",
    "bliss.css",
    "laser.css",
    "dracula.css",
    "80s_after_dark.css",
    "alduin.css",
    "floret.css",
    "carbon.css",
    "aurora.css",
    "bushido.css",
    "grape.css",
    "nord.css",
    "solarized_dark.css",
    "moonlight.css",
    "matrix.css",
    "night_runner.css",
    "horizon.css",
    "cyberspace.css",
    "mint.css",
    "modern_dolch.css",
    "dark_note.css",
    "hammerhead.css",
    "dark_magic_girl.css",
    "luna.css",
    "purpleish.css",
    "blueberry_dark.css",
    "watermelon.css",
    "nebula.css",
    "iv_spade.css",
    "nautilus.css",
    "gruvbox_dark.css",
    "mashu.css",
    "shadow.css",
    "rudy.css",
    "ishtar.css",
    "terror_below.css",
    "terminal.css",
    "terra.css",
    "oblivion.css",
    "metaverse.css",
    "dev.css",
    "dark.css",
    "iceberg_dark.css",
    "midnight.css",
    "everblush.css",
  ],
  light: [
    "sweden.css",
    "cherry_blossom.css",
    "dualshot.css",
    "graen.css",
    "camping.css",
    "strawberry.css",
    "ez_mode.css",
    "alpine.css",
    "slambook.css",
    "cafe.css",
    "mizu.css",
    "olive.css",
    "our_theme.css",
    "peaches.css",
    "miami.css",
    "evil_eye.css",
    "taro.css",
    "iceberg_light.css",
    "honey.css",
    "deku.css",
    "repose_dark.css",
    "lime.css",
    "sewing_tin_light.css",
    "breeze.css",
    "soaring_skies.css",
    "modern_ink.css",
    "muted.css",
    "9009.css",
    "nord_light.css",
    "dmg.css",
    "darling.css",
    "solarized_light.css",
    "diner.css",
    "pink_lemonade.css",
    "fleuriste.css",
    "rose_pine_dawn.css",
    "menthol.css",
    "gruvbox_light.css",
    "discord.css",
    "frozen_llama.css",
    "onedark.css",
    "modern_dolch_light.css",
    "hanok.css",
    "retrocast.css",
    "cheesecake.css",
    "fledgling.css",
    "milkshake.css",
    "tangerine.css",
    "dollar.css",
    "paper.css",
    "serika_dark.css",
    "dino.css",
    "mexican.css",
    "red_samurai.css",
    "comfy.css",
    "lilac_mist.css",
    "vaporwave.css",
    "bento.css",
    "retro.css",
    "magic_girl.css",
    "rainbow_trail.css",
    "ms_cupcakes.css",
    "lavender.css",
    "beach.css",
    "passion_fruit.css",
    "mr_sleeves.css",
    "repose_light.css",
    "pastel.css",
    "froyo.css",
    "leather.css",
    "grand_prix.css",
    "striker.css",
    "shoko.css",
    "trackday.css",
    "desert_oasis.css",
    "cy_red.css",
    "botanical.css",
    "creamsicle.css",
    "tiramisu.css",
    "matcha_moccha.css",
    "rose_pine_moon.css",
    "iv_clover.css",
    "godspeed.css",
    "lil_dragon.css",
    "bingsu.css",
    "terrazzo.css",
    "blueberry_light.css",
    "copper.css",
    "8008.css",
    "hedge.css",
    "macroblank.css",
    "witch_girl.css",
    "serika.css",
    "fundamentals.css",
    "snes.css",
    "fruit_chew.css",
    "sewing_tin.css",
  ],
};


let darkThemeToggler = document.getElementById("dark-theme-btn");
let lightThemeToggler = document.getElementById("light-theme-btn");
let themeBtnSeparator = document.getElementsByClassName("theme-btn-separator")[0]
let themeNameDisplay = document.getElementById("theme-name-display");

let themeStyleElement = document.getElementById("theme-link");

let timeout = null;
let currentThemeIdx = {
  "dark": Number(localStorage.getItem("theme-dark-idx") || 1), 
  "light": Number(localStorage.getItem("theme-light-idx") || 1)
}
let currentMode = localStorage.getItem("theme-mode") || "dark"

applyTheme(currentMode, currentThemeIdx[currentMode], false);

darkThemeToggler.addEventListener("click", function(_) {toggleTheme("dark", currentThemeIdx["dark"])})
lightThemeToggler.addEventListener("click", function(_) {toggleTheme("light", currentThemeIdx["light"])})

function toggleTheme(mode, modeThemeIdx) {
  if (modeThemeIdx == currentThemeIdx[mode] && mode == currentMode) {
    let newThemeIdx = modeThemeIdx + 1 < themes[mode].length ? modeThemeIdx + 1 : 0
    currentThemeIdx[mode] = newThemeIdx
  }
  applyTheme(mode, currentThemeIdx[mode] || 0)
  currentMode = mode
}

function applyTheme(mode, idx, showTheme=true) {
  if (idx >= themes[mode].length || idx < 0) {
    throw RangeError
  }
  let cssPath = `/css/themes/${themes[mode][idx]}`;
  themeStyleElement.href = cssPath;

  if (!showTheme) return;

  localStorage.setItem("theme-mode", mode);
  localStorage.setItem("theme-dark-idx", currentThemeIdx["dark"]);
  localStorage.setItem("theme-light-idx", currentThemeIdx["light"]);

  darkThemeToggler.style.display = "none";
  lightThemeToggler.style.display = "none";
  themeBtnSeparator.style.display = "none";

  if (timeout) {
    clearInterval(timeout)
  }

  themeNameDisplay.innerText = themes[mode][idx].replace(".css", "").replaceAll("_", " ");
  ;
  themeNameDisplay.style.display = "inline";

  timeout = setTimeout(() => { 
    themeNameDisplay.style.display = "none";
    darkThemeToggler.style.display = "inline";
    lightThemeToggler.style.display = "inline";
    themeBtnSeparator.style.display = "inline";
  }, 500)
}
