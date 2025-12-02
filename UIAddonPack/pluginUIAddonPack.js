/*
    UI Add-on Pack v1.1.5 by AAD
    ----------------------------
    https://github.com/AmateurAudioDude/FM-DX-Webserver-Plugin-UI-Addon-Pack
*/

'use strict';

(() => {

const pluginVersion = '1.1.5';
const pluginName = "UI Add-on Pack";
const pluginHomepageUrl = "https://github.com/AmateurAudioDude/FM-DX-Webserver-Plugin-UI-Addon-Pack";
const pluginUpdateUrl = "https://raw.githubusercontent.com/AmateurAudioDude/FM-DX-Webserver-Plugin-UI-Addon-Pack/refs/heads/main/UIAddonPack/pluginUIAddonPack.js";
const pluginSetupOnlyNotify = true;
const CHECK_FOR_UPDATES = true;

// #################### CONFIGURATION #################### //

const ENABLE_PLUGIN = false;

// #################### CANVAS GRAPH FADE IN #################### //

// Fades in the signal graph on page load.
const CANVAS_FADE_EFFECT = false;

// #################### FMLIST BUTTON #################### //

// Reduces the size of the FMLIST button and relocates it to the top-right corner of the 'TX info' panel.
const BUTTON_FM_LIST_MOD = false;

// Minimum distance in km of radio station before FMLIST button becomes visible.
const BUTTON_FM_LIST_MOD_MINIMUM_HIDE_DISTANCE = 200;

// #################### NATIVE MOBILE TRAY #################### //

// Moves the mobile tray to the top of page.
const MOVE_MOBILE_TRAY_TO_TOP = false;

// Hide mobile tray except play button.
const HIDE_MOBILE_TRAY = false;

// #################### MOBILE STATUS BAR #################### //

// On mobile devices, shows a fixed status bar at the top of the webpage, designed similar to the mobile phone's status bar.
// Although all three can be independently set, it's recommended to have them all set to either 'true' or 'false'.
const MOBILE_STATUS_BAR = false;

// Status bar icon: Users online icon moved from the dropdown menu to status bar.
const MOBILE_STATUS_BAR_SHOW_USERS = false;

// Status bar icon: Audio stream status in the form of a signal strength icon.
const MOBILE_STATUS_BAR_CONNECTION = false;

// #################### SIDEBAR MENU ADDITIONS #################### //

// Enables additional options to the side bar settings menu. Each option can then be individually set.
const SIDEBAR_ADDITIONS = false;

// Side bar option to increase the canvas height, which affects the signal graph, and plugins, such as "Spectrum Graph" and "RDS Logger".
const SIDEBAR_ADDITIONS_EXPAND_CANVAS = false;

// Side bar option to hide the background image.
const SIDEBAR_ADDITIONS_HIDE_BACKGROUND = false;

// #################### MULTIPLE USERS POPUP #################### //

// Displays a popup if 2 or more users are connected, admins excluded.
const MULTIPLE_USERS_NOTICE = false;
const MULTIPLE_USERS_NOTICE_NATIVE_POPUP = false;
const MULTIPLE_USERS_NOTICE_MESSAGE_1 = `This receiver is currently in use.`;
const MULTIPLE_USERS_NOTICE_MESSAGE_2 = `Please be considerate and mindful of other users before tuning.`;

// #################### RDS FLAG BULLET POINT #################### //

// Displays a bullet point next to the current RADIOTEXT being decoded, either A or B.
const RDS_FLAG_INDICATOR = false;

// #################### MULTIPATH ICON #################### //

// Adds a multipath icon alongside the stereo/mono icon.
const MULTIPATH_INDICATOR = false;

// When RDS_ICON_STYLE is enabled, choose which icon the multipath indicator attaches to.
// The multipath icon will appear to the right of the selected icon.
// Options: "STEREO", "PTY", "MS", "ECC", "TP", "TA", "RDS"
const MULTIPATH_ATTACH_TO = "STEREO";

// Adjustable multipath icon spacing when not attached to Stereo/Mono icon.
const MULTIPATH_LEFT_PADDING = -8;

// Set to true if using a TEF radio or false if using a TEF module. Based on the assumption TEF radio MP peaks around 40%.
const IS_TEF_RADIO = false;

// #################### NEW USER TUNING DELAY #################### //

// Enables new user tune delay, admins excluded.
const TUNE_DELAY_ENABLE = false;

// Sets a delay in seconds before a new user can begin tuning, admins excluded.
// NOTE: Set to 0 to disable.
const TUNE_DELAY = 2;

// Sets a delay in seconds, with an on screen timer, before a new user can begin tuning if at least one user is already online.
// NOTE: Set to 0 to disable.
const TUNE_DELAY_IF_MORE_THAN_ONE_USER = 45;

// #################### NEW USER DEFAULTS #################### //

// Default signal unit for new users.
// 0 = default, 1 = dbf, 2 = dbuv, 3 = dbm
const DEFAULT_SIGNAL_UNIT = 0;

// #################### VOLUME TOAST NOTIFICATION #################### //

// Displays a toast notification near the bottom of the webpage whenever the volume is changed.
const VOLUME_PERCENTAGE_TOAST = false;

// #################### MISCELLANEOUS CSS VISUAL STYLES #################### //

// Displays canvas in landscape mode with limited height (mobile).
const DISPLAY_CANVAS_IN_LANDSCAPE_MODE = false;

// Displays canvas in portrait mode (mobile).
const DISPLAY_CANVAS_IN_PORTRAIT_MODE = false;

// Adds padding to panels, effective in limited-width windows.
const ADD_PADDING_TO_PANELS = false;

// Adds a glow effect around the 'Frequency' key input while focused.
const GLOW_EFFECT_ON_FREQUENCY_INPUT = false;

// Reduces 'half opacity' value, to appear dimmer.
const REDUCE_HALF_OPACITY = false;

// Slightly increases size of top-right icons.
const INCREASE_TOP_RIGHT_ICON_SIZE = false;

// Slightly reduces blur effect when sidebar menu is open.
const REDUCE_SIDEBAR_BLUR = false;

// Increases frequency font weight.
const INCREASE_FREQUENCY_FONT_WEIGHT = false;

// Adds a gradient effect to the buttons
const GRADIENT_BUTTONS = false;
const INCLUDE_SCANNER_BUTTONS = false;

// Adds a glowing effect.
const LED_GLOW_EFFECT_ICONS = false; // Enables glow effect for RDS icons, such as the Stereo/Mono icon.
const LED_GLOW_EFFECT_LARGE = false; // Enables glow effect for large text/digits, which might annoy users.
const LED_GLOW_EFFECT_SMALL = false; // Enables glow effect for small text/digits, which might annoy users.
const LED_GLOW_EFFECT_RDSPS = false; // Enables glow effect for RDS PS text, which might annoy users.
const LED_GLOW_EFFECT_FREQ = false;  // Enables glow effect for frequency digits, which might annoy users.

// Dims the PI CODE font for incomplete PI decodes.
const DIM_INCOMPLETE_PI_CODE = false;

// Sets the hex color code for stereo icon.
// Use a 6-digit hex color, e.g. "#FF0000" for bright red.
const STEREO_ICON_COLOR = "default";
const STEREO_ICON_COLOR_OFF = "";

// RDS icon styling (Highpoint2000)
const RDS_ICON_STYLE = false;
const RDS_ICON_STYLE_MOBILE = false;
const RDS_ICON_STYLE_MS_OFF_AS_LETTERS = false;
const RDS_ICON_STYLE_REMOVE_RDS_ICON = false;
const LED_GLOW_EFFECT_ICONS_RDS_ICON_STYLE_PTY = false;
const LED_GLOW_EFFECT_ICONS_RDS_ICON_STYLE_MS = false;
const LED_GLOW_EFFECT_ICONS_METRICS_MONITOR_PLUGIN = false;

// === Select preset ===
// Options: 0 = user-defined, 1 = preset 1, 2 = preset 2, 3 = preset 3
const RDS_ICON_PRESET = 1;

// #################### RDS ICON ORDER CONFIGURATION #################### //

//
//   PTY    = Programme Type
//   MS     = Music/Speech indicator
//   ECC    = Extended Country Code
//   STEREO = Stereo/Mono indicator
//   TP     = Traffic Programme
//   TA     = Traffic Announcement
//   RDS    = RDS signal indicator
//
//

// === Preset definitions ===
const RDS_ICON_STYLE_PRESETS = {
    user: {
        FIRST_ROW: ["PTY", "MS"],
        SECOND_ROW: ["ECC", "STEREO", "TP", "TA", "RDS"],
        FIRST_ROW_GAP: 8,
        SECOND_ROW_GAP: 16,
        TP_TA_GAP: 8,
        MS_TOP_PX: 4.5, // Consider both Firefox and Chrome
        MS_TOP_PADDING: 9,
        STEREO_ICON_SPACING: 1,
        PTY_HEIGHT: 20,
        GAP_ROW_1: 1,
        GAP_ROW_2: 6
    },
    1: {
        FIRST_ROW: ["PTY", "MS"],
        SECOND_ROW: ["ECC", "STEREO", "TP", "TA", "RDS"],
        FIRST_ROW_GAP: 8,
        SECOND_ROW_GAP: 16,
        TP_TA_GAP: 8,
        MS_TOP_PX: 4.5,
        MS_TOP_PADDING: 9,
        STEREO_ICON_SPACING: 1,
        PTY_HEIGHT: 20,
        GAP_ROW_1: 1,
        GAP_ROW_2: 6
    },
    2: {
        FIRST_ROW: ["STEREO", "RDS"],
        SECOND_ROW: ["ECC", "MS", "PTY", "TP", "TA"],
        FIRST_ROW_GAP: 8,
        SECOND_ROW_GAP: 8,
        TP_TA_GAP: 8,
        MS_TOP_PX: 2.8,
        MS_TOP_PADDING: 7,
        STEREO_ICON_SPACING: 6,
        PTY_HEIGHT: 17,
        GAP_ROW_1: -6,
        GAP_ROW_2: 0
    },
    3: {
        FIRST_ROW: ["PTY"],
        SECOND_ROW: ["TP", "TA", "ECC", "STEREO", "MS"],
        FIRST_ROW_GAP: 8,
        SECOND_ROW_GAP: 16,
        TP_TA_GAP: 8,
        MS_TOP_PX: 11.5, // Consider both Firefox and Chrome
        MS_TOP_PADDING: 8,
        STEREO_ICON_SPACING: 1,
        PTY_HEIGHT: 20,
        GAP_ROW_1: 1,
        GAP_ROW_2: 6
    }
};

// #################### PLUGIN BUTTON ORDER #################### //

const SORT_PLUGIN_BUTTONS = false;

// Set the plugin order by specifying the corresponding numbers from below.
// Example format: "1, 2, 11, 4" - this defines the display order.
const PLUGINS_USER_ORDER = "1";

// Mapping of plugin IDs to their corresponding button element IDs.
// Use these numbers in 'PLUGINS_USER_ORDER' to control which plugins appear and in what order.
//
//    1:       Spectrum
//    2:       Record
//    3:       RDS Logger
//    4:       More info
//    5:       Livemap
//    6:       Screenshot
//    7:       ES Alert
//    8:       ES Follow
//    9:       GPS
//   10:       URDS
//   11:       DX Alert
//   12:       STREAM
//   13:       NYE Countdown
//

// #################### CONSOLE LOG SETTINGS #################### //

// This will suppress browser console log entries for the website. Warnings and errors are still shown.
// Most users can ignore this setting.
const HIDE_CONSOLE_LOGS = false;

// ########################################################################################################################

















if (ENABLE_PLUGIN) {

let styleFixesElement = document.createElement('style');
styleFixesElement.textContent = `
/*** BUG FIXES & REGRESSIONS ***/

/* Invisible text cursor for input with Firefox */
input[readonly] {
    caret-color: transparent;
    user-select: none;
}

/* Admin panel (User Management) */
.wrapper-outer #wrapper.setup-wrapper.admin-wrapper.panel-full .panel-full #users.panel-full input#banlist-add-ip.input-text.w-100,
.wrapper-outer #wrapper.setup-wrapper.admin-wrapper.panel-full .panel-full #users.panel-full input#banlist-add-reason.input-text.w-150 {
    width: 100% !important;
}
`;

document.head.appendChild(styleFixesElement);

}

if (ENABLE_PLUGIN && window.location.pathname !== '/setup') {

// #################### GENERAL SETTINGS #################### //

// Suppress all console logs
if (HIDE_CONSOLE_LOGS) console.log = function() {};

// Check if administrator code
var isTuneAuthenticated = false;
var isTunerLocked = false;
var isTuningAllowed = false;

document.addEventListener('DOMContentLoaded', () => {
    checkAdminMode();
});

// Is the user administrator?
function checkAdminMode() {
    const bodyText = document.body.textContent || document.body.innerText;
    isTunerLocked = !!document.querySelector('.fa-solid.fa-key.pointer.tooltip') || !!document.querySelector('.fa-solid.fa-lock.pointer.tooltip');
    isTuneAuthenticated = bodyText.includes("You are logged in as an administrator.") || bodyText.includes("You are logged in as an adminstrator.") || bodyText.includes("You are logged in and can control the receiver.");
    if (isTuneAuthenticated || (isTunerLocked && isTuneAuthenticated) || (!isTunerLocked && !isTuneAuthenticated)) isTuningAllowed = true;
    if (isTuneAuthenticated) {
        console.log(`[${pluginName}] Logged in as administrator`);
    }
}

// #################### ADDITIONAL CSS STYLES #################### //

let styleElement = document.createElement('style');
styleElement.textContent = `
`;

if (DISPLAY_CANVAS_IN_LANDSCAPE_MODE) {
  styleElement.textContent += `
  /* [MOBILE] Display canvas graph at low height (v1.2.5+) */
  @media only screen and (min-width: 900px) and (max-device-width: 960px) {
    .canvas-container {
      display: block;
    }
  }
  `;
}

if (DISPLAY_CANVAS_IN_PORTRAIT_MODE) {
  styleElement.textContent += `
  /* [MOBILE] Display canvas graph in portrait mode */
  @media only screen and (min-width: 240px) and (max-width: 480px) and (orientation: portrait) {
    canvas#signal-canvas {
      max-width: 100%;
    }
    .canvas-container {
      display: block;
      max-height: 120px;
      transform: scaleX(0.72) scaleY(0.72);
      margin: -4px auto -36px;
      width: auto;
    }
  }
  `;
}

if (ADD_PADDING_TO_PANELS) {
  styleElement.textContent += `
  /* RADIOTEXT text padding */
  #rt-container {
    padding-left: 8px;
    padding-right: 8px;
  }

  /* PTY padding */
  #flags-container-desktop.panel-33.user-select-none {
    min-width: 240px;
  }

  /* PS padding */
  #ps-container {
    min-width: 200px;
  }
  `;
}

if (GLOW_EFFECT_ON_FREQUENCY_INPUT) {
  styleElement.textContent += `
  /* Frequency key input glow effect */
  #wrapper #tune-buttons input[placeholder="Frequency"]:placeholder-shown {
    opacity: .85;
  }
  #wrapper #tune-buttons input[placeholder="Frequency"]:placeholder-shown:focus {
    opacity: .45;
  }
  input#commandinput:focus {
    box-shadow: 0 0 8px var(--color-4);
  }
  `;
}

if (REDUCE_HALF_OPACITY) {
  styleElement.textContent += `
  /* Reduce half opacity 50% value */
  .opacity-half {
    opacity: 0.25 !important;
  }
  `;
}

if (INCREASE_TOP_RIGHT_ICON_SIZE) {
  styleElement.textContent += `
  /* Increase size of top-right side icons */
  .wrapper-outer button.chatbutton,
  .wrapper-outer .settings,
  .wrapper-outer .users-online-container .fa-solid.fa-user,
  .wrapper-outer .users-online-container .users-online {
    font-size: 18px;
  }

  .wrapper-outer .users-online-container {
    width: 56px;
  }

  .wrapper-outer .users-online-container .users-online {
    min-width: 10px;
    margin-bottom: 1px;
    display: inline-block;
  }
  `;
}

if (REDUCE_SIDEBAR_BLUR) {
  styleElement.textContent += `
  /* Side bar menu changes */
  .modal {
    transition: opacity 0.3s ease-in-out;
    backdrop-filter: blur(3px);
  }
  `;
}

if (INCREASE_FREQUENCY_FONT_WEIGHT) {
  const isChrome = /Chrome/.test(navigator.userAgent) && !/Edg|OPR|Brave/.test(navigator.userAgent);

  styleElement.textContent += `
  /* Frequency font weight */
  #data-frequency {
  font-weight: ${isChrome ? 599 : 600};
  }
  `;
}

// Gradient buttons
if (GRADIENT_BUTTONS) {
  if (INCLUDE_SCANNER_BUTTONS) {
    styleElement.textContent += `
      #scanner-controls .dropdown:nth-of-type(1) input {
        border-radius: 14px 0 0 14px;
      }
      #scanner-controls .dropdown:nth-of-type(2) input {
        border-radius: 0;
      }
      #scanner-controls .dropdown:nth-of-type(3) input {
        border-radius: 0 14px 14px 0;
      }

      #scanner-controls .dropdown input {
        background-image: linear-gradient(var(--color-5), var(--color-3));
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
      }

      #scanner-controls .dropdown input:hover {
        background-image: linear-gradient(var(--color-3), var(--color-5));
        box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
        transform: translateY(0.1px);
      }
    `;
  }

  styleElement.textContent += `
    .playbutton, .data-eq, #data-ant input, #data-bw input, .data-ims,
    #freq-down, #search-down, #scanner-down,
    #freq-up, #search-up, #scanner-up,
    #button-presets-bank-dropdown input {
      background-image: linear-gradient(var(--color-5), var(--color-3));
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
    }

    .playbutton:hover, .data-eq:hover, #data-ant input:hover, #data-bw input:hover, .data-ims:hover,
    #freq-down:hover, #search-down:hover, #scanner-down:hover,
    #freq-up:hover, #search-up:hover, #scanner-up:hover,
    #Scan-on-off:hover, #button-presets-bank-dropdown input:hover {
      background-image: linear-gradient(var(--color-3), var(--color-5));
      box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
      transform: translateY(0.1px);
    }

    html body div.wrapper-outer.main-content div#wrapper div.flex-container div.panel-100.no-bg div.flex-container div.panel-33.hide-phone.no-bg div.flex-container span.panel-100-real.m-0,
    #Scan-on-off {
      filter: brightness(117.5%);
      position: relative;
      z-index: 0;
      border-radius: 14px;
    }

    html body div.wrapper-outer.main-content div#wrapper div.flex-container div.panel-100.no-bg div.flex-container div.panel-33.hide-phone.no-bg div.flex-container span.panel-100-real.m-0::before,
    #Scan-on-off::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%);
      pointer-events: none;
      z-index: 1;
      border-radius: inherit;
    }
  `;
}

if (LED_GLOW_EFFECT_LARGE || LED_GLOW_EFFECT_SMALL || LED_GLOW_EFFECT_ICONS || LED_GLOW_EFFECT_FREQ || LED_GLOW_EFFECT_RDSPS) {
  styleElement.textContent += `
    :root {
      --glow-alpha-1: 0.4;
      --glow-alpha-2: 0.3;
      --glow-alpha-3: 0.2;
      --glow-alpha-4: 0.1;
    }
  `;
}

if (LED_GLOW_EFFECT_LARGE) {
  styleElement.textContent += `
    .text-big, .text-small.text-gray.highest-signal-container,
  `;
}

if (LED_GLOW_EFFECT_SMALL) {
  styleElement.textContent += `
     .text-small, #data-rt0, #data-rt1, #data-station-city,
  `;
}

if (LED_GLOW_EFFECT_ICONS) {
  styleElement.textContent += `
    .wrapper-outer #wrapper #flags-container-desktop.panel-33.user-select-none h3 .opacity-full,
  `;
}

if (LED_GLOW_EFFECT_FREQ) {
  styleElement.textContent += `
    #data-frequency,
  `;
}

if (LED_GLOW_EFFECT_RDSPS) {
  styleElement.textContent += `
    #data-ps,
  `;
}

if (LED_GLOW_EFFECT_LARGE || LED_GLOW_EFFECT_SMALL || LED_GLOW_EFFECT_ICONS || LED_GLOW_EFFECT_FREQ || LED_GLOW_EFFECT_RDSPS) {
  styleElement.textContent += `
    #placeholder-dummy {
      color: var(--text-color-default);
      text-shadow:
        0 0 5px rgba(255, 255, 255, var(--glow-alpha-1)),
        0 0 10px rgba(255, 255, 255, var(--glow-alpha-2)),
        0 0 20px rgba(238, 238, 238, var(--glow-alpha-3)),
        0 0 30px rgba(204, 204, 204, var(--glow-alpha-4));
    }
  `;
}

if (LED_GLOW_EFFECT_ICONS) {
  styleElement.textContent += `
    .wrapper-outer #wrapper #flags-container-desktop.panel-33.user-select-none h3 .opacity-half {
      color: inherit;
      text-shadow: none;
    }

    .wrapper-outer #wrapper #flags-container-desktop.panel-33.user-select-none h3 .data-tp:not(:has(.opacity-half)),
    .wrapper-outer #wrapper #flags-container-desktop.panel-33.user-select-none h3 .data-ta:not(:has(.opacity-half)),
    .wrapper-outer #wrapper #flags-container-desktop.panel-33.user-select-none h3 span.data-ms:not(:has(.opacity-half)) {
      color: var(--text-color-default);
      text-shadow:
        0 0 5px rgba(255, 255, 255, var(--glow-alpha-1)),
        0 0 10px rgba(255, 255, 255, var(--glow-alpha-2)),
        0 0 20px rgba(238, 238, 238, var(--glow-alpha-3)),
        0 0 30px rgba(204, 204, 204, var(--glow-alpha-4));
    }

    .wrapper-outer #wrapper #flags-container-desktop.panel-33.user-select-none h3 .circle-container .circle,
    .wrapper-outer #wrapper .user-select-none .circle-container .circle {
      background-color: rgba(255, 255, 255, var(--glow-alpha-3));
      box-shadow:
        0 0 6px rgba(255, 255, 255, var(--glow-alpha-1)),
        0 0 12px rgba(238, 238, 238, var(--glow-alpha-2)),
        0 0 18px rgba(204, 204, 204, var(--glow-alpha-3)),
        0 0 24px rgba(170, 170, 170, var(--glow-alpha-4));
    }

    .wrapper-outer #wrapper #flags-container-desktop.panel-33.user-select-none h3 .circle-container.opacity-half .circle,
    .wrapper-outer #wrapper .user-select-none .circle-container.opacity-half .circle {
      background-color: inherit;
      box-shadow: none;
    }
  `;
}

document.head.appendChild(styleElement);

if (STEREO_ICON_COLOR !== "default") {
    const styleId = "custom-circle-style";
    let existingStyle = document.getElementById(styleId);
    if (!existingStyle) {
      existingStyle = document.createElement("style");
      existingStyle.id = styleId;
      document.head.appendChild(existingStyle);
    }
    existingStyle.textContent = `.circle.data-st { border: 2px solid ${STEREO_ICON_COLOR} }`;

    function clamp(num, min, max) {
      return Math.min(Math.max(num, min), max);
    }

    function multiplyRgb(rgb, factors) {
      return {
        r: clamp(Math.round(rgb.r * factors[0]), 0, 255),
        g: clamp(Math.round(rgb.g * factors[1]), 0, 255),
        b: clamp(Math.round(rgb.b * factors[2]), 0, 255),
      };
    }

    function rgbaString(rgb, alpha) {
      return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
    }

    function hexToRgb(hex) {
      const hexClean = hex.replace('#', '');
      const bigint = parseInt(hexClean, 16);
      return {
        r: (bigint >> 16) & 255,
        g: (bigint >> 8) & 255,
        b: bigint & 255
      };
    }

    // Slightly lighten multipliers by +0.05 capped at 1.0
    function lightenMultiplier(m) {
      return m.map(x => Math.min(x + 0.05, 1));
    }

    // Read alpha CSS vars and boost by 10%
    const style = getComputedStyle(document.documentElement);
    const alphaBoost = 1.1;

    const alphas = [
      (parseFloat(style.getPropertyValue('--glow-alpha-1')) || 0.6) * alphaBoost,
      (parseFloat(style.getPropertyValue('--glow-alpha-2')) || 0.4) * alphaBoost,
      (parseFloat(style.getPropertyValue('--glow-alpha-3')) || 0.3) * alphaBoost,
      (parseFloat(style.getPropertyValue('--glow-alpha-4')) || 0.2) * alphaBoost,
    ].map(a => Math.min(a, 1)); // clamp max at 1

    const backgroundAlpha = alphas[2]; // glow-alpha-3

    function applyGlow() {
      const styleId = "custom-circle-style";
      let existingStyle = document.getElementById(styleId);
      if (!existingStyle) {
        existingStyle = document.createElement("style");
        existingStyle.id = styleId;
        document.head.appendChild(existingStyle);
      }

      const circles = document.querySelectorAll('.wrapper-outer #wrapper h3 .circle-container .circle.data-st');

      circles.forEach(el => {
        if (el.classList.contains('opacity-half') || el.closest('.opacity-half')) {
          el.style.backgroundColor = 'inherit';
          el.style.boxShadow = 'none';

          existingStyle.textContent = `.circle.data-st { border: 2px solid ${STEREO_ICON_COLOR_OFF} }`;

          return;
        }

        existingStyle.textContent = `.circle.data-st { border: 2px solid ${STEREO_ICON_COLOR} }`;

        if (!LED_GLOW_EFFECT_ICONS) return;

        const borderColor = getComputedStyle(el).borderColor;
        let baseRgb;

        if (borderColor.startsWith('rgb')) {
          const [r, g, b] = borderColor.match(/\d+/g).map(Number);
          baseRgb = { r, g, b };
        } else if (borderColor.startsWith('#')) {
          baseRgb = hexToRgb(borderColor);
        } else {
          baseRgb = { r: 255, g: 255, b: 255 };
        }

        const baseMultipliers = [
          [1.0, 1.0, 1.0],
          [0.93, 1.12, 0.92],
          [0.8, 0.8, 0.8],
          [0.65, 0.8, 0.8],
          [0.53, 0.68, 0.68]
        ];

        const multipliers = baseMultipliers.map(lightenMultiplier);

        const glowColors = multipliers.slice(1).map((m, i) =>
          rgbaString(multiplyRgb(baseRgb, m), alphas[i])
        );

        el.style.backgroundColor = rgbaString(multiplyRgb(baseRgb, multipliers[0]), backgroundAlpha);
        el.style.boxShadow = `
          0 0 6px ${glowColors[0]},
          0 0 12px ${glowColors[1]},
          0 0 18px ${glowColors[2]},
          0 0 24px ${glowColors[3]}
        `;
      });
    }

    applyGlow();

    // MutationObserver
    const targetNode = document.querySelector('#flags-container-desktop');
    const observer = new MutationObserver(mutations => {
      for(const mutation of mutations) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          applyGlow();
        }
      }
    });

    if (targetNode) {
      observer.observe(targetNode, { attributes: true, subtree: true, attributeFilter: ['class'] });
    }
}

// Function to check if the span contains ? and add opacity
function checkPiForQuestionMark() {
  const dataPi = document.querySelector('#data-pi');
  if (DIM_INCOMPLETE_PI_CODE && dataPi) {
    if (dataPi.textContent.includes('?')) {
      dataPi.classList.add('opacity-half');
    } else {
      dataPi.classList.remove('opacity-half');
    }
  }
}

// MutationObserver
const observer = new MutationObserver(checkPiForQuestionMark);

const dataPiElement = document.querySelector('#data-pi');
if (dataPiElement) {
  observer.observe(dataPiElement, {
    childList: true,
    subtree: true
  });
}

checkPiForQuestionMark();

// #################### CANVAS GRAPH FADE IN #################### //

if (CANVAS_FADE_EFFECT) {
// Fade
const canvasGraph = document.querySelector('.wrapper-outer #wrapper .canvas-container #signal-canvas');
canvasGraph.style.opacity = 0;
setTimeout(() => {
    canvasGraph.style.transition = 'opacity 0.3s ease-in';
    canvasGraph.style.opacity = 1;
}, 100);
}

// #################### FMLIST BUTTON REPOSITION #################### //

if (BUTTON_FM_LIST_MOD) {
const buttonFMLIST = document.querySelector('.wrapper-outer #wrapper .flex-container .panel-100 button.log-fmlist');
const targetContainer = document.querySelector('.wrapper-outer #wrapper .flex-container .panel-100.no-bg .flex-container.flex-phone.flex-phone-column .panel-33.hover-brighten.tooltip');
const miniPopup = document.querySelector('.wrapper-outer #wrapper .flex-container .panel-100 button.tooltip .mini-popup-content');

if (buttonFMLIST && targetContainer) {
  targetContainer.appendChild(buttonFMLIST);
  targetContainer.style.position = 'relative';
  buttonFMLIST.style.position = 'absolute';
  buttonFMLIST.style.top = '0';
  buttonFMLIST.style.right = '0';
  buttonFMLIST.style.margin = '6px';
  buttonFMLIST.style.transform = 'scale(0.5)';
  buttonFMLIST.style.transformOrigin = 'top right';
}

if (miniPopup) {
  miniPopup.style.transform = 'scale(1.75)';
  miniPopup.style.left = '-60px';
  miniPopup.style.top = '80px';
}

// Hide button when distance is close
// CSS code
let styleElement = document.createElement('style');
styleElement.textContent = `
.wrapper-outer #wrapper button.log-fmlist {
  display: none;
}
`;
document.head.appendChild(styleElement);

function debounce(func, delay) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

const updateDistance = () => {
  const distanceElement = document.querySelector('.wrapper-outer #wrapper #data-station-container #data-station-distance');
  const FmListElement = document.querySelector('.wrapper-outer #wrapper button.log-fmlist');
  const containerElement = document.querySelector('.wrapper-outer #wrapper #data-station-container');
  if (containerElement && getComputedStyle(containerElement).display === 'none') {
    if (FmListElement) FmListElement.style.display = 'none';
  } else {
    if (distanceElement) {
      const distanceText = distanceElement.textContent;

      let distanceNumber = 0;
      let numberMatch = distanceText.match(/(\d+)\s*km/); // Check for km
      if (numberMatch) {
        distanceNumber = parseInt(numberMatch[1], 10);
      } else {
        numberMatch = distanceText.match(/(\d+)\s*mi/); // Check for mi
        if (numberMatch) {
          distanceNumber = (parseInt(numberMatch[1], 10) * 1.6093).toFixed(0);
        }
      }

      if (numberMatch) {
        if (distanceNumber > BUTTON_FM_LIST_MOD_MINIMUM_HIDE_DISTANCE) {
          FmListElement.style.display = 'block';
        }
      }
    }
  }
};

setInterval(function() {
  updateDistance();
}, 1000);
}

// #################### SIDE BAR MENU SETTINGS #################### //

if (SIDEBAR_ADDITIONS) {
// Function for side bar buttons
function createAdditionalCheckbox({ checkboxId, labelText, tooltipText, localStorageKey, onChangeCallback }) {
    function insertHtmlAfterLastCheckbox() {
        const checkboxes = document.querySelectorAll('.modal-panel-content .form-group');
        if (checkboxes.length > 0) {
            const newDiv = document.createElement('div');
            newDiv.className = 'form-group';
            newDiv.innerHTML = `
                <div class="switch flex-container flex-phone flex-phone-column flex-phone-center">
                    <input type="checkbox" tabindex="0" id="${checkboxId}" aria-label="${labelText}">
                    <label for="${checkboxId}" class="tooltip" data-tooltip="${tooltipText}"></label>
                    <span class="text-smaller text-uppercase text-bold color-4 p-10">${labelText}</span>
                </div>
            `;
            checkboxes[checkboxes.length - 1].insertAdjacentElement('afterend', newDiv);
        } else {
            console.warn(`[${pluginName}] No checkboxes found to insert after.`);
        }
    }
    
    insertHtmlAfterLastCheckbox();

    if (localStorage.getItem(localStorageKey) === "true") {
        document.getElementById(checkboxId).checked = true;
    }

    document.getElementById(checkboxId).addEventListener("change", function () {
        let isChecked = this.checked;
        localStorage.setItem(localStorageKey, isChecked);
        if (onChangeCallback) {
            onChangeCallback();
        }
    });

    const observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
                const bodyElement = document.body;
                if (window.getComputedStyle(bodyElement).background !== 'none') {
                    observer.disconnect();
                    if (onChangeCallback) {
                        onChangeCallback();
                    }
                }
            }
        }
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ['style'] });
}

