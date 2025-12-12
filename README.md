# UI Addon Pack plugin for FM-DX Webserver

A collection of visual enhancements for FM-DX Webserver. Features may be added/removed in future. By default, all options are disabled.

> [!TIP]
> To keep a record of changed settings in a text file, run `node changes` from the `UIAddonPack` folder before transfering the latest `pluginUIAddonPack.js`. Changes are still required to be manually entered after each update.

* [Download the latest zip file](https://github.com/AmateurAudioDude/FM-DX-Webserver-Plugin-UI-Addon-Pack/archive/refs/heads/main.zip)
* Transfer `UIAddonPack` folder, and `-UIAddonPack.js` to FM-DX-Webserver `plugins` folder
* Restart FM-DX Webserver if required
* Login to Adminstrator Panel and enable plugin

#### Configuration options found in `pluginUIAddonPack.js`

###### Includes code and assistance from LLMs, and Highpoint2000.

v1.1.6
* Added `RDS_ICON_SCALE`, `STEREO_ICON_WIDTH`, `RDS_INDICATOR_ICON_TYPE` and other RDS icon style options

v1.1.5
------
* Added more configurable options for `RDS_ICON_STYLE`

v1.1.4
------
* Added Music/Speech icons to `RDS_ICON_STYLE`
* Minor fixes

v1.1.3
------
* Added options `RDS_ICON_STYLE`, `RDS_ICON_STYLE_MOBILE`, `LED_GLOW_EFFECT_ICONS_METRICS_MONITOR_PLUGIN`

v1.1.2
------
* Added option to sort order of plugin buttons

v1.1.1
------
* Added option to set default signal unit for first time visitors
* Included file `changes.js` which outputs changed settings to file

v1.1.0
------
* 'Expand Canvas' setting now allows resizing via mouse dragging

v1.0.9
------
* Prevent multipath indicator tooltip flickering
* Improved TEF radio support for multipath indicator
* Improved font weight setting for custom fonts in Chrome (e.g. retrofont plugin)
* Minor fixes

v1.0.8
------
* Added LED glow effect option

v1.0.7
------
* Minor fixes

v1.0.6
------
* Added option `GRADIENT_BUTTONS`

v1.0.5
------
* Added option `TUNE_DELAY_IF_MORE_THAN_ONE_USER`

v1.0.4
------
* Admins excluded from tune delay (`TUNE_DELAY`)
* Resized DX type popup for FMLIST button mod (`BUTTON_FM_LIST_MOD`)

v1.0.3
------
* Added option `MOVE_MOBILE_TRAY_TO_TOP`
* Added option `HIDE_MOBILE_TRAY`

v1.0.2
------
* Fix for FM-DX Webserver v1.3.8 compatibility issues

v1.0.1
------
* Fix for FM-DX Webserver v1.3.7 compatibility issues

v1.0.0
------
* Initial release
