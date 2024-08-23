/* Themes are copied from the MonkeyType repo
 * https://github.com/monkeytypegame/monkeytype/tree/master/frontend/static/themes
 */
let themes = [
  "8008.css",
  "80s_after_dark.css",
  "9009.css",
  "aether.css",
  "alduin.css",
  "alpine.css",
  "anti_hero.css",
  "arch.css",
  "aurora.css",
  "beach.css",
  "bento.css",
  "bingsu.css",
  "bliss.css",
  "blueberry_dark.css",
  "blueberry_light.css",
  "blue_dolphin.css",
  "botanical.css",
  "bouquet.css",
  "breeze.css",
  "bushido.css",
  "cafe.css",
  "camping.css",
  "carbon.css",
  "catppuccin.css",
  "chaos_theory.css",
  "cheesecake.css",
  "cherry_blossom.css",
  "comfy.css",
  "copper.css",
  "creamsicle.css",
  "cyberspace.css",
  "cy_red.css",
  "dark.css",
  "dark_magic_girl.css",
  "dark_note.css",
  "darling.css",
  "deku.css",
  "desert_oasis.css",
  "dev.css",
  "diner.css",
  "dino.css",
  "discord.css",
  "dmg.css",
  "dollar.css",
  "dots.css",
  "dracula.css",
  "drowning.css",
  "dualshot.css",
  "earthsong.css",
  "everblush.css",
  "evil_eye.css",
  "ez_mode.css",
  "fire.css",
  "fledgling.css",
  "fleuriste.css",
  "floret.css",
  "froyo.css",
  "frozen_llama.css",
  "fruit_chew.css",
  "fundamentals.css",
  "future_funk.css",
  "godspeed.css",
  "graen.css",
  "grand_prix.css",
  "grape.css",
  "gruvbox_dark.css",
  "gruvbox_light.css",
  "hammerhead.css",
  "hanok.css",
  "hedge.css",
  "honey.css",
  "horizon.css",
  "husqy.css",
  "iceberg_dark.css",
  "iceberg_light.css",
  "incognito.css",
  "ishtar.css",
  "iv_clover.css",
  "iv_spade.css",
  "joker.css",
  "laser.css",
  "lavender.css",
  "leather.css",
  "lilac_mist.css",
  "lil_dragon.css",
  "lime.css",
  "luna.css",
  "macroblank.css",
  "magic_girl.css",
  "mashu.css",
  "matcha_moccha.css",
  "material.css",
  "matrix.css",
  "menthol.css",
  "metaverse.css",
  "metropolis.css",
  "mexican.css",
  "miami.css",
  "miami_nights.css",
  "midnight.css",
  "milkshake.css",
  "mint.css",
  "mizu.css",
  "modern_dolch.css",
  "modern_dolch_light.css",
  "modern_ink.css",
  "monokai.css",
  "moonlight.css",
  "mountain.css",
  "mr_sleeves.css",
  "ms_cupcakes.css",
  "muted.css",
  "nautilus.css",
  "nebula.css",
  "night_runner.css",
  "nord.css",
  "nord_light.css",
  "norse.css",
  "oblivion.css",
  "olive.css",
  "olivia.css",
  "onedark.css",
  "our_theme.css",
  "paper.css",
  "passion_fruit.css",
  "pastel.css",
  "peach_blossom.css",
  "peaches.css",
  "pink_lemonade.css",
  "pulse.css",
  "purpleish.css",
  "rainbow_trail.css",
  "red_dragon.css",
  "red_samurai.css",
  "repose_dark.css",
  "repose_light.css",
  "retrocast.css",
  "retro.css",
  "rgb.css",
  "rose_pine.css",
  "rose_pine_dawn.css",
  "rose_pine_moon.css",
  "rudy.css",
  "ryujinscales.css",
  "serika.css",
  "serika_dark.css",
  "sewing_tin.css",
  "sewing_tin_light.css",
  "shadow.css",
  "shoko.css",
  "slambook.css",
  "snes.css",
  "soaring_skies.css",
  "solarized_dark.css",
  "solarized_light.css",
  "sonokai.css",
  "stealth.css",
  "strawberry.css",
  "striker.css",
  "superuser.css",
  "sweden.css",
  "tangerine.css",
  "taro.css",
  "terminal.css",
  "terra.css",
  "terrazzo.css",
  "terror_below.css",
  "tiramisu.css",
  "trackday.css",
  "trance.css",
  "tron_orange.css",
  "vaporwave.css",
  "viridescent.css",
  "voc.css",
  "vscode.css",
  "watermelon.css",
  "wavez.css",
  "witch_girl.css",
];
themeToggler = document.getElementById("theme-toggle");

let themeStyleElement = document.getElementById("theme-link");

let savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  themeStyleElement.href = savedTheme;
}

themeToggler.addEventListener("click", function(event) {
  let themeName = themeStyleElement.href.split("/");
  themeName = themeName[themeName.length - 1];
  let themeIdx = themes.indexOf(themeName);

  let cssPath = `/css/themes/${themes[themeIdx + 1]}`;
  themeStyleElement.href = cssPath;
  localStorage.setItem("theme", cssPath);

  setTimeout(() => {
    themeToggler.innerText = themeName;
    setTimeout(() => (themeToggler.innerText = "Theme"), 2000);
  }, 200);
});