if (SIDEBAR_ADDITIONS_EXPAND_CANVAS) {
    // SIDE BAR MENU BUTTON "EXPAND CANVAS"
    createAdditionalCheckbox({
        checkboxId: "expand-canvas-height",
        labelText: "Expand Canvas",
        tooltipText: "Enable to expand plugin canvas height.",
        localStorageKey: "expandCanvasHeight",
        onChangeCallback: function () {
            // style code also below
            expandCanvasHeight();
        }
    });

    function expandCanvasHeight() {
        const style = document.createElement('style');
        style.id = "expandCanvasStyle";
        style.innerHTML = `
            .canvas-container { height: 172px; }
            @media only screen and (min-width: 769px) and (max-height: 720px) {
                .canvas-container { height: 120px; }
            }
        `;
        
        // Remove previous styles to avoid conflicts
        const existingStyle = document.getElementById("expandCanvasStyle");
        if (existingStyle) {
            existingStyle.remove();
        }

        const canvasContainer = document.querySelector('.canvas-container');
        
        disableHeightAdjustment();

        // Check if "expandCanvasHeight" is set to "true"
        if (localStorage.getItem("expandCanvasHeight") === "true") {
            // Apply fixed height when enabled
            document.head.appendChild(style);
            if (canvasContainer) {
                const savedHeight = localStorage.getItem('canvasHeight');
                if (savedHeight && !isNaN(savedHeight)) {
                    const height = parseInt(savedHeight, 10);
                    const clampedHeight = Math.max(minHeight, Math.min(height, maxHeight)); // minHeight to maxHeight
                    canvasContainer.style.height = `${clampedHeight}px`;
                } else {
                    // Use default expanded height if no saved height
                    canvasContainer.style.height = "172px";
                }
            }
            enableHeightAdjustment(); // Enable mouse dragging to adjust height
        } else {
            if (canvasContainer) {
                canvasContainer.style.height = "140px"; // Set to default height when disabled
            }
        }
    }

    // Function to enable height adjustment via mouse dragging
    let isDragging = false;
    let canvasContainer;
    const resizeEdge = 22;   // Draggable area size
    const minHeight = 140;   // Minimum height in px
    const maxHeight = 200;   // Maximum height in px
    let heightDisplayBox;
    let hideTimeout;
    let isDoubleClickProcessing = false;  // Flag to prevent double execution

    let handleMouseMove, handleMouseDown, handleDoubleClick;

    // Floating box to show height
    function createHeightDisplayBox() {
        heightDisplayBox = document.createElement('div');
        heightDisplayBox.style.position = 'fixed';
        heightDisplayBox.style.top = '10px';
        heightDisplayBox.style.right = '10px';
        heightDisplayBox.style.backgroundColor = 'var(--color-5-transparent)';
        heightDisplayBox.style.color = 'var(--color-1)';
        heightDisplayBox.style.padding = '5px 10px';
        heightDisplayBox.style.fontSize = '12px';
        heightDisplayBox.style.borderRadius = '4px';
        heightDisplayBox.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.2)';
        heightDisplayBox.style.display = 'none';
        heightDisplayBox.style.zIndex = '10';
        document.body.appendChild(heightDisplayBox);
    }

    function updateHeightDisplayBox(height) {
        if (heightDisplayBox) {
            heightDisplayBox.textContent = `${height} px`;
        }
    }

    function enableHeightAdjustment() {
        canvasContainer = document.querySelector('.canvas-container');
        if (!canvasContainer) return;

        createHeightDisplayBox();

        handleMouseMove = function (e) {
            const rect = canvasContainer.getBoundingClientRect();
            const isNearBottomEdge = e.clientY > rect.bottom - resizeEdge;

            if (isNearBottomEdge && !isDragging) {
                canvasContainer.style.cursor = 'ns-resize'; // Change cursor to vertical resize
            } else if (!isDragging) {
                canvasContainer.style.cursor = 'default'; // Reset cursor
            }
        };

        canvasContainer.addEventListener('mousemove', handleMouseMove);

        // Define mousedown handler
        handleMouseDown = function (e) {
            if (e.button !== 0) return;  // Only allow left mouse button

            const rect = canvasContainer.getBoundingClientRect();
            if (e.clientY > rect.bottom - resizeEdge) {
                isDragging = true;

                clearTimeout(hideTimeout);

                // Disable text selection during dragging
                document.body.style.userSelect = 'none';

                // Temporary CSS rule to force ns-resize cursor globally
                const dragCursorStyle = document.createElement('style');
                dragCursorStyle.id = 'canvas-drag-cursor-override';
                dragCursorStyle.innerHTML = `
                    *, *:hover, *:active, *:focus {
                        cursor: ns-resize !important;
                    }
                `;
                document.head.appendChild(dragCursorStyle);

                const startY = e.clientY;
                const startHeight = canvasContainer.offsetHeight;

                heightDisplayBox.style.display = 'block';
                updateHeightDisplayBox(startHeight);

                // Mouse move event to adjust the height
                function onMouseMove(moveEvent) {
                    if (isDragging) {
                        const diffY = moveEvent.clientY - startY;
                        let newHeight = startHeight + diffY;

                        // Clamp the new height within specified range
                        newHeight = Math.max(minHeight, Math.min(newHeight, maxHeight));

                        canvasContainer.style.height = newHeight + 'px';
                        updateHeightDisplayBox(newHeight); // Update the height value in the box
                    }
                }

                // Mouse up event to stop dragging
                function onMouseUp() {
                    isDragging = false;

                    document.body.style.userSelect = 'auto';

                    // Remove temporary cursor override CSS
                    const dragCursorStyle = document.getElementById('canvas-drag-cursor-override');
                    if (dragCursorStyle) {
                        dragCursorStyle.remove();
                    }

                    canvasContainer.style.cursor = 'default';

                    clearTimeout(hideTimeout);
                    hideTimeout = setTimeout(() => {
                        heightDisplayBox.style.display = 'none';
                    }, 1000);

                    document.removeEventListener('mousemove', onMouseMove);
                    document.removeEventListener('mouseup', onMouseUp);

                    localStorage.setItem('canvasHeight', canvasContainer.offsetHeight);
                }

                document.addEventListener('mousemove', onMouseMove);
                document.addEventListener('mouseup', onMouseUp);
            }
        };

        canvasContainer.addEventListener('mousedown', handleMouseDown);

        handleDoubleClick = function (e) {
            if (localStorage.getItem("expandCanvasHeight") !== "true") {
                return;
            }

            // Double-click in the draggable area only
            const rect = canvasContainer.getBoundingClientRect();
            const isInDraggableArea = e.clientY > rect.bottom - resizeEdge;
            if (!isInDraggableArea) {
                return;
            }

            // Prevent double execution
            if (isDoubleClickProcessing) {
                return;
            }

            isDoubleClickProcessing = true;
            setTimeout(() => {
                isDoubleClickProcessing = false;
            }, 300);

            // Prevent event bubbling
            e.preventDefault();
            e.stopPropagation();

            const currentHeight = canvasContainer.offsetHeight;

            if (currentHeight === maxHeight) {
                const newHeight = localStorage.getItem("expandCanvasHeight") === "true" ? 172 : 140;
                canvasContainer.style.height = `${newHeight}px`;
            } else {
                canvasContainer.style.height = `${maxHeight}px`;
            }

            clearTimeout(hideTimeout);
            updateHeightDisplayBox(canvasContainer.offsetHeight);
            heightDisplayBox.style.display = 'block';

            hideTimeout = setTimeout(() => {
                heightDisplayBox.style.display = 'none';
            }, 1000);
        };

        canvasContainer.addEventListener('dblclick', handleDoubleClick);
    }

    // Function to disable height adjustment
    function disableHeightAdjustment() {
        if (canvasContainer) {
            canvasContainer.style.cursor = 'default';
        }

        isDragging = false;

        // Remove all mouse events related to dragging
        if (canvasContainer) {
            if (handleMouseMove) {
                canvasContainer.removeEventListener('mousemove', handleMouseMove);
            }
            if (handleMouseDown) {
                canvasContainer.removeEventListener('mousedown', handleMouseDown);
            }
            if (handleDoubleClick) {
                canvasContainer.removeEventListener('dblclick', handleDoubleClick);
            }
        }

        if (heightDisplayBox) {
            heightDisplayBox.style.display = 'none';
        }

        handleMouseMove = null;
        handleMouseDown = null;
        handleDoubleClick = null;
    }

    expandCanvasHeight();
}

