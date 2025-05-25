/*
    UI Add-on Pack v1.0.7 by AAD
    ----------------------------
    https://github.com/AmateurAudioDude/FM-DX-Webserver-Plugin-UI-Addon-Pack
*/

(() => {

const pluginVersion = '1.0.7';
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
// Do not enable if using MOBILE STATUS BAR.
const MOVE_MOBILE_TRAY_TO_TOP = false;

// Hide mobile tray.
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

// Displays a popup if 2 or more users are connected.
// Use only if the 'Themed Popups' plugin is installed: https://github.com/AmateurAudioDude/FM-DX-Webserver-Plugin-Themed-Popups
const MULTIPLE_USERS_NOTICE = false;
const MULTIPLE_USERS_NOTICE_MESSAGE = `This receiver is currently in use.<br><br>Please be considerate and mindful of other users before tuning.<br><br>`;

// #################### RDS FLAG BULLET POINT #################### //

// Displays a bullet point next to the current RADIOTEXT being decoded, either A or B.
const RDS_FLAG_INDICATOR = false;

// #################### MULTIPATH ICON #################### //

// Adds a multipath icon alongside the stereo/mono icon.
// NOTE: This has only been tested/configured with a TEF module and therefore shouldn't be used with a TEF radio.
const MULTIPATH_INDICATOR = false;

// #################### NEW USER TUNING DELAY #################### //

// Enables new user tune delay, admins excluded.
const TUNE_DELAY_ENABLE = false;

// Sets a delay in seconds before a new user can begin tuning, admins excluded.
// NOTE: Set to 0 to disable.
const TUNE_DELAY = 2;

// Sets a delay in seconds, with an on screen timer, before a new user can begin tuning if at least one user is already online.
// NOTE: Set to 0 to disable.
const TUNE_DELAY_IF_MORE_THAN_ONE_USER = 45;

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

// Dims the PI CODE font for incomplete PI decodes.
const DIM_INCOMPLETE_PI_CODE = false;

// #################### CONSOLE LOG SETTINGS #################### //

// This will suppress browser console log entries for the website. Warnings and errors are still shown.
// Most users can ignore this setting.
const HIDE_CONSOLE_LOGS = false;

// ########################################################################################################################



















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
  styleElement.textContent += `
  /* Frequency font weight */
  #data-frequency {
    font-weight: 600;
  }
  `;
}

// Gradient buttons
if (GRADIENT_BUTTONS) {
  styleElement.textContent += `
  /* Gradient buttons */
  .playbutton, .data-eq, #data-ant input, #data-bw input, .data-ims, #freq-down, #search-down, #scanner-down, #freq-up, #search-up, #scanner-up, #button-presets-bank-dropdown input {
    background-image: linear-gradient(var(--color-5), var(--color-3));
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }
  .playbutton:hover, .data-eq:hover, #data-ant input:hover, #data-bw input:hover, .data-ims:hover, #freq-down:hover, #search-down:hover, #scanner-down:hover, #freq-up:hover, #search-up:hover, #scanner-up:hover, #Scan-on-off:hover, #button-presets-bank-dropdown input:hover {
    background-image: linear-gradient(var(--color-3), var(--color-5));
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
    transform: translateY(0.1px);
  }
  html body div.wrapper-outer.main-content div#wrapper div.flex-container div.panel-100.no-bg div.flex-container div.panel-33.hide-phone.no-bg div.flex-container span.panel-100-real.m-0, #Scan-on-off {
    filter: brightness(117.5%);
    position: relative;
    z-index: 0;
    border-radius: 14px;
  }
  html body div.wrapper-outer.main-content div#wrapper div.flex-container div.panel-100.no-bg div.flex-container div.panel-33.hide-phone.no-bg div.flex-container span.panel-100-real.m-0::before, #Scan-on-off::before {
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

document.head.appendChild(styleElement);

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
            console.warn('No checkboxes found to insert after.');
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
    if (document.getElementById("expandCanvasStyle")) {
        document.getElementById("expandCanvasStyle").remove();
    }
    if (localStorage.getItem("expandCanvasHeight") === "true") {
        document.head.appendChild(style);
    }
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
      const playButton = mobileTray.querySelector(".playbutton");

      if (mobileTray) {
        document.body.insertBefore(mobileTray, document.body.firstChild);

        Object.assign(mobileTray.style, {
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          zIndex: "15",
        });

        if (playButton) {
          Object.assign(playButton.style, {
            position: "absolute",
            top: "35px",
            left: "50%",
            transform: "translateX(-50%)",
          });
        }
      }
    });

    const wrapper = document.querySelector('.wrapper-outer.dashboard-panel');

    if (window.innerWidth < 720) {
        wrapper.style.setProperty('padding-top', '110px');
    } else {
        wrapper.style.setProperty('padding-top', '20px', 'important');
    }
}

moveTray();

window.addEventListener('resize', moveTray);
}

if (HIDE_MOBILE_TRAY && !MOVE_MOBILE_TRAY_TO_TOP) {
    document.addEventListener("DOMContentLoaded", function () {
      const mobileTray = document.querySelector("div#mobileTray.hide-desktop");
      if (mobileTray) {
        mobileTray.style.display = "none";
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
    let wsSendSocket;
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
let intervalIdUsersOnline = setInterval(function() {
    const usersOnlineElement = document.querySelector('.users-online-container') || document.getElementById('users-online-container');
    if (usersOnlineElement) {
        const usersOnline = parseInt(usersOnlineElement.textContent.trim());
        if (document.body.textContent.includes("You are logged in as an administrator.") || document.body.textContent.includes("You are logged in as an adminstrator.") || document.body.textContent.includes("You are logged in and can control the receiver.")) return;
        if (usersOnline >= 2) alert(`<div class="popup-plugin-content">${MULTIPLE_USERS_NOTICE_MESSAGE}</div>`, `OK`);
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
    if (socket.readyState === WebSocket.OPEN) {
        reconnectAttempts = 0;
    }

    socket.addEventListener('message', (event) => {
        handle_RDS_FLAG_INDICATOR(event);
    });

    socket.addEventListener('close', () => {
        console.log('RDS_FLAG_INDICATOR: WebSocket closed. Attempting to reconnect...');
        attemptReconnect();
    });

    socket.addEventListener('error', (err) => {
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
  flagsContainer.style.paddingLeft = '12px';
  flagsContainer.style.paddingRight = '12px';
}

let dataFreq = 0;
let prevFreq = 0;
let sig = 0;
let sigRawMultipath = 0;
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
            sigRawMultipath = sigRawValues[1];
            tooltipSigRawMultipath = (sig > SIGNAL_THRESHOLD) ? sigRawMultipath + '%' : '-';
        } else {
            console.error('Multipath indicator sigRaw data format invalid');
        }
    }

    if (freq || document.getElementById("data-frequency").textContent) {
        dataFreq = Number(freq) || Number(document.getElementById("data-frequency").textContent);
        if (freq !== 0 && prevFreq !== dataFreq) {
            prevFreq = dataFreq;
            sigRawMultipath = 0;
            addRandomIcon(false);
            return;
        }
        prevFreq = dataFreq;
    }

    if (sig > SIGNAL_THRESHOLD && sigRawMultipath > MULTIPATH_THRESHOLD) {
        addRandomIcon(true);
    } else {
        addRandomIcon(false);
    }

    if (typeof initTooltips === 'function') initTooltips();
});

function addRandomIcon(result) {
  const targetSpan = document.querySelector('.wrapper-outer #wrapper .flex-container .flex-container #flags-container-desktop.panel-33.user-select-none span.pointer.stereo-container');

  if (targetSpan) {
    const existingIcon = targetSpan.parentNode.querySelector('span.multipath-container');
    if (existingIcon) {
      existingIcon.remove();
    }

    const iconSpan = document.createElement('span');
    iconSpan.classList.add('multipath-container');
    iconSpan.style.marginLeft = '8px';
    iconSpan.style.verticalAlign = 'middle';
    iconSpan.style.marginTop = '2px';
    iconSpan.style.fontSize = '16px';
    iconSpan.style.position = 'relative';

    if (!result) {
      iconSpan.classList.remove('opacity-full');
      iconSpan.classList.add('opacity-half');
      iconSpan.style.color = 'var(--color-text)';
    } else {
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

    const tooltipSpan = document.createElement('span');
    tooltipSpan.classList.add('overlay', 'tooltip');
    tooltipSpan.setAttribute('data-tooltip', `Multipath/Co-channel indicator. <br><strong>Signal: ${sig} dBf, Multipath: ${tooltipSigRawMultipath}`);

    iconSpan.appendChild(iconElement);
    iconElement.appendChild(tooltipSpan);

    targetSpan.parentNode.insertBefore(iconSpan, targetSpan.nextSibling);
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
          const lockIcon = tunerName.querySelector('.user-requests-lock');
          if (lockIcon) {
              tunerName.removeChild(lockIcon);
          }
          // Show icon
          const lockIconHTML = '<i style="padding: 10px 2px 12px 6px; font-size: 18px; color: var(--color-4);" class="fa-solid fa-lock pointer user-requests-lock" aria-label="Tuner is currently locked."></i>';
          tunerName.insertAdjacentHTML('beforeend', lockIconHTML);

          const isMobilePortrait = window.innerWidth <= 768 && window.innerHeight > window.innerWidth;

          if (isMobilePortrait) {
          const lockIcon = tunerName.querySelector('.user-requests-lock');
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
            const tunerName = document.querySelector('.dashboard-panel-plugin-content');
            const lockIcon = tunerName.querySelector('.user-requests-lock');
            if (lockIcon) {
                tunerName.removeChild(lockIcon);
            }
        }
      }, tuneDelay);
    }

    if (TUNE_DELAY_IF_MORE_THAN_ONE_USER && TUNE_DELAY_IF_MORE_THAN_ONE_USER < TUNE_DELAY) onScreenTimerDelay = TUNE_DELAY;
    if (TUNE_DELAY > TUNE_DELAY_IF_MORE_THAN_ONE_USER) userUnlockTuning(tuneDelay);

    let userOnlineCount = 0;
    let lastProcessedTime = 0;
    let isFirstTimeRun = true;

    const TIMEOUT_DURATION = 500;

    // Define the handler as a named function
    function handleMessage(event) {
        if (isFirstTimeRun) {
            isFirstTimeRun = false;
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

// #################### VOLUME PERCENTAGE #################### //

if (VOLUME_PERCENTAGE_TOAST) {
(function () {
  let newVolumeGlobal;

  const slider = document.getElementById('volumeSlider');
  if (!slider) {
    console.warn('Missing #volumeSlider');
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

}

// Function for update notification in /setup
function checkUpdate(setupOnly, pluginVersion, pluginName, urlUpdateLink, urlFetchLink) {
    if (setupOnly && window.location.pathname !== '/setup') return;

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
                const versionLine = lines.find(line => line.includes("const pluginVersion =") || line.includes("const plugin_version ="));
                if (versionLine) {
                    const match = versionLine.match(/const\s+plugin[_vV]ersion\s*=\s*['"]([^'"]+)['"]/);
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
            if (newVersion !== pluginVersion) {
                let updateConsoleText = "There is a new version of this plugin available";
                // Any custom code here
                
                console.log(`[${pluginName}] ${updateConsoleText}`);
                setupNotify(pluginVersion, newVersion, pluginName, urlUpdateLink);
            }
        }
    });

    function setupNotify(pluginVersion, newVersion, pluginName, urlUpdateLink) {
        if (window.location.pathname === '/setup') {
          const pluginSettings = document.getElementById('plugin-settings');
          if (pluginSettings) {
            const currentText = pluginSettings.textContent.trim();
            const newText = `<a href="${urlUpdateLink}" target="_blank">[${pluginName}] Update available: ${pluginVersion} --> ${newVersion}</a><br>`;

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

if (CHECK_FOR_UPDATES) checkUpdate(pluginSetupOnlyNotify, pluginVersion, pluginName, pluginHomepageUrl, pluginUpdateUrl);

})();