if (SIDEBAR_ADDITIONS_HIDE_BACKGROUND) {
// SIDE BAR MENU BUTTON "HIDE BACKGROUND"
createAdditionalCheckbox({
    checkboxId: "hide-bg-image",
    labelText: "Hide Background",
    tooltipText: "Enable to hide the background image.",
    localStorageKey: "bgImageHidden",
    onChangeCallback: function () {
        const bgImage = localStorage.getItem('bgImage');
        if (bgImage && bgImage.length > 5 && localStorage.getItem('theme') !== 'theme9' && localStorage.getItem('bgImageHidden') !== 'true') {
            document.body.style.background = `url(${bgImage}) top center / cover fixed no-repeat var(--color-main)`;
        } else {
            document.body.style.background = 'var(--color-main)';
        }
    }
});
}
}

// #################### MOVE MOBILE TRAY #################### //

if (MOVE_MOBILE_TRAY_TO_TOP) {
    function moveTray() {
        document.addEventListener("DOMContentLoaded", function () {
            const mobileTray = document.getElementById("mobileTray");
            const playButton = mobileTray?.querySelector(".playbutton");

            if (mobileTray) {
                // Move tray to top
                document.body.insertBefore(mobileTray, document.body.firstChild);

                // Position tray at top
                Object.assign(mobileTray.style, {
                    position: "fixed",
                    top: "0",
                    left: "0",
                    width: "100%",
                    zIndex: "15",
                });

                if (HIDE_MOBILE_TRAY) {
                    mobileTray.style.display = "block";
                    mobileTray.style.background = "none";
                    mobileTray.style.backdropFilter = "none";
                    mobileTray.style.border = "none";
                    mobileTray.style.boxShadow = "none";
                    mobileTray.style.padding = "0";

                    // Hide all except play button
                    const children = Array.from(mobileTray.children);
                    children.forEach(child => {
                        if (!child.classList.contains("playbutton")) {
                            child.style.display = "none";
                        } else {
                            child.style.display = "block";
                            child.style.position = "absolute";
                            child.style.top = "35px";
                            child.style.left = "50%";
                            child.style.transform = "translateX(-50%)";
                        }
                    });
                }

                else if (playButton) {
                    Object.assign(playButton.style, {
                        position: "absolute",
                        top: "35px",
                        left: "50%",
                        transform: "translateX(-50%)",
                    });
                }
            }

            // Adjust content padding
            const wrapper = document.querySelector('.wrapper-outer.dashboard-panel');
            if (wrapper) {
                if (window.innerWidth < 720) {
                    wrapper.style.setProperty('padding-top', '110px');
                } else {
                    wrapper.style.setProperty('padding-top', '20px', 'important');
                }
            }
        });
    }

    moveTray();

    window.addEventListener('resize', moveTray);
}

if (HIDE_MOBILE_TRAY && !MOVE_MOBILE_TRAY_TO_TOP) {
    document.addEventListener("DOMContentLoaded", function () {
        const mobileTray = document.querySelector("div#mobileTray.hide-desktop");

        if (mobileTray) {
            // Hide all except .playbutton
            const children = Array.from(mobileTray.children);
            children.forEach(child => {
                if (!child.classList.contains("playbutton")) {
                    child.style.display = "none";
                } else {
                    child.style.display = "block";
                    child.style.position = "absolute";
                }
            });

            mobileTray.style.display = "block";
            mobileTray.style.background = "none";
            mobileTray.style.backdropFilter = "none";
            mobileTray.style.border = "none";
            mobileTray.style.boxShadow = "none";
            mobileTray.style.padding = "0";
        }
    });
}

// #################### STATUS BAR FOR DISPLAYS WITH LIMITED WIDTH #################### //

if (MOBILE_STATUS_BAR) {
document.addEventListener("DOMContentLoaded", function () {
    function moveButtons() {
        if (MOBILE_STATUS_BAR_CONNECTION && /Mobi|Android/i.test(navigator.userAgent) && window.matchMedia("(orientation: landscape)").matches) mobileStatusBarConnection(true);

        const wrapper = document.querySelector('.wrapper-outer.dashboard-panel');
        const pluginContent = document.querySelector('.dashboard-panel-plugin-content');

        if (window.innerWidth < 720) {
            if (!document.querySelector("#button-container")) {
                wrapper.style.setProperty('padding-top', '30px');
                // Create new div
                const buttonContainer = document.createElement("div");
                buttonContainer.id = "button-container";
                buttonContainer.style.backgroundColor = "var(--color-1)";
                wrapper.insertBefore(buttonContainer, wrapper.firstChild);

                // Get buttons

                const streamSignalMeter = document.querySelector("#stream-signal-meter");
                const usersOnlineContainer = document.querySelector(".users-online-container") || document.querySelector("#users-online-container");
                const chatButton = document.querySelector(".chatbutton");
                const settingsButton = document.querySelector(".settings") || document.querySelector("#settings");

                // Move buttons into new div in order from left to right
                if (streamSignalMeter) buttonContainer.appendChild(streamSignalMeter);
                if (usersOnlineContainer) buttonContainer.appendChild(usersOnlineContainer);
                if (chatButton) buttonContainer.appendChild(chatButton); 
                if (settingsButton) buttonContainer.appendChild(settingsButton); 

                buttonContainer.style.position = "fixed";
                buttonContainer.style.top = "0";
                buttonContainer.style.left = "0";
                buttonContainer.style.width = "100%";
                buttonContainer.style.height = "48px";
                buttonContainer.style.maxHeight = "48px";
                buttonContainer.style.zIndex = "1";
                buttonContainer.style.opacity = "0.99";
                buttonContainer.style.padding = "0";
                buttonContainer.style.backgroundColor = "var(--color-1)";
                buttonContainer.style.display = "flex";
                buttonContainer.style.justifyContent = "space-between";
                buttonContainer.style.alignItems = "center";
                buttonContainer.style.margin = "0";
                buttonContainer.style.whiteSpace = "nowrap";

                const elements = [chatButton, usersOnlineContainer, streamSignalMeter, settingsButton];
                elements.forEach(element => {
                    if (element) {
                        element.style.margin = "0px 16px 0px 16px";
                        element.style.verticalAlign = "top";
                        element.style.position = "static";
                        element.style.whiteSpace = "nowrap";
                        element.style.color = "var(--color-text)";
                        element.style.display = 'block';
                    }
                });

                // Set padding-top for wrapper
                const buttonHeight = buttonContainer.offsetHeight || 10;
                const adjustedMargin = buttonHeight - 20;
                wrapper.style.marginTop = adjustedMargin + "px";
                wrapper.style.zIndex = "12";
            }
        } else {
            // Remove div and move buttons back
            wrapper.style.removeProperty("margin-top");

            const buttonContainer = document.querySelector("#button-container");
            if (buttonContainer) {
                // Move buttons back to original position
                const streamSignalMeter = document.querySelector("#stream-signal-meter");
                const usersOnlineContainer = document.querySelector(".users-online-container") || document.querySelector("#users-online-container");
                const chatButton = document.querySelector(".chatbutton");
                const settingsButton = document.querySelector(".settings");

                // Place after because of Weather plugin or others
                if (pluginContent) {
                    if (settingsButton) pluginContent.after(settingsButton);
                    if (chatButton) pluginContent.after(chatButton);
                    if (usersOnlineContainer) pluginContent.after(usersOnlineContainer);
                    if (streamSignalMeter) pluginContent.after(streamSignalMeter);
                }

                buttonContainer.remove();

                const elements = [chatButton, usersOnlineContainer, streamSignalMeter, settingsButton];
                elements.forEach(element => {
                    if (element) {
                        element.style.position = '';
                        element.style.display = '';
                        element.style.margin = '';
                        element.style.verticalAlign = '';
                        element.style.color = '';

                        element.style.backgroundColor = '';
                        element.style.border = '';
                    }
                });

                wrapper.style.setProperty('padding-top', '20px', 'important');
            }
        }
    }

    function debounceMoveButtons(func, wait) {
        let timeout;
        return function (...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }

    const debouncedMoveButtons = debounceMoveButtons(moveButtons, 100);

    // Initial check
    moveButtons();

    window.addEventListener('resize', debouncedMoveButtons);
});
}

// #################### USER ICON WARNING COLOUR ON HIGH PING #################### //

if (MOBILE_STATUS_BAR_SHOW_USERS) {
// High ping check
setInterval(function() {
    let pingNumber = document.getElementById('current-ping')?.textContent.match(/\d+/)?.[0] || null;
    let iconUser = document.querySelector('i.fa-solid.fa-user');
    if (pingNumber > 800) {
        document.querySelector('i.fa-solid.fa-user').style.color = '#E21';
        iconUser.title = 'High ping detected';
    } else {
        document.querySelector('i.fa-solid.fa-user').style.removeProperty('color');
        iconUser.removeAttribute('title');
    }
}, 5000);

// ### ALWAYS SHOW USERS ONLINE ON MOBILE DEVICES ### //

if (/Mobi|Android/i.test(navigator.userAgent) && !window.matchMedia("(orientation: landscape)").matches) {
    let styleElementUsers = document.createElement('style');
        styleElementUsers.textContent = `
        .wrapper-outer.dashboard-panel {
            padding-top: 30px !important;
        }
        `;
    document.head.appendChild(styleElementUsers);

    // Show online users on mobile
    if (window.innerWidth < 924) {
        let element = document.querySelector(".users-online-container") || document.getElementById('users-online-container');
        element.classList.replace('hide-phone', 'show-phone');
        element.style.display = 'block';
        element.style.position = 'fixed';
        element.style.top = '-40px';
        element.style.right = '0px';
        element.style.color = 'var(--color-text)';
    }
}
}

// #################### USER SIGNAL CONNECTION ON MOBILE DEVICES #################### //

if (MOBILE_STATUS_BAR_CONNECTION) {
function mobileStatusBarConnection(force) {
    if (/Mobi|Android/i.test(navigator.userAgent) && !window.matchMedia("(orientation: landscape)").matches || force) {
      
    // Create the WebSocket connection
    const currentURL = new URL(window.location.href);
    const WebserverURL = currentURL.hostname;
    const WebserverPath = currentURL.pathname.replace(/setup/g, '');
    const WebserverPORT = currentURL.port || (currentURL.protocol === 'https:' ? '443' : '80');
    const protocol = currentURL.protocol === 'https:' ? 'wss:' : 'ws:';
    const WEBSOCKET_URL = `${protocol}//${WebserverURL}:${WebserverPORT}${WebserverPath}data_plugins`;
    let wsSendSocket, elapsedTimeExtra, endTimeConnectionWatchdogTemp;
    let platform = 'unspecified'; // linux, win32, unspecified

    if (platform === 'win32') elapsedTimeExtra = 200; else if (platform === 'unspecified') elapsedTimeExtra = 100; else elapsedTimeExtra = 0;

    let elapsedTimeConnectionWatchdog = 0;
    let elapsedTimeConnectionWatchdogPeak = 0;

    let styleElementSCSM = document.createElement('style');
    styleElementSCSM.textContent = `
    @media only screen and (min-width: 768px) {
        #stream-signal-meter {
            display: none;
        }
    }

    .wrapper-outer.dashboard-panel {
        padding-top: 30px !important;
    }

    @media screen and (orientation: landscape) {
        #stream-signal-meter  {
            display: none !important;
        }
        .wrapper-outer.dashboard-panel {
            padding-top: 20px !important;
        }
    }

    #stream-signal-meter {
        background: transparent;
        border: 0;
        color: var(--color-text);
        position: absolute;
        top: 15px;
        right: 15px;
        font-size: 16px;
        width: 48px;
        height: 48px;
        line-height: 48px;
        text-align: center;
        border-radius: 14px;
        transition: 500ms ease background;
        cursor: pointer;
    }

    #stream-signal-meter:hover {
        background: var(--color-3);
    }

    .meter-container {
      opacity: 1;
      visibility: visible;
      transition: opacity 1.5s ease-in, visibility 1.5s ease-in;
    }

    .meter-container.fade-out {
      opacity: 0;
      visibility: hidden;
    }

    .meter-container.fade-in {
      opacity: 1;
      visibility: visible;
    }
    `;
    document.head.appendChild(styleElementSCSM);

    // Create and update stream signal meter
    function createSignalMeter(elapsedTimeConnectionWatchdog) {
        // Find the container to append the signal meter to
        const userOnlineContainer = document.querySelector(".users-online-container") || document.getElementById('users-online-container');

        // Create a wrapper for the signal meter
        const meterWrapper = document.createElement('div');
        meterWrapper.id = 'stream-signal-meter';
        meterWrapper.classList.add('show-phone');
        meterWrapper.style.position = 'fixed';
        meterWrapper.style.top = '-38px';
        meterWrapper.style.right = '48px';
        meterWrapper.style.display = 'flex';
        meterWrapper.style.flexDirection = 'column';
        meterWrapper.style.alignItems = 'center';
        meterWrapper.style.imageRendering = 'auto';
        meterWrapper.style.maxHeight = '80px';

        // Create a container for the signal meter
        const meterContainer = document.createElement('div');
        meterContainer.classList.add('meter-container');
        meterContainer.style.display = 'flex';
        meterContainer.style.flexDirection = 'row';
        meterContainer.style.alignItems = 'flex-end';
        meterContainer.style.width = '39px';
        meterContainer.style.height = '0px';
        meterContainer.style.margin = '40px 0 0 0';
        meterContainer.style.padding = '2px';
        meterContainer.style.boxSizing = 'border-box';
        meterContainer.style.visibility = 'visible';
        meterContainer.style.imageRendering = 'auto';

        meterContainer.style.marginTop = '22px';
        meterContainer.style.marginLeft = '15px';
        meterContainer.classList.add('fade-in', 'fa-solid', 'fa-lg', 'fa-stop');

        // Calculate bar width
        const totalWidth = 39; // Adjusted total width of meterContainer
        const numberOfBars = 5; // Number of bars
        const totalMargin = 4; // Total horizontal margin (2px each side of bar)
        const barWidth = (totalWidth - totalMargin) / numberOfBars;

        // Create bars
        const bars = [];
        for (let i = 0; i < 5; i++) {
            const bar = document.createElement('div');
            bar.style.width = `${barWidth}px`;
            bar.style.margin = '0 2px';
            bar.style.height = `${4 * (i + 1)}px`; // Incrementing height
            bar.style.backgroundColor = '#212223';
            bar.style.transition = 'background-color 0.3s';
            bar.style.visibility = 'hidden';
            bar.classList.add('bar-style');
            bars.push(bar);
            meterContainer.appendChild(bar);
        }



        // Function to update the signal bars based on elapsed time
        function updateSignalBars() {
          if (typeof Stream !== 'undefined') {
            if (elapsedTimeConnectionWatchdog === undefined || Stream == null) {
              setTimeout(() => {
                meterContainer.style.marginTop = '22px';
                meterContainer.style.marginLeft = '15px';
                meterContainer.classList.add('fade-out', 'fa-solid', 'fa-lg', 'fa-stop');

                const barsVisibility = document.querySelectorAll('.bar-style');
                barsVisibility.forEach(bar => {
                    bar.style.visibility = 'hidden';
                });

                return;
              }, 1000);
            } else {
              setTimeout(() => {
                meterContainer.style.margin = '32px 0 0 4px';
                meterContainer.classList.remove('fade-out', 'fa-solid', 'fa-lg', 'fa-stop');
                meterContainer.classList.add('fade-in');

                const barsVisibility = document.querySelectorAll('.bar-style');
                barsVisibility.forEach(bar => {
                    bar.style.visibility = 'visible';
                });

              }, 2000);
            }
          }

            let numBars;
            let colorBars;

            if (elapsedTimeConnectionWatchdog > 600 + elapsedTimeExtra) {
                numBars = 0;
                colorBars = '#212223';
            } else if (elapsedTimeConnectionWatchdog < (250 + (elapsedTimeExtra / 2))) {
                numBars = 5;
                colorBars = '#E6E6EE';
            } else if (elapsedTimeConnectionWatchdog < 300 + elapsedTimeExtra) {
                numBars = 4;
                colorBars = '#E3E3E6';
            } else if (elapsedTimeConnectionWatchdog < 400 + elapsedTimeExtra) {
                numBars = 3;
                colorBars = '#FFA50F';
            } else if (elapsedTimeConnectionWatchdog < 500 + elapsedTimeExtra) {
                numBars = 2;
                colorBars = '#FE0E0E';
            } else {
                numBars = 1;
                colorBars = '#FE0E0E';
            }

            // Update bar colours
            for (let i = 0; i < 5; i++) {
                if (i < numBars) {
                    bars[i].style.backgroundColor = colorBars;
                } else {
                    bars[i].style.backgroundColor = '#2E2628';
                }
            }
        }

        // Initial update
        updateSignalBars();

        // Append the container to the wrapper
        meterWrapper.appendChild(meterContainer);

        // Insert the wrapper after the specified element
        if (userOnlineContainer !== null) {
          userOnlineContainer.parentNode.insertBefore(meterWrapper, userOnlineContainer.nextSibling);
        }

        // Return a function to update the signal meter
        return function(newElapsedTime) {
            elapsedTimeConnectionWatchdog = newElapsedTime;
            updateSignalBars();
        };
    }

    setInterval(() => {
        if (typeof Stream !== 'undefined') {
            endTimeConnectionWatchdogTemp = performance.now();
            if (elapsedTimeConnectionWatchdogPeak < (endTimeConnectionWatchdogTemp - window.startTimeConnectionWatchdog)) {
                elapsedTimeConnectionWatchdogPeak = endTimeConnectionWatchdogTemp - window.startTimeConnectionWatchdog;
            }
        }
    }, 100);

    const updateSignalMeter = createSignalMeter(elapsedTimeConnectionWatchdog);

    setInterval(() => {
            updateSignalMeter(elapsedTimeConnectionWatchdogPeak);
            //console.log("Stream elapsed time peak:", elapsedTimeConnectionWatchdogPeak, "ms");
            elapsedTimeConnectionWatchdogPeak = 0;
    }, 1000);

    }
}

mobileStatusBarConnection();
}

// #################### USER NOTICE FOR MULTIPLE USERS ONLINE #################### //

if (MULTIPLE_USERS_NOTICE) {
// Popup using togglePopup from modal.js
const popupId = "#popup-panel-mobile-settings";
function popupMethod(selector, title, contentHtml) {
    const $popup = $(selector);
    const $header = $popup.find(".popup-header");
    const $title = $header.find("p.color-4");
    if ($title.length && !$title.hasClass("popup-title")) $title.addClass("popup-title");
    $popup.find(".popup-title").text(title);
    $popup.find(".popup-content").html(`<p style="text-align: center;">${contentHtml}</p>`);
    setTimeout(() => {
        togglePopup(selector);
    }, 100);
}

let intervalIdUsersOnline = setInterval(function() {
    const usersOnlineElement = document.querySelector('.users-online-container') || document.getElementById('users-online-container');
    if (usersOnlineElement) {
        const usersOnline = parseInt(usersOnlineElement.textContent.trim());
        if (document.body.textContent.includes("You are logged in as an administrator.") || document.body.textContent.includes("You are logged in as an adminstrator.") || document.body.textContent.includes("You are logged in and can control the receiver.")) return;
        if (usersOnline >= 2) {
            if (MULTIPLE_USERS_NOTICE_NATIVE_POPUP) {
                popupMethod(popupId, MULTIPLE_USERS_NOTICE_MESSAGE_1, `${MULTIPLE_USERS_NOTICE_MESSAGE_2}<br><br>`);
            } else {
                if (usersOnline >= 2) alert(`<div class="popup-plugin-content">${MULTIPLE_USERS_NOTICE_MESSAGE_1}<br><br>${MULTIPLE_USERS_NOTICE_MESSAGE_2}<br><br></div>`, `OK`);
            }
        }
            
        clearInterval(intervalIdUsersOnline);
    }
}, 2000);
// Stop checking after 15 seconds
setTimeout(function() {
    clearInterval(intervalIdUsersOnline);
}, 15000);

/*
    Themed Popups v1.1.3 by AAD
    https://github.com/AmateurAudioDude/FM-DX-Webserver-Plugin-Themed-Popups
*/

document.addEventListener('DOMContentLoaded',()=>{if(!window.hasCustomPopup){let styleElement=document.createElement("style"),cssCodeThemedPopups=".popup-plugin{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background-color:var(--color-2);color:var(--color-main-bright);padding:20px;border-radius:10px;box-shadow:0 4px 8px rgba(0,0,0,.4);opacity:0;transition:opacity .3s ease-in;z-index:9999;max-width:90vw;max-height:90vh;overflow:auto}@media (max-width:400px){.popup-plugin{padding:10px}}.popup-plugin-content{text-align:center}.popup-plugin button{margin-top:10px}.popup-plugin.open{opacity:.99}";styleElement.appendChild(document.createTextNode(cssCodeThemedPopups)),document.head.appendChild(styleElement)}});const isClickedOutsidePopup=!0;function alert(e,t){"undefined"==typeof t&&(t="OK"),popupOpened||(popup=document.createElement("div"),popup.classList.add("popup-plugin"),popup.innerHTML=`<div class="popup-plugin-content">${e.replace(/\n/g,"<br>")}<button id="popup-plugin-close">${t}</button></div>`,document.body.appendChild(popup),popup.querySelector("#popup-plugin-close").addEventListener("click",closePopup),popup.addEventListener("click",function(e){e.stopPropagation()}),setTimeout(function(){popup.classList.add("open"),popupOpened=!0,blurBackground(!0)},10))}function blurBackground(e){idModal&&(e?(idModal.style.display="block",setTimeout(function(){idModal.style.opacity="1"},40)):(setTimeout(function(){idModal.style.display="none"},400),idModal.style.opacity="0"))}let popupOpened=!1,popup,popupPromptOpened=!1,idModal=document.getElementById("myModal");function closePopup(e){e.stopPropagation(),popupOpened=!1,popup.classList.remove("open"),setTimeout(function(){popup.remove(),blurBackground(!1)},300);console.log(`[${pluginName}] Popup closed, user active.`);}document.addEventListener("keydown",function(e){popupOpened&&("Escape"===e.key||"Enter"===e.key)&&(closePopup(e),blurBackground(!1))}),isClickedOutsidePopup&&document.addEventListener("click",function(e){popupOpened&&!popup.contains(e.target)&&(closePopup(e),blurBackground(!1))});
}

// #################### RDS FLAG INDICATOR #################### //
if (RDS_FLAG_INDICATOR) {
let lastProcessedTime = 0;
let reconnectAttempts = 0;
let executeFunction = false;
let rt_flag;

const TIMEOUT_DURATION = 75;

window.addEventListener('DOMContentLoaded', (event) => {
    executeFunction = true;
});

function connectWebSocket() {
    if (window.socket.readyState === WebSocket.OPEN) {
        reconnectAttempts = 0;
    }

    window.socket.addEventListener('message', (event) => {
        handle_RDS_FLAG_INDICATOR(event);
    });

    window.socket.addEventListener('close', () => {
        console.log(`[${pluginName}] RDS_FLAG_INDICATOR: WebSocket closed. Attempting to reconnect...`);
        attemptReconnect();
    });

    window.socket.addEventListener('error', (err) => {
        attemptReconnect();
    });
}

function attemptReconnect() {
    if (reconnectAttempts >= 500) return;

    setTimeout(() => {
        reconnectAttempts++;
        connectWebSocket();
    }, 10000);
}

function handle_RDS_FLAG_INDICATOR(event) {
    const now = Date.now();

    if (now - lastProcessedTime < TIMEOUT_DURATION) return;
    lastProcessedTime = now;

    const { rt_flag } = JSON.parse(event.data);
    const bullet = document.createElement('span');

    const rtElement0 = document.querySelector('#data-rt0');
    const rtElement1 = document.querySelector('#data-rt1');

    if (rtElement0 && rtElement0.querySelector('span.bullet')) rtElement0.removeChild(rtElement0.querySelector('span.bullet'));
    if (rtElement1 && rtElement1.querySelector('span.bullet')) rtElement1.removeChild(rtElement1.querySelector('span.bullet'));

    bullet.classList.add('bullet');
    bullet.textContent = '\u2022 ';
    bullet.style.position = 'absolute';
    bullet.style.marginLeft = '-18px';

    rtElement0.style.position = 'relative';
    rtElement1.style.position = 'relative';

    function updateBulletPoint(rt_flag) {
      if (rt_flag === 0 && rtElement0) {
        rtElement0.insertBefore(bullet, rtElement0.firstChild);
      } else if (rt_flag === 1 && rtElement1) {
        rtElement1.insertBefore(bullet, rtElement1.firstChild);
      }
    }

    if (executeFunction) updateBulletPoint(rt_flag);
}

connectWebSocket();
}

// #################### MULTIPATH INDICATOR #################### //

if (MULTIPATH_INDICATOR) {
// PTY padding
const flagsContainer = document.querySelector('#flags-container-desktop.panel-33.user-select-none');
if (flagsContainer) {
  flagsContainer.style.paddingLeft = '2px';
  flagsContainer.style.paddingRight = '2px';
}

let dataFreq = 0;
let prevFreq = 0;
let sig = 0;
let sigRawMultipath = 0;
let tooltipMultipath = 0;
let tooltipSigRawMultipath = 0;
let lastProcessedTime = 0;

const MULTIPATH_THRESHOLD = 40;
const SIGNAL_THRESHOLD = 25;
const TIMEOUT_DURATION = 800;

socket.addEventListener("message", (event) => {
    const now = Date.now();
    
    if (now - lastProcessedTime < TIMEOUT_DURATION) return;
    lastProcessedTime = now;

    const { sigRaw, freq } = JSON.parse(event.data);

    if (sigRaw) {
        const sigRawValues = sigRaw.split(',');
        if (sigRawValues.length >= 2) {
            sig = parseInt(sigRawValues[0].slice(2));

            function smoothInterpolation(sigRawValue) {
                if (sigRawValue <= 3) {
                  return 0;
                } else if (sigRawValue >= 40) {
                  return 100;
                }

                const normValue = (sigRawValue - 3) / (40 - 3);
                const smoothValue = Math.pow(normValue, 1);
                const scaledValue = smoothValue * 100;
                return parseInt(scaledValue);
            }

            sigRawMultipath = sigRawValues[1];

            if (!IS_TEF_RADIO) {
                tooltipMultipath = sigRawMultipath;
            } else {
                tooltipMultipath = smoothInterpolation(sigRawMultipath);
            }
            tooltipSigRawMultipath = (sig > SIGNAL_THRESHOLD) ? tooltipMultipath + '%' : '-';
        } else {
            console.error('Multipath indicator sigRaw data format invalid');
        }
    }

    if (freq || document.getElementById("data-frequency").textContent) {
        dataFreq = Number(freq) || Number(document.getElementById("data-frequency").textContent);
        if (freq !== 0 && prevFreq !== dataFreq) {
            prevFreq = dataFreq;
            sigRawMultipath = 0;
            tooltipMultipath = 0;
            addRandomIcon(false);
            return;
        }
        prevFreq = dataFreq;
    }

    if (sig > SIGNAL_THRESHOLD && tooltipMultipath > MULTIPATH_THRESHOLD) {
        addRandomIcon(true);
    } else if (sig > (SIGNAL_THRESHOLD * 1.333) && tooltipMultipath > (MULTIPATH_THRESHOLD / 1.333)) {
        addRandomIcon('half');
    } else {
        addRandomIcon(false);
    }

    function initTooltipsMultipath(target = null) {
        // Define scope: all tooltips or specific one if target is provided
        const tooltips = target ? $(target) : $('.tooltip');
        
        // Unbind existing event handlers before rebinding to avoid duplication
        tooltips.off('mouseenter mouseleave');
        
        tooltips.hover(function () {
            if ($(this).closest('.popup-content').length) {
                return;
            }
            
            var tooltipText = $(this).data('tooltip');
            var placement = $(this).data('tooltip-placement') || 'top'; // Default to 'top'
            
            // Clear existing timeouts
            $(this).data('timeout', setTimeout(() => {
                //$('.tooltip-wrapper').remove();
                
                var tooltip = $(`
                    <div class="tooltip-wrapper">
                        <div class="tooltiptext">${tooltipText}</div>
                    </div>
                `);
                    $('body').append(tooltip);
                    
                    var tooltipEl = $('.tooltiptext');
                    var tooltipWidth = tooltipEl.outerWidth();
                    var tooltipHeight = tooltipEl.outerHeight();
                    var targetEl = $(this);
                    var targetOffset = targetEl.offset();
                    var targetWidth = targetEl.outerWidth();
                    var targetHeight = targetEl.outerHeight();
                    
                    // Compute position
                    var posX, posY;
                    switch (placement) {
                        case 'bottom':
                        posX = targetOffset.left + targetWidth / 2 - tooltipWidth / 2;
                        posY = targetOffset.top + targetHeight + 10;
                        break;
                        case 'left':
                        posX = targetOffset.left - tooltipWidth - 10;
                        posY = targetOffset.top + targetHeight / 2 - tooltipHeight / 2;
                        break;
                        case 'right':
                        posX = targetOffset.left + targetWidth + 10;
                        posY = targetOffset.top + targetHeight / 2 - tooltipHeight / 2;
                        break;
                        case 'top':
                        default:
                        posX = targetOffset.left + targetWidth / 2 - tooltipWidth / 2;
                        posY = targetOffset.top - tooltipHeight - 10;
                        break;
                    }
                    
                    // Apply positioning
                    tooltipEl.css({ top: posY, left: posX, opacity: 1 });

                    // For touchscreen devices
                    if ((/Mobi|Android|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent)) && ('ontouchstart' in window || navigator.maxTouchPoints)) {
                        setTimeout(() => { $('.tooltiptext').remove(); }, 5000);
                    }
                    
                }, 300));
            }, function () {
                clearTimeout($(this).data('timeout'));
                
                setTimeout(() => {
                    $('.tooltip-wrapper').fadeOut(300, function () {
                        $(this).remove(); 
                    });
                }, 100); 
            });
            
            $('.popup-content').off('mouseenter').on('mouseenter', function () {
                clearTimeout($('.tooltip').data('timeout'));
                $('.tooltip-wrapper').fadeOut(300, function () {
                    $(this).remove(); 
                });
            });
    }

    if (typeof initTooltipsMultipath === 'function') initTooltipsMultipath();
});

function addRandomIcon(result) {
    // Check if RDS_ICON_STYLE mode is active
    const isRdsStyleMode = !!document.querySelector('#signalPanel #signal-icons');

    // Map icon names to their element IDs/selectors
    const iconIdMap = {
        'STEREO': '#stereoIcon',
        'PTY': '#ptyLabel',
        'MS': '#msIcon',
        'ECC': '#eccWrapper',
        'TP': '#tpIcon',
        'TA': '#taIcon',
        'RDS': '#rdsIcon'
    };

    const attachToId = iconIdMap[MULTIPATH_ATTACH_TO.toUpperCase()] || '#stereoIcon';

    const targetSpan = isRdsStyleMode
        ? document.querySelector(`#signalPanel #signal-icons ${attachToId}`)
        : document.querySelector('.wrapper-outer #wrapper .flex-container .flex-container #flags-container-desktop.panel-33.user-select-none span.pointer.stereo-container');

  if (targetSpan) {
    const existingIcon = targetSpan.parentNode.querySelector('span.multipath-container');
    if (existingIcon) {
      existingIcon.remove();
    }

    const iconSpan = document.createElement('span');
    iconSpan.classList.add('multipath-container');
    iconSpan.style.marginLeft = `${RDS_ICON_STYLE || isRdsStyleMode ? MULTIPATH_LEFT_PADDING : 8}px`;
    iconSpan.style.verticalAlign = 'middle';
    iconSpan.style.marginTop = `${RDS_ICON_STYLE || isRdsStyleMode ? 0 : 2}px`;
    iconSpan.style.fontSize = '16px';
    iconSpan.style.position = 'relative';

    if (!result) {
      iconSpan.classList.remove('opacity-full');
      iconSpan.classList.add('opacity-half');
      iconSpan.style.color = 'var(--color-text)';
    } else {
      if (result === 'half') {
          iconSpan.style.opacity = '0.5';
      } else {
          iconSpan.style.opacity = '1';
      }
      iconSpan.style.color = 'var(--color-text)';
      iconSpan.classList.remove('opacity-half');
      iconSpan.classList.add('opacity-full');
      iconSpan.style.color = 'var(--color-text)';
    }

    const iconElement = document.createElement('div');
    iconElement.className = 'fa-solid fa-mountain-sun';
    //iconElement.className = 'fa-solid fa-mountain-city';
    //iconElement.className = 'fa-solid fa-link-slash';
    //iconElement.className = 'fa-solid fa-building-shield';
    //iconElement.className = 'fa-solid fa-mountain';

    if (isRdsStyleMode) {
      iconSpan.classList.add('tooltip');
      iconSpan.setAttribute('data-tooltip', `Multipath/Co-channel indicator. <br><strong>Signal: ${sig} dBf, Multipath: ${tooltipSigRawMultipath}`);
      iconSpan.appendChild(iconElement);
    } else {
      const tooltipSpan = document.createElement('span');
      tooltipSpan.classList.add('overlay', 'tooltip');
      tooltipSpan.setAttribute('data-tooltip', `Multipath/Co-channel indicator. <br><strong>Signal: ${sig} dBf, Multipath: ${tooltipSigRawMultipath}`);
      iconSpan.appendChild(iconElement);
      iconElement.appendChild(tooltipSpan);
    }

    targetSpan.parentNode.insertBefore(iconSpan, targetSpan.nextSibling);

    if (typeof initTooltipsMultipath === 'function') initTooltipsMultipath();
  } else {
    console.error('Multipath indicator target span not found!');
  }
}

addRandomIcon(false);
}

// #################### TUNE DELAY #################### //

if (TUNE_DELAY_ENABLE) {
if (TUNE_DELAY || TUNE_DELAY_IF_MORE_THAN_ONE_USER) {
const tuneDelay = TUNE_DELAY * 1000;
let onScreenTimerDelay = TUNE_DELAY_IF_MORE_THAN_ONE_USER;
let showIcon = !!onScreenTimerDelay;
let lockTuning;

window.addEventListener('DOMContentLoaded', (event) => {
    if (isTuneAuthenticated) return;

    function userLockTuning() {
      // Lock
      lockTuning = true;
      // Select the elements with IDs 'scanner-down' and 'scanner-up'
      const elementScannerDown = document.getElementById('scanner-down');
      const elementScannerUp = document.getElementById('scanner-up');
      const elementSearchDown = document.getElementById('search-down');
      const elementSearchUp = document.getElementById('search-up');
      if (elementScannerDown && elementScannerUp) {
        elementScannerDown.disabled = true;
        elementScannerUp.disabled = true;
      } else if (elementSearchDown && elementSearchUp) {
        elementSearchDown.disabled = true;
        elementSearchUp.disabled = true;
      }

      const originalSend = socket.send;
      // 'freq-down' and 'freq-up' buttons
      socket.send = function (message) {
        if (lockTuning) {
          return;
        }
        return originalSend.apply(this, arguments);
      };
    }

    function lockIconStatus() {
      if (showIcon) {
          // Hide icon
          const tunerName = document.querySelector('.dashboard-panel-plugin-content');
          const panel = document.querySelector('.dashboard-panel .panel-100-real');
          const lockIcon = panel?.querySelector('.user-requests-lock');
          if (lockIcon) {
              panel.removeChild(lockIcon);
          }
          // Show icon
          const lockIconHTML = '<i style="padding: 10px 6px 12px 6px; font-size: 18px; color: var(--color-4);" class="fa-solid fa-lock pointer user-requests-lock" aria-label="Tuner is currently locked."></i>';
          tunerName.insertAdjacentHTML('afterend', lockIconHTML);

          const isMobilePortrait = window.innerWidth <= 768 && window.innerHeight > window.innerWidth;

          if (isMobilePortrait) {
          const lockIcon = panel?.querySelector('.user-requests-lock');
          if (lockIcon) {
            lockIcon.style.position = 'absolute';
            lockIcon.style.bottom = '10px';
            lockIcon.style.right = '12px';          
          }
        }
      }
    }

    userLockTuning();

    function userUnlockTuning(tuneDelay) {
      // Unlock
      setTimeout(() => {
        lockTuning = false;
        document.getElementById("tune-buttons").style.pointerEvents = "auto";
        document.querySelectorAll(".dashboard-panel-plugin-list").forEach(el => {
            el.style.pointerEvents = "auto";
        });
        const elementScannerDown = document.getElementById('scanner-down');
        const elementScannerUp = document.getElementById('scanner-up');
        const elementSearchDown = document.getElementById('search-down');
        const elementSearchUp = document.getElementById('search-up');
        if (elementScannerDown && elementScannerUp) {
          elementScannerDown.disabled = false;
          elementScannerUp.disabled = false;
        } else if (elementSearchDown && elementSearchUp) {
          elementSearchDown.disabled = false;
          elementSearchUp.disabled = false;
        }
        if (showIcon) {
            // Hide icon
            const tunerName = document.querySelector('.dashboard-panel .panel-100-real');
            const lockIcon = tunerName?.querySelector('.user-requests-lock');
            if (lockIcon) {
                const panel = lockIcon.closest('.panel-100-real');
                panel?.removeChild(lockIcon);
            }
        }
      }, tuneDelay);
    }

    if (TUNE_DELAY_IF_MORE_THAN_ONE_USER && TUNE_DELAY_IF_MORE_THAN_ONE_USER < TUNE_DELAY) onScreenTimerDelay = TUNE_DELAY;
    if (TUNE_DELAY > TUNE_DELAY_IF_MORE_THAN_ONE_USER) userUnlockTuning(tuneDelay);

    let userOnlineCount = 0;
    let lastProcessedTime = 0;
    let isFirstTimeRun = true;
    let timeoutScheduled = false;

    const TIMEOUT_DURATION = 500;

    // Define the handler as a named function
    function handleMessage(event) {
        if (isFirstTimeRun) {
            if (!timeoutScheduled) {
                timeoutScheduled = true;
                setTimeout(() => {
                    isFirstTimeRun = false;
                }, 500);
            }
            return;
        }

        const now = Date.now();
        if (now - lastProcessedTime < TIMEOUT_DURATION) return;
        lastProcessedTime = now;

        const { users } = JSON.parse(event.data);

        if (users > -1) {
            userOnlineCount = Number(users);

            if (userOnlineCount >= 2 && onScreenTimerDelay && !isCountdownTimerRunning) {
                lockIconStatus();
                userCountdownTimer();
                document.getElementById("tune-buttons").style.pointerEvents = "none";
                document.querySelectorAll(".dashboard-panel-plugin-list").forEach(el => {
                    el.style.pointerEvents = "none";
                });
            }

            if (userOnlineCount <= 1) {
                if (!isCountdownTimerRunning) {
                    userUnlockTuning(tuneDelay);
                } else {
                    userUnlockTuning(0);
                }
                document.getElementById("ui-addon-countdown-wrapper")?.remove();
                socket.removeEventListener("message", handleMessage);
            }

            if (userOnlineCount === 0) userUnlockTuning(0);
        }
    }

    socket.addEventListener("message", handleMessage);

    let isCountdownTimerRunning = false;
    
    function userCountdownTimer() {
        isCountdownTimerRunning = true;
        // Set countdown time in seconds
        let countdownTime = onScreenTimerDelay;

        // Function for end of countdown
        function onCountdownEnd() {
            document.getElementById("ui-addon-countdown-wrapper")?.remove();
            userUnlockTuning(0);
        }

        function createTimer() {
            const wrapper = document.createElement('div');
            wrapper.id = "ui-addon-countdown-wrapper";
            wrapper.style.position = 'fixed';
            wrapper.style.top = '29%';
            wrapper.style.left = '50%';
            wrapper.style.transform = 'translate(-50%, -50%)';
            wrapper.style.zIndex = '99';
            wrapper.style.fontFamily = "'Titillium Web', sans-serif";
            wrapper.style.fontSize = '48px';
            wrapper.style.color = 'var(--color-1)';
            wrapper.style.backgroundColor = 'var(--color-4)';
            wrapper.style.padding = '10px 24px 0px 24px';
            wrapper.style.borderRadius = '14px';
            wrapper.style.boxShadow = '0 0 14px var(--color-2)';
            wrapper.style.opacity = '0.9';

            const timerText = document.createElement('div');
            timerText.id = 'timer';
            wrapper.appendChild(timerText);

            document.body.appendChild(wrapper);
        }

        // Update timer display
        function updateDisplay(seconds) {
            const timerElement = document.getElementById("timer");
            if (timerElement) {
                timerElement.innerHTML = `
                  <div style="text-align: center;">
                    <div style="font-size: 24px; text-transform: uppercase; margin-bottom: 0;">
                      Tuner in use
                    </div>
                    <div style="font-size: 20px; text-transform: uppercase; margin-bottom: -12px;">
                      Time remaining before tuning is unlocked
                    </div>
                    <div style="font-size: 40px;">${seconds}</div>
                  </div>
                `;
            }
        }

        // Start countdown
        function startCountdown(duration, callback) {
            let remaining = duration;
            updateDisplay(remaining);

            const intervalId = setInterval(() => {
                remaining--;
                if (remaining >= 0) {
                    updateDisplay(remaining);
                }

                if (remaining < 0) {
                    clearInterval(intervalId);
                    callback();
                }
            }, 1000);
        }

        createTimer();
        startCountdown(countdownTime, onCountdownEnd);
    }
});
}
}

// #################### DEFAULT SIGNAL UNIT #################### //

if (DEFAULT_SIGNAL_UNIT) {
if (!localStorage.getItem('signalUnit')) {
  switch (DEFAULT_SIGNAL_UNIT) {
    case 1:
      localStorage.setItem('signalUnit', 'dbf');
      break;
    case 2:
      localStorage.setItem('signalUnit', 'dbuv');
      break;
    case 3:
      localStorage.setItem('signalUnit', 'dbm');
      break;
    default:
      // Ignore
  }
}
}

// #################### VOLUME PERCENTAGE #################### //

if (VOLUME_PERCENTAGE_TOAST) {
(function () {
  let newVolumeGlobal;

  const slider = document.getElementById('volumeSlider');
  if (!slider) {
    console.warn(`[${pluginName}] Missing #volumeSlider`);
    return;
  }

  // Create toast element
  const toast = document.createElement('div');
  toast.id = 'volumeToast';
  toast.innerHTML = `<div id="toastContent" class="text-small" style="font-size: 14px; display: flex; align-items: center; justify-content: center; width: 100%;">
                        <span id="speakerIcon" style="flex-shrink: 0; width: 20px; text-align: center;">
                          <i class="fa-solid fa-volume-high"></i> <!-- Default icon -->
                        </span>
                        <span id="toastValue" style="flex-grow: 1; text-align: center;"></span>
                      </div>`;
  document.body.appendChild(toast);

  const toastStyle = toast.style;
  Object.assign(toastStyle, {
    position: 'fixed',
    bottom: '64px',
    left: '50%',
    transform: 'translateX(-50%) translateY(20px)',
    background: 'var(--color-2-transparent, rgba(0,0,0,0.7))',
    color: 'var(--color-text, #fff)',
    padding: '8px 0px 8px 18px',
    borderRadius: '14px',
    fontSize: '16px',
    opacity: '0',
    pointerEvents: 'none',
    transition: 'opacity 0.4s ease, transform 0.6s ease',
    zIndex: '99',
    width: '96px',
    textAlign: 'center',
  });

  let fadeOutTimeout;

  function showToast() {
    const speakerIcon = document.getElementById('speakerIcon');
    const volumeValue = Math.round(slider.value * 100);

    // Dynamically change icon
    if (volumeValue === 0) {
      speakerIcon.innerHTML = `<i class="fa-solid fa-volume-xmark" style="margin-right: 1.5px;"></i>`;
    } else if (volumeValue > 0 && volumeValue < 50) {
      speakerIcon.innerHTML = `<i class="fa-solid fa-volume-low" style="margin-right: 5px;"></i>`;
    } else {
      speakerIcon.innerHTML = `<i class="fa-solid fa-volume-high"></i>`;
    }

    // Update volume number
    const valueSpan = document.getElementById('toastValue');
    valueSpan.textContent = volumeValue;

    // Reset any running animations
    clearTimeout(fadeOutTimeout);

    // Trigger animation
    toastStyle.opacity = '1';
    toastStyle.transform = 'translateX(-50%) translateY(0px)';

    // Slow fade
    fadeOutTimeout = setTimeout(() => {
      toastStyle.opacity = '0';
      toastStyle.transform = 'translateX(-50%) translateY(20px)';
    }, 1500);
  }

  slider.addEventListener('mousedown', showToast);
  slider.addEventListener('input', showToast);
})();
}

// #################### SORT PLUGIN BUTTON ORDER #################### //

if (SORT_PLUGIN_BUTTONS) {
  // Mapping of plugin IDs to their corresponding button element IDs.
  // Use these numbers in 'PLUGINS_USER_ORDER' to control which plugins appear and in what order.
  const SORT_PLUGIN_BUTTONS_MAP = {
    1: 'spectrum-graph-button',      // Spectrum
    2: 'audio-record-button',        // Record
    3: 'Log-on-off',                 // RDS Logger
    4: 'extended-desc-button',       // More info
    5: 'LIVEMAP-on-off',             // Livemap
    6: 'Screenshot',                 // Screenshot
    7: 'ES-ALERT-on-off',            // ES Alert
    8: 'ES-FOLLOW-on-off',           // ES Follow
    9: 'GPS-on-off',                 // GPS
   10: 'URDSupload-on-off',          // URDS
   11: 'DX-Alert-on-off',            // DX Alert
   12: 'Stream-on-off',              // STREAM
   13: 'countdown-button',           // NYE Countdown
  };

  const orderArray = PLUGINS_USER_ORDER
    .split(',')
    .map(num => parseInt(num.trim()))
    .filter(Boolean);

  let cssRulesSortPlugins = '';

  const orderedSet = new Set(orderArray);

  // Set explicit order user-defined buttons
  orderArray.forEach((num, index) => {
    const buttonId = SORT_PLUGIN_BUTTONS_MAP[num];
    if (buttonId) {
      cssRulesSortPlugins += `#${buttonId} { order: ${index + 1}; }\n`;
    }
  });

  // Assign high order to all other buttons
  Object.entries(SORT_PLUGIN_BUTTONS_MAP).forEach(([num, buttonId]) => {
    if (!orderedSet.has(parseInt(num))) {
      cssRulesSortPlugins += `#${buttonId} { order: 999; }\n`;
    }
  });

  if (cssRulesSortPlugins) {
    const style = document.createElement('style');
    style.textContent = cssRulesSortPlugins;
    document.head.appendChild(style);
  }
}

if (RDS_ICON_STYLE || LED_GLOW_EFFECT_ICONS_METRICS_MONITOR_PLUGIN || RDS_ICON_STYLE_REMOVE_RDS_ICON) {

const getActivePreset = (preset) => {
    if (preset === 0) return RDS_ICON_STYLE_PRESETS.user;
    return RDS_ICON_STYLE_PRESETS[preset] || RDS_ICON_STYLE_PRESETS[1];
};

const ACTIVE_PRESET = getActivePreset(RDS_ICON_PRESET);

const RDS_ICON_STYLE_FIRST_ROW = [...ACTIVE_PRESET.FIRST_ROW];
const RDS_ICON_STYLE_SECOND_ROW = [...ACTIVE_PRESET.SECOND_ROW];
const RDS_ICON_STYLE_FIRST_ROW_GAP = ACTIVE_PRESET.FIRST_ROW_GAP;
const RDS_ICON_STYLE_SECOND_ROW_GAP = ACTIVE_PRESET.SECOND_ROW_GAP;
const RDS_ICON_STYLE_TP_TA_GAP = ACTIVE_PRESET.TP_TA_GAP;
const RDS_ICON_STYLE_MS_TOP_PX = ACTIVE_PRESET.MS_TOP_PX;
const RDS_ICON_STYLE_MS_TOP_PADDING = ACTIVE_PRESET.MS_TOP_PADDING;
const RDS_ICON_STYLE_STEREO_ICON_SPACING = ACTIVE_PRESET.STEREO_ICON_SPACING;
const RDS_ICON_STYLE_PTY_HEIGHT = ACTIVE_PRESET.PTY_HEIGHT;
const RDS_ICON_STYLE_GAP_ROW_1 = ACTIVE_PRESET.GAP_ROW_1;
const RDS_ICON_STYLE_GAP_ROW_2 = ACTIVE_PRESET.GAP_ROW_2;

/////////////////////////////////////////////////////////////////
///                                                           ///
///  METRICSMONITOR CLIENT SCRIPT FOR FM-DX-WEBSERVER (V1.0a) ///
///                                                           ///
///  by Highpoint               last update: 27.11.2025       ///
///                                                           ///
///  https://github.com/Highpoint2000/metricsmonitor          ///
///                                                           ///
/////////////////////////////////////////////////////////////////

//
// --------------------------------------------------------------
//  CSS
// --------------------------------------------------------------
//
const style = document.createElement('style');
style.innerHTML = `
${RDS_ICON_STYLE_REMOVE_RDS_ICON === true ?
`
#rdsIcon {
  display: none !important;
}

.multipath-container {
  margin-left: 0 !important;
}

#eccWrapper {
  margin-left: 24px !important;
}

`: ""}
@media (max-width: 768px) {
  #signalPanel {
    margin-top: 0px !important;
    transform: none !important;
    width: 100% !important;
    max-width: 100% !important;
    box-sizing: border-box;
    padding-left: 8px;
    padding-right: 8px;
    ${RDS_ICON_STYLE_MOBILE === false ? "display: none !important;" : ""}
  }

  #signal-icons {
    flex-direction: column;
    align-items: center;
  }
}

#signalPanel {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 10px;
  box-sizing: border-box;
}

#signal-icons {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  position: relative;
  width: 100%;
}

#signal-icons img.status-icon {
  height: 14px;
  width: auto;
  display: block;
  opacity: 0.9;
  user-select: none;
  pointer-events: none;
}

${LED_GLOW_EFFECT_ICONS && (RDS_ICON_STYLE || LED_GLOW_EFFECT_ICONS_METRICS_MONITOR_PLUGIN) ? `
/* Glow effect for RDS_ICON_STYLE */
#signal-icons img.status-icon.icon-glow-on {
  filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.6))
          drop-shadow(0 0 6px rgba(255, 255, 255, 0.4))
          drop-shadow(0 0 9px rgba(238, 238, 238, 0.3));
}

/* Multipath icon glow effect */
#signal-icons .multipath-container.opacity-full .fa-mountain-sun {
  filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.6))
          drop-shadow(0 0 6px rgba(255, 255, 255, 0.4))
          drop-shadow(0 0 9px rgba(238, 238, 238, 0.3));
}
` : ''}

#signal-icons .multipath-container {
  position: relative;
  cursor: pointer;
  pointer-events: auto;
}

#signalPanel.compact-meters #signal-icons img.status-icon {
  height: 10px;
}

#signal-icons #stereoIcon {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0;
  margin-right: 1px;
  transform: translateY(-1px);
}

#signal-icons #stereoIcon .circle-container {
  display: flex;
  gap: 2px;
}

${LED_GLOW_EFFECT_ICONS && (RDS_ICON_STYLE || LED_GLOW_EFFECT_ICONS_METRICS_MONITOR_PLUGIN) ? `
/* Stereo icon glow effect for RDS_ICON_STYLE */
#signal-icons #stereoIcon.stereo-on .circle-container .circle {
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow:
    0 0 6px rgba(255, 255, 255, 0.4),
    0 0 12px rgba(238, 238, 238, 0.3),
    0 0 18px rgba(204, 204, 204, 0.2),
    0 0 24px rgba(170, 170, 170, 0.1);
}
` : ''}

#signal-icons #stereoIcon.stereo-off .circle-container .circle,
#signal-icons #stereoIcon.stereo-off .circle-container {
  ${REDUCE_HALF_OPACITY === true ? "opacity: 0.9;" : ""}
  box-shadow: none;
  background-color: inherit;
}

#signal-icons .tooltip {
  position: relative;
  cursor: pointer;
}

#signal-icons #stereoIcon.tooltip::after,
#signal-icons .multipath-container.tooltip::after {
  display: none !important;
}

/* TP / TA / RDS */
#tpIcon {
  height: 17px !important;
}

#taIcon {
  height: 17px !important;
}

#rdsIcon {
  height: 13px !important;
  width: auto !important;
}

/* PTY Label */
#ptyLabel {
  font-size: 13px;
  color: #fff;
  text-align: center;
  min-width: 96px;
  position: relative;
  border: 1px solid #fff;
  border-radius: 3px;
  padding: 0 4px;
  box-sizing: border-box;
  margin: 0;
  flex-shrink: 0;
}

/* ECC Wrapper */
#eccWrapper {
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  opacity: 0.9;
}
`;
document.head.appendChild(style);

//
// --------------------------------------------------------------
//  Logging helpers
// --------------------------------------------------------------
//
function logInfo(...msg) {
  console.log("[MetricsMonitor]", ...msg);
}

function logError(...msg) {
  console.error("[MetricsMonitor]", ...msg);
}

//
// --------------------------------------------------------------
//  WebSocket URLs
// --------------------------------------------------------------
//
const currentURL     = window.location;
const WebserverPORT  = currentURL.port || (currentURL.protocol === 'https:' ? '443' : '80');
const protocol       = currentURL.protocol === 'https:' ? 'wss:' : 'ws:';
const WebserverURL   = currentURL.hostname;
const WebserverPath  = '';

const WEBSOCKET_URL  = `${protocol}//${WebserverURL}:${WebserverPORT}${WebserverPath}/data_plugins`;

//
// --------------------------------------------------------------
//  TextSocket (RDS / PTY / ECC / TP / TA / RDS)
// --------------------------------------------------------------
//
let TextSocket;
let levels = { hf: 0 };

const PTY_TABLE = [
  "PTY", "News", "Current Affairs", "Info",
  "Sport", "Education", "Drama", "Culture", "Science", "Varied",
  "Pop Music", "Rock Music", "Easy Listening", "Light Classical",
  "Serious Classical", "Other Music", "Weather", "Finance",
  "Children's Programmes", "Social Affairs", "Religion", "Phone-in",
  "Travel", "Leisure", "Jazz Music", "Country Music", "National Music",
  "Oldies Music", "Folk Music", "Documentary"
];

// webp images
const rds_off_webp = 'data:image/webp;base64,UklGRlQEAABXRUJQVlA4TEgEAAAv/kEoEA8wbdM2bfMf8JDb2FZgMRchmZASKIXSIHNbm7kNSiAkWPEC4L7HfjmP6P8E4HenZPx0F5H4U7L+UtvEnRyLZso+moxN0UhUyNlZyN5rxCoZPIekCkZi0A9Fla2C7j2IA1AZoSqTdPMUVN5IVFXOSRWsvKYRRZWsgqZfyFZJMxQPVZiHKppJZJVYiUbIpHNWnqtXvFXgHibqglXkGhMANKvGJa4zXhetMjeuJKvCvYz7jHCTAYDOZTNnVK50hafkSjELTGXyhyLzMOlD6cbghBh2jYkfykxnwocKMxj/IfmO+8C7yY+IuOW1ejVO5TFE8BtzKUCVwnjMW16TAExF+46sAcDIm7mrNg79EDQeQEuMA6ZmLgCmqm4cgEfzWvVd1ABAjYphVVXPUhb8UXQrzE1S5M1ebpTl/QaAppFT17Qlfapt8gces+djMKiarqpWdckLNuVSuTN/7v25oRiXip3YPUsG0BTPkjbdIv9fmkWxyx94F2Haqds9G6dwmmTQlnghmKXPJIthV03Kz4k/9dO7REW4ERURwDxMkQh0iy5SiGIVviNBJwcRCQoYZVXd+FuZEbcbh6YZi1cMTaAC0DfuS1nzUv4bopEtbiXOc21TgPqhuHkXj6l6F6d4N4NIzDl/q1iknfuIfAxLBDrjl8lF4DGodsEgEHOBYm4aEw38Dl9JBu5aAB4mG+ALVSV0AdCYQpUTmKLLjFjIbhKiS7uieTTvjXjPAxiMU4UbmeiKyjkAfVOXbPQwXoVd1rRdPdQL+QMOACYRNOlKYoZdsOqqxj2UW8bmWZIVzDIOySTiIcYpKqLZYLB9rHAnUJhMI5Lda9CvvCIRaEu0qx+bi0cTKQe8JvlT7VuyOkUl+vJvKQbhAuaFKRKAztQNNEPxd5EvZKJ/6VkK0LlnEw5h46zapbF4aj8Wz2Roq4m36jbQzCVYjSX90ms0F39w7xKt5hLtXqt3cRtZw62xJKP6c8/GGzlFNmq35oJ+o2/cJwo1F6xjA9LtZMWpLWI0l0JU/zlRBZtn40yeTSaeuKknEZFiVZa+SUTLTFF5Rk7vJjJl82jqBVF12bQlq4JF2wViiDOB3bvzxCth6Ye65EMk6qHK3lFxGUti5pIM5gHklLzMT7CFEZFF1qjKdpmoIuKBR5GA91JSJGBsAvBwhXg0kXhERBxENy4Foi1nrxI7T3TOMf2Su9CWeHJmIAcHnT81RWFeqlDtTmbmpWAVrTL13AmM0AlAX8IpWnmicpGqmq5wxHMrGRVYhc9kpnGewiYbRaZzDsBY/KmcBheYwYGbN5xVsRCbAvalsuK9kM0S4QhnEqlOheW1eilPNcorxsabgK4UvpI5MEXTN8EiKl4ibeYCIlo4xSDinUkUKBvhNW2TDKKmEvgK1POQVc8m65JuHOJORKRcgf45OFXdlIMcvQF2Gb/bN+GH6ga/PEQk/hSmJJwB';
const rds_on_webp  = 'data:image/webp;base64,UklGRlwEAABXRUJQVlA4TFAEAAAv/UEoEA8w//M///Mf8KDbSFZo21oIA5MQCIXQ4OklhvQSQfoJYGKgvYwFsxacH0BE/yeAfpc50U9PZg6/VJmZyy8NwWFT+Zg1fAwma5M1HLB6YovKe6cpVtGgH6KGvVExmIesSkbsdd+BRUMK1JCo47PXsDMqqgZElTdipxlAVkUrr5kXklXULEWHMtKhrGEwqYpVUVQkqtiKHdauOCuPdSTovFXABuKJaFgNLGITcbpglbB1JVpl7EPomYIxWMTEkhVb5StT4ZB6J5t5pCHpoYB0JD4UbyysAMtuIOGhhEzEP5SRhbiHyjP8wrdJnZlJflafgnWOFheE6HuHZSZqnLF+y2kiEWnqM3XjiWilDTNzIaLPhGgevMYR0YiKpWFmLkSkaxsioq6ZVnMXFEW0oBhWTdVFFuTfoF1UpM22ikxE3SKL70cqMDVDRJNmNjbph/pbxaJppqqJZNBEEnWTf4h+7/u5pVg28ZTtil236iJupkUy6f9fwyLbpQc+UZAhwp0uWMEmQzFEuODN4jPxqWaSLeZb7E5T+FNQ+BvBYB2YORBNi8mcgWzwCf8Oe7PKzF5RjZKOpbuVED4s4YiqZgmnWBqv6Rt6KWkG5N4omiXKtQixQ4iIZSZqD4XNt+uqT5Di2ywgYt8mvZWRc9zRI+WtsglEE2AnGA9E3aDZeQMPMDMXDW8GEgzcpjwTDeiaJ+pI0pUnmqZimYgGkqF8qkjWJaBa1B0hRRd3WdM1341wzxHRAljnbyRgKhpGRDQ3TSSjjjhNOSTN2LVDu5AeIIl4TbwSkWXnraZqYB0iuTZdRKtqlk7RJFA/0ToFRTBbQNl1o0J3PETQAKLdZzCvfMyBaIhg1x5j6Wgw5wN9Jump8VTdkKIBU/wnsoG/QDeY2RNNpImiWop/oryQgPlSF5loYn3jD38Fm41LS/yB9ks4JJG2mTiraVMVbuOtloi/9NnQxh3oE8GKZbD7rD5Bsm78rSWiUfu5vnFGpEhG4xYzc6F5Y27oiQwxM5fNEgWouyoKMEQxYpmB5l6rOm/TBdv0TQJ62LRDFdkqi7mJwEhIVjmgAt8mIHnTNc2usmqWzRBJ5S3GzgOLbardt3PAx17MQxPpEIB2aLwnKIglIkCbaMD7gjAnwU+gGajMhYjqJqiSXQIaMzuirohE36WoiERr44k6loGuCUBnZqbKunXJA0OcnarYOWBihMxLdGGIcGCzgiyoGLjTUGTkgzI07iSEL3mrYJWgfscDFYtENIU/BSsHNCxATTMVBPZb0Sib+WcSMjAH1U0yCsjEiIiWcKd8WphHFlQwukJW2aLYZOiDkuK7kMwiQCe2CdCEvPisPshBA3KKtXEWheCGFHolYRXJmrnxFgGjD4gbZuaCBAtSLiDcYTBrBuA0YxMNgqadCj1SSH1Kqr5Juqhbh4DkG4X0/UCqtsm7enIGdZcOvzg3/oeaKPTLi5nDTxFzpDM=';
const ta_off_webp  = 'data:image/webp;base64,UklGRtgBAABXRUJQVlA4TMwBAAAvEgEqEA8waZM2afMf8JAb23oWMU+jQCElUIpKk0rDneBxA/hfgUY3gMX7gB2nEf2fAGnBOmvfPBxgTpKqa5a0urKk5kJStwVp2KKEPan6Ji2+WasvH0x6/4CiDbKM9UVyqIMaBMsG6hRZFwid7KkHk0eDOEimvoumdo0EwbTtZF6vUlzLFSqJ/BlEYv4P6OQzIzEdbLwskoDwjvYKqQLRtQDpEwStwPQZNmD+DA3IHl2jX6W8Y7tUkca7JFWYtN/xAFwm2P7a6kG0/bzCN9tykGxfr/DFth5MtuUK1bYdzK5yCdnaQXZlXydrXKO4Zt9gVr8GrskHkxqE+yVb3W0Q7xdty26FdL9gW3cLTPeTbdtVmG9XfG0nyDfr5KsMys0Gx5fgZrwOT1dPxKdbTqSnW09MT7edmC1B0uKSpGppJ/KtOmWni5RbDfLBgKfjRYdgmJ+gvmoQDdMTLK82SIb0KOup+d/iDTglSLtwsLxpQ9LIOh6Ed7z7QbKrPkhxLSR4gJU0CPfbiINoartk6sTOZBqEzmyC0CieCmrgWUEbREuj7GYLFK1ANDTIWrDPqr5J8iVp2KLUbUFqNkmbq0haXLMkudKum8Ju9WRJ';
const ta_on_webp   = 'data:image/webp;base64,UklGRtgBAABXRUJQVlA4TMwBAAAvEgEqEA8w//M///Mf8JAb23oWMU+jQCElUIpKk0rDneBxA/hfgUY3gMX7gB2nEf2fAGnBOmvfPBxgTpKqa5a0urKk5kJStwVp2KKEPan6Ji2+WasvH0x6/4CiDbKM9UVyqIMaBMsG6hRZFwid7KkHk0eDOEimvoumdo0EwbTtZF6vUlzLFSqJ/BlEYv4P6OQzIzEdbLwskoDwjvYKqQLRtQDpEwStwPQZNmD+DA3IHl2jX6W8Y7tUkca7JFWYtN/xAFwm2P7a6kG0/bzCN9tykGxfr/DFth5MtuUK1bYdzK5yCdnaQXZlXydrXKO4Zt9gVr8GrskHkxqE+yVb3W0Q7xdty26FdL9gW3cLTPeTbdtVmG9XfG0nyDfr5KsMys0Gx5fgZrwOT1dPxKdbTqSnW09MT7edmC1B0uKSpGppJ/KtOmWni5RbDfLBgKfjRYdgmJ+gvmoQDdMTLK82SIb0KOup+d/iDTglSLtwsLxpQ9LIOh6Ed7z7QbKrPkhxLSR4gJU0CPfbiINoartk6sTOZBqEzmyC0CieCmrgWUEbREuj7GYLFK1ANDTIWrDPqr5J8iVp2KLUbUFqNkmbq0haXLMkudKum8Ju9WRJ';
const tp_off_webp  = 'data:image/webp;base64,UklGRogBAABXRUJQVlA4THsBAAAvEgEqEA8waZM2afMf8JBb21bcbJdFQKgSKIXSpNIoRSUo9MDiBJI/+75/HoKI/k+A1LFWnW8eLjAXSZurStpdTdLNhaRhS9K0ZQl70eZb1H1Vu69dLPo8sOqAJmN/URyaoBskyw00WGXdIQ2ap18sHkGeFNM8ZdOIUSCZbieZjyira4/QKbQfw0ah/mKIwnLReZ00AdIH9i9kcW6e7YJk6VclQnWUF2sEQuQIJcISoUZohhxqjcBbPVbqUDSB9M550iTpYo+wAdmlEDPCgGK7RTh+HHuQ5des/DwcP44b5O/BiDAh2QiwReiAXEeADVhNlyFahBph+U6UCDlCCrAqQIuwRCgRFKBFKAGabEVf/f9D/Q5sbwzqaYP8uU4+aTR97sPfk+bq35HVtVPgO3BQJunbu5En2TROxTTJg8UEaVA9G6Qbq6eDbuA5QAdky2A9VccGq3YgGwY0dexVm2+RfEWatiwNW5JuNkmHa5XUXVWSXOU0TOm0e5okAA==';
const tp_on_webp   = 'data:image/webp;base64,UklGRogBAABXRUJQVlA4THsBAAAvEgEqEA8w//M///Mf8JBb21bcbJdFQKgSKIXSpNIoRSUo9MDiBJI/+75/HoKI/k+A1LFWnW8eLjAXSZurStpdTdLNhaRhS9K0ZQl70eZb1H1Vu69dLPo8sOqAJmN/URyaoBskyw00WGXdIQ2ap18sHkGeFNM8ZdOIUSCZbieZjyira4/QKbQfw0ah/mKIwnLReZ00AdIH9i9kcW6e7YJk6VclQnWUF2sEQuQIJcISoUZohhxqjcBbPVbqUDSB9M550iTpYo+wAdmlEDPCgGK7RTh+HHuQ5des/DwcP44b5O/BiDAh2QiwReiAXEeADVhNlyFahBph+U6UCDlCCrAqQIuwRCgRFKBFKAGabEVf/f9D/Q5sbwzqaYP8uU4+aTR97sPfk+bq35HVtVPgO3BQJunbu5En2TROxTTJg8UEaVA9G6Qbq6eDbuA5QAdky2A9VccGq3YgGwY0dexVm2+RfEWatiwNW5JuNkmHa5XUXVWSXOU0TOm0e5okAA==';

const off_opacity = REDUCE_HALF_OPACITY === true ? '0.6' : '0.9';

async function setupTextSocket() {
  if (TextSocket && TextSocket.readyState !== WebSocket.CLOSED) {
    return;
  }

  try {
    TextSocket = await window.socketPromise;

    TextSocket.addEventListener("open", () => {
      logInfo("TextSocket connected.");
    });

    TextSocket.addEventListener("message", (event) => {
      const message = JSON.parse(event.data);
      handleTextSocketMessage(message);
    });

    TextSocket.addEventListener("error", (error) => {
      logError("TextSocket error:", error);
    });

    TextSocket.addEventListener("close", () => {
      logInfo("TextSocket closed.");
      setTimeout(setupTextSocket, 5000);
    });
  } catch (error) {
    logError("Failed to setup TextSocket:", error);
    setTimeout(setupTextSocket, 5000);
  }
}

// Music/Speech
function ensurePtyOverlayIcon() {
    // Check if MS icon already exists
    let icon = document.getElementById("ptyIconOverlay");

    if (!icon) {
        //  Ccreate MS if not in the configured rows it with absolute positioning next to PTY
        icon = document.createElement("span");
        icon.id = "ptyIconOverlay";

        icon.style.color = "#fff";
        icon.style.fontSize = "13px";
        icon.style.lineHeight = "1.4";
        icon.style.border = "1px solid #696969";
        icon.style.borderRadius = "3px";
        icon.style.padding = "0 8px";
        icon.style.opacity = "0.9";
        icon.style.display = "inline-flex";
        icon.style.alignItems = "center";
        icon.style.justifyContent = "center";
        icon.style.height = "17px";
        icon.style.minWidth = "30px";

        // Use absolute positioning next to PTY
        icon.style.position = "absolute";
        icon.style.top = "50%";
        icon.style.transform = "translateY(-50%)";
        icon.style.marginTop = "1px";

        const ptyLabel = document.getElementById("ptyLabel");
        if (ptyLabel && ptyLabel.parentNode) {
            ptyLabel.parentNode.style.position = "relative";
            if (RDS_ICON_STYLE) ptyLabel.parentNode.appendChild(icon);
        }
    }
    return icon;
}

function handleTextSocketMessage(message) {
  // HF-Level
  if (message.sig !== undefined) {
    levels.hf = Math.round((message.sig - 7) * 10) / 10;
  }

  // --- PTY ---
  if (message.pty !== undefined) {
    let ptyIndex = Number(message.pty);
    if (Number.isNaN(ptyIndex) || ptyIndex < 0 || ptyIndex >= PTY_TABLE.length) {
      ptyIndex = 0;
    }
    const ptyText = PTY_TABLE[ptyIndex];

    const ptyLabel = document.getElementById("ptyLabel");
    const ptyIcon = ensurePtyOverlayIcon();

    if (ptyLabel) {
      ptyLabel.textContent = ptyText;

      // --- message.ms ---
      ptyIcon.innerHTML = "";

      if (message.ms === 0) {
        ptyIcon.innerHTML = `<i class="fa-solid fa-microphone" style="position: absolute; top: ${LED_GLOW_EFFECT_ICONS_RDS_ICON_STYLE_MS === true ? RDS_ICON_STYLE_MS_TOP_PX - 1 : RDS_ICON_STYLE_MS_TOP_PX}px; min-width: 12px;"></i>`;
        ptyIcon.style.border = "1px solid #fff";
        if (LED_GLOW_EFFECT_ICONS_RDS_ICON_STYLE_MS) ptyIcon.style.filter = `drop-shadow(0 0 3px rgba(255, 255, 255, 0.5))
          drop-shadow(0 0 6px rgba(255, 255, 255, 0.4))
          drop-shadow(0 0 9px rgba(238, 238, 238, 0.3))`;
        ptyIcon.style.opacity = "0.9";
      } else if (message.ms === 1) {
        ptyIcon.innerHTML = `<i class="fa-solid fa-music" style="position: absolute; top: ${LED_GLOW_EFFECT_ICONS_RDS_ICON_STYLE_MS === true ? RDS_ICON_STYLE_MS_TOP_PX - 1 : RDS_ICON_STYLE_MS_TOP_PX}px; min-width: 12px;"></i>`;
        ptyIcon.style.border = "1px solid #fff";
        if (LED_GLOW_EFFECT_ICONS_RDS_ICON_STYLE_MS) ptyIcon.style.filter = `drop-shadow(0 0 3px rgba(255, 255, 255, 0.5))
          drop-shadow(0 0 6px rgba(255, 255, 255, 0.4))
          drop-shadow(0 0 9px rgba(238, 238, 238, 0.3))`;
        ptyIcon.style.opacity = "0.9";
      } else {
        if (ptyText === "PTY") {
          ptyIcon.innerHTML = `
            <span style="position: relative; display: inline-block; min-width: 12px; min-height: 13px;">
              ${RDS_ICON_STYLE_MS_OFF_AS_LETTERS === false ?
              `<i class="fa-solid fa-music" style="position: absolute; top: 0.8px; left: 0; opacity: 0.15;"></i>
              <i class="fa-solid fa-microphone" style="position: absolute; top: 0.8px; left: 1.5px; opacity: 0.1;"></i>`
              :
              `<i class="fa-solid fa-m" style="font-size: 10px; position: absolute; top: 1.8px; left: -2.5px; opacity: 0.25;"></i>
              <i class="fa-solid fa-s" style="font-size: 10px; position: absolute; top: 1.8px; left: 8.5px; opacity: 0.25;"></i>`}
            </span>
          `;
        } else {
          ptyIcon.innerHTML = `<i class="fa-solid fa-question" style="opacity: 0.15; min-width: 12px; min-height: 13px;"></i>`;
        }
        ptyIcon.style.border = "1px solid #696969";
        if (LED_GLOW_EFFECT_ICONS_RDS_ICON_STYLE_MS)
            ptyIcon.style.filter = "none";
        ptyIcon.style.opacity = off_opacity;
      }

      // PTY label styling
      if (ptyText === "PTY") {
        ptyLabel.style.color = "#696969";
        ptyLabel.style.borderColor = "#696969";
        ptyLabel.style.fontWeight = "bold";
        if (LED_GLOW_EFFECT_ICONS_RDS_ICON_STYLE_PTY) ptyLabel.style.filter = 'none';
        if (REDUCE_HALF_OPACITY) ptyLabel.style.opacity = off_opacity;
      } else {
        ptyLabel.style.color = "#fff";
        ptyLabel.style.borderColor = "#fff";
        ptyLabel.style.fontWeight = "600";
        if (LED_GLOW_EFFECT_ICONS_RDS_ICON_STYLE_PTY) ptyLabel.style.filter = `drop-shadow(0 0 3px rgba(255, 255, 255, 0.5))
          drop-shadow(0 0 6px rgba(255, 255, 255, 0.4))
          drop-shadow(0 0 9px rgba(238, 238, 238, 0.3))`;
        if (REDUCE_HALF_OPACITY) ptyLabel.style.opacity = '1';
      }
    }

    // Background color of the signal panel depending on PTY presence
    const panel = document.getElementById('signalPanel');
    if (panel) {
      if (ptyText !== "PTY") {
        panel.style.setProperty('background-color', 'var(--color-2-transparent)', 'important');
      } else {
        panel.style.setProperty('background-color', 'var(--color-1-transparent)', 'important');
      }
    }
  }

  // --- ECC ---
  const eccWrapper = document.getElementById('eccWrapper');
  if (eccWrapper) {
    // Clear previous content each update
    eccWrapper.innerHTML = "";

    const hasEcc = message.ecc !== undefined && message.ecc !== null && message.ecc !== "";

    if (!hasEcc) {
      const noEcc = document.createElement('span');
      noEcc.textContent = 'ECC';
      noEcc.style.color = '#696969';
      noEcc.style.fontSize = '13px';
      noEcc.style.fontWeight = 'bold';
      noEcc.style.border = "1px solid #696969";
      noEcc.style.borderRadius = "3px";
      noEcc.style.padding = '0 3px 0 3px';
      noEcc.style.display = 'inline-flex';
      noEcc.style.alignItems = 'center';
      noEcc.style.height = '17px';
      noEcc.style.paddingBottom = '0.5px'; // Value that aligns for both Firefox and Chrome
      if (REDUCE_HALF_OPACITY) noEcc.style.opacity = off_opacity;
      eccWrapper.appendChild(noEcc);
    } else {
      const eccSpan = document.querySelector('.data-flag');
      if (eccSpan && eccSpan.innerHTML.trim() !== "") {
        const newSpan = eccSpan.cloneNode(true);
        newSpan.style.marginLeft = "5.1px"; // Reduce margin to align flag icons
        newSpan.style.marginTop = "-7px";
        newSpan.style.transform = "translateY(5px)";
        eccWrapper.appendChild(newSpan);
      } else {
        // Fallback
        const noEcc = document.createElement('span');
        noEcc.textContent = 'ECC';
        noEcc.style.color = '#696969';
        noEcc.style.fontSize = '13px';
        eccWrapper.appendChild(noEcc);
      }
    }
  }

  // --- Stereo ---
  const stereoIcon = document.getElementById('stereoIcon');
  if (stereoIcon) {
    if (message.st === true) {
      stereoIcon.classList.add('stereo-on');
      stereoIcon.classList.remove('stereo-off');
    } else {
      stereoIcon.classList.add('stereo-off');
      stereoIcon.classList.remove('stereo-on');
    }
  }

  // --- RDS ---
  const rdsIcon = document.getElementById('rdsIcon');
  if (rdsIcon) {
    if (message.rds === true) {
      rdsIcon.src = rds_on_webp;
      if (REDUCE_HALF_OPACITY) rdsIcon.style.opacity = '0.9';
      if (LED_GLOW_EFFECT_ICONS) rdsIcon.classList.add('icon-glow-on');
    } else {
      rdsIcon.src = rds_off_webp;
      if (REDUCE_HALF_OPACITY) rdsIcon.style.opacity = off_opacity;
      rdsIcon.classList.remove('icon-glow-on');
    }
  }

  // --- TP ---
  const tpIcon = document.getElementById('tpIcon');
  if (tpIcon) {
    const tpOn = message.tp === 1;
    tpIcon.src = tpOn ? tp_on_webp : tp_off_webp;
    if (LED_GLOW_EFFECT_ICONS && tpOn) {
      tpIcon.classList.add('icon-glow-on');
      if (REDUCE_HALF_OPACITY) tpIcon.style.opacity = '0.9';
    } else {
      tpIcon.classList.remove('icon-glow-on');
      if (REDUCE_HALF_OPACITY) tpIcon.style.opacity = off_opacity;
    }
  }

  // --- TA ---
  const taIcon = document.getElementById('taIcon');
  if (taIcon) {
    const taOn = message.ta === 1;
    taIcon.src = taOn ? ta_on_webp : ta_off_webp;
    if (LED_GLOW_EFFECT_ICONS && taOn) {
      taIcon.classList.add('icon-glow-on');
      if (REDUCE_HALF_OPACITY) taIcon.style.opacity = '0.9';
    } else {
      taIcon.classList.remove('icon-glow-on');
      if (REDUCE_HALF_OPACITY) taIcon.style.opacity = off_opacity;
    }
  }
}

//
// --------------------------------------------------------------
//  Panel (Icons + MPX-Canvas)
// --------------------------------------------------------------
//

// Helper function to create individual icon elements
function createIconElement(iconType) {
  switch (iconType.toUpperCase()) {
    case 'PTY': {
      const ptyLabel = document.createElement('span');
      ptyLabel.id = 'ptyLabel';
      ptyLabel.textContent = 'PTY';
      ptyLabel.style.color = '#696969';
      ptyLabel.style.fontSize = '14px';
      ptyLabel.style.fontWeight = 'bold';
      ptyLabel.style.border = '1px solid #696969';
      ptyLabel.style.borderRadius = '3px';
      ptyLabel.style.padding = '0 2px';
      ptyLabel.style.display = 'inline-flex';
      ptyLabel.style.alignItems = 'center';
      ptyLabel.style.justifyContent = 'center';
      ptyLabel.style.paddingBottom = /firefox/i.test(navigator.userAgent) ? '2px' : '1px'; // Firefox
      ptyLabel.style.height = RDS_ICON_STYLE_PTY_HEIGHT + 'px';
      if (REDUCE_HALF_OPACITY) ptyLabel.style.opacity = off_opacity;
      return ptyLabel;
    }
    case 'MS': {
      // Music/Speech icon
      const msIcon = document.createElement('span');
      msIcon.id = 'ptyIconOverlay';
      msIcon.style.color = "#fff";
      msIcon.style.fontSize = "12px";
      msIcon.style.lineHeight = "1.4";
      msIcon.style.border = "1px solid #696969";
      msIcon.style.borderRadius = "3px";
      msIcon.style.padding = `${RDS_ICON_STYLE_MS_TOP_PADDING}px 8px`;
      msIcon.style.opacity = off_opacity;
      msIcon.style.display = "inline-flex";
      msIcon.style.alignItems = "center";
      msIcon.style.justifyContent = "center";
      msIcon.style.height = "17px";
      msIcon.style.minWidth = "30px";
      // Initial state, question mark
      msIcon.innerHTML = `<i class="fa-solid fa-question" style="opacity: 0.15; min-width: 13px; min-height: 13px;"></i>`;
      return msIcon;
    }
    case 'ECC': {
      const eccWrapper = document.createElement('span');
      eccWrapper.id = 'eccWrapper';
      eccWrapper.style.display = 'inline-flex';
      eccWrapper.style.alignItems = 'center';
      eccWrapper.style.whiteSpace = 'nowrap';
      const eccSpan = document.querySelector('.data-flag');
      if (eccSpan && eccSpan.innerHTML.trim() !== "") {
        eccWrapper.appendChild(eccSpan.cloneNode(true));
      } else {
        const noEcc = document.createElement('span');
        noEcc.textContent = 'ECC';
        noEcc.style.color = '#696969';
        noEcc.style.fontSize = '13px';
        noEcc.style.fontWeight = 'bold';
        noEcc.style.border = "1px solid #696969";
        noEcc.style.borderRadius = "3px";
        noEcc.style.padding = '0 3px 0 3px';
        noEcc.style.display = 'inline-flex';
        noEcc.style.alignItems = 'center';
        noEcc.style.height = '17px';
        noEcc.style.paddingBottom = /firefox/i.test(navigator.userAgent) ? '1px' : '0';
        if (REDUCE_HALF_OPACITY) noEcc.style.opacity = off_opacity;
        eccWrapper.appendChild(noEcc);
      }
      return eccWrapper;
    }
    case 'STEREO': {
      const stereoSource = document.querySelector('.stereo-container');
      if (stereoSource) {
        const stereoClone = stereoSource.cloneNode(true);
        stereoClone.id = 'stereoIcon';
        stereoClone.removeAttribute('style');
        stereoClone.classList.add("tooltip");
        stereoClone.setAttribute("data-tooltip", "Stereo / Mono toggle.<br><strong>Click to toggle.</strong>");
        stereoClone.style.marginRight = RDS_ICON_STYLE_STEREO_ICON_SPACING + 'px';
        return stereoClone;
      }
      return null;
    }
    case 'TP': {
      const img = document.createElement('img');
      img.className = 'status-icon';
      img.id = 'tpIcon';
      img.alt = 'tpIcon';
      img.src = tp_off_webp;
      return img;
    }
    case 'TA': {
      const img = document.createElement('img');
      img.className = 'status-icon';
      img.id = 'taIcon';
      img.alt = 'taIcon';
      img.src = ta_off_webp;
      return img;
    }
    case 'RDS': {
      const img = document.createElement('img');
      img.className = 'status-icon';
      img.id = 'rdsIcon';
      img.alt = 'rdsIcon';
      img.src = rds_off_webp;
      return img;
    }
    default:
      console.warn(`[UI Add-on Pack] Unknown icon type: ${iconType}`);
      return null;
  }
}

// Helper function to create a row of icons
function createIconRow(iconList, isFirstRow = false) {
  const row = document.createElement('div');
  row.style.display = 'flex';
  row.style.alignItems = 'center';
  row.style.justifyContent = 'center';
  row.style.width = '100%';
  row.style.flexWrap = 'nowrap';

  if (isFirstRow) {
    row.style.gap = RDS_ICON_STYLE_FIRST_ROW_GAP + 'px';
    row.style.transform = `translateY(${RDS_ICON_STYLE_GAP_ROW_1}px)`;
  } else {
    row.style.gap = RDS_ICON_STYLE_SECOND_ROW_GAP + 'px';
    row.style.transform = `translateY(${RDS_ICON_STYLE_GAP_ROW_2}px)`;
  }

  // Filter out empty strings from the icon list
  const filteredList = iconList.filter(iconType => iconType && iconType.trim() !== '');

  // Check if TP and TA are adjacent in the list
  let i = 0;
  while (i < filteredList.length) {
    const iconType = filteredList[i].toUpperCase();
    const nextIconType = i + 1 < filteredList.length ? filteredList[i + 1].toUpperCase() : null;

    // Check if TP and TA are adjacent (in either order)
    if ((iconType === 'TP' && nextIconType === 'TA') || (iconType === 'TA' && nextIconType === 'TP')) {
      // Create a wrapper for TP-TA pair with smaller gap
      const tpTaWrapper = document.createElement('span');
      tpTaWrapper.style.display = 'inline-flex';
      tpTaWrapper.style.alignItems = 'center';
      tpTaWrapper.style.gap = RDS_ICON_STYLE_TP_TA_GAP + 'px';

      const firstIcon = createIconElement(filteredList[i]);
      const secondIcon = createIconElement(filteredList[i + 1]);
      if (firstIcon) tpTaWrapper.appendChild(firstIcon);
      if (secondIcon) tpTaWrapper.appendChild(secondIcon);

      row.appendChild(tpTaWrapper);
      i += 2; // Skip both TP and TA
    } else {
      const iconElement = createIconElement(iconType);
      if (iconElement) {
        row.appendChild(iconElement);
      }
      i++;
    }
  }

  return row;
}

function insertSignalPanel() {
  const signalPanelElement = document.querySelector('#flags-container-desktop');
  if (!signalPanelElement) {
    console.error('Signal panel container not found.');
    return;
  }

  signalPanelElement.id = 'signalPanel';
  signalPanelElement.innerHTML = '';

  signalPanelElement.style.cssText = `
    min-height: 90px;
    width: 32.9%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  `;

  // ICON-BAR
  const iconsBar = document.createElement('div');
  iconsBar.id = 'signal-icons';

  // Force vertical stacking with centered content
  iconsBar.style.position = 'relative';
  iconsBar.style.display = 'flex';
  iconsBar.style.flexDirection = 'column';
  iconsBar.style.alignItems = 'center';
  iconsBar.style.gap = '4px';
  iconsBar.style.width = '100%';

  signalPanelElement.appendChild(iconsBar);

  // Create first row using configurable array
  if (RDS_ICON_STYLE_FIRST_ROW && RDS_ICON_STYLE_FIRST_ROW.length > 0) {
    const firstRow = createIconRow(RDS_ICON_STYLE_FIRST_ROW, true);
    iconsBar.appendChild(firstRow);
  }

  // Create second row using configurable array
  if (RDS_ICON_STYLE_SECOND_ROW && RDS_ICON_STYLE_SECOND_ROW.length > 0) {
    const secondRow = createIconRow(RDS_ICON_STYLE_SECOND_ROW, false);
    iconsBar.appendChild(secondRow);
  }
}

//
// --------------------------------------------------------------
//  Init
// --------------------------------------------------------------
//
function initMetricsMonitor() {
  if (RDS_ICON_STYLE) insertSignalPanel();
  setupTextSocket();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initMetricsMonitor);
} else {
  if (RDS_ICON_STYLE) initMetricsMonitor();
}

}

}

// Function for update notification in /setup
function checkUpdate(setupOnly, pluginName, urlUpdateLink, urlFetchLink) {
    if (setupOnly && window.location.pathname !== '/setup') return;

    let pluginVersionCheck = typeof pluginVersion !== 'undefined' ? pluginVersion : typeof plugin_version !== 'undefined' ? plugin_version : typeof PLUGIN_VERSION !== 'undefined' ? PLUGIN_VERSION : 'Unknown';

    // Function to check for updates
    async function fetchFirstLine() {
        const urlCheckForUpdate = urlFetchLink;

        try {
            const response = await fetch(urlCheckForUpdate);
            if (!response.ok) {
                throw new Error(`[${pluginName}] update check HTTP error! status: ${response.status}`);
            }

            const text = await response.text();
            const lines = text.split('\n');

            let version;

            if (lines.length > 2) {
                const versionLine = lines.find(line => line.includes("const pluginVersion =") || line.includes("const plugin_version =") || line.includes("const PLUGIN_VERSION ="));
                if (versionLine) {
                    const match = versionLine.match(/const\s+(?:pluginVersion|plugin_version|PLUGIN_VERSION)\s*=\s*['"]([^'"]+)['"]/);
                    if (match) {
                        version = match[1];
                    }
                }
            }

            if (!version) {
                const firstLine = lines[0].trim();
                version = /^\d/.test(firstLine) ? firstLine : "Unknown"; // Check if first character is a number
            }

            return version;
        } catch (error) {
            console.error(`[${pluginName}] error fetching file:`, error);
            return null;
        }
    }

    // Check for updates
    fetchFirstLine().then(newVersion => {
        if (newVersion) {
            if (newVersion !== pluginVersionCheck) {
                let updateConsoleText = "There is a new version of this plugin available";
                // Any custom code here
                
                console.log(`[${pluginName}] ${updateConsoleText}`);
                setupNotify(pluginVersionCheck, newVersion, pluginName, urlUpdateLink);
            }
        }
    });

    function setupNotify(pluginVersionCheck, newVersion, pluginName, urlUpdateLink) {
        if (window.location.pathname === '/setup') {
          const pluginSettings = document.getElementById('plugin-settings');
          if (pluginSettings) {
            const currentText = pluginSettings.textContent.trim();
            const newText = `<a href="${urlUpdateLink}" target="_blank">[${pluginName}] Update available: ${pluginVersionCheck} --> ${newVersion}</a><br>`;

            if (currentText === 'No plugin settings are available.') {
              pluginSettings.innerHTML = newText;
            } else {
              pluginSettings.innerHTML += ' ' + newText;
            }
          }

          const updateIcon = document.querySelector('.wrapper-outer #navigation .sidenav-content .fa-puzzle-piece') || document.querySelector('.wrapper-outer .sidenav-content') || document.querySelector('.sidenav-content');

          const redDot = document.createElement('span');
          redDot.style.display = 'block';
          redDot.style.width = '12px';
          redDot.style.height = '12px';
          redDot.style.borderRadius = '50%';
          redDot.style.backgroundColor = '#FE0830' || 'var(--color-main-bright)'; // Theme colour set here as placeholder only
          redDot.style.marginLeft = '82px';
          redDot.style.marginTop = '-12px';

          updateIcon.appendChild(redDot);
        }
    }
}

if (CHECK_FOR_UPDATES) checkUpdate(pluginSetupOnlyNotify, pluginName, pluginHomepageUrl, pluginUpdateUrl);

})();
