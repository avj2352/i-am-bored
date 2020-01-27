# I AM B.O.R.E.D

![I am B.O.R.E.D Logo](design/images/logo_small.png)

A Progressive Web application to Read, Create, Share cooking recipes. The Full name of the application stands for: `I am Book Of Recipes Easily Done`.

## App Names

- **I am B.O.R.E.D** : I am Book Of Recipes Easily Done
- **G.I.R.A** : Great Indian Recipe Application
- **Y.M.C.A** : Yo! My Cooking App / Your Mobile Cooking App
- **C.R.Y** : Cookbook Recipe, Yeah !!

## Important Links

- [Nest JS Documentation](https://docs.nestjs.com/first-steps)
- [PWA assets generator - IOS](https://github.com/onderceylan/pwa-asset-generator)
- [Material UI Theme Generator](https://cimdalli.github.io/mui-theme-generator/)

---

## Material UI Theme Configuration

```javascript
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import * as Colors from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator'

const getTheme = () => {
  let overwrites = {    
    "palette": {
        "primary1Color": "#ff7043",
        "primary2Color": "#f57c00",
        "accent1Color": "#26a69a",
        "accent2Color": "#009688"
    }
};
  return getMuiTheme(baseTheme, overwrites);
}
```

### To Load from the Website

```json
{
   "palette": {
        "primary1Color": "#ff7043",
        "primary2Color": "#f57c00",
        "accent1Color": "#26a69a",
        "accent2Color": "#009688"
    }
}
```

---

# IOS

## Icons for IOS

Generated using PWA Asset Generator

Below is the icons content for your manifest.json file. You can copy/paste it manually

```json
[
  {
    "src": "ios/manifest-icon-192.png",
    "sizes": "192x192",
    "type": "image/png"
  },
  {
    "src": "ios/manifest-icon-512.png",
    "sizes": "512x512",
    "type": "image/png"
  }
]
```

## Splash Screen on IOS

Include the following code in your `index.html` page

```html
<link rel="apple-touch-icon" sizes="180x180" href="ios/apple-icon-180.png">
<link rel="apple-touch-icon" sizes="167x167" href="ios/apple-icon-167.png">
<link rel="apple-touch-icon" sizes="152x152" href="ios/apple-icon-152.png">
<link rel="apple-touch-icon" sizes="120x120" href="ios/apple-icon-120.png">

<meta name="apple-mobile-web-app-capable" content="yes">

<link rel="apple-touch-startup-image" href="ios/apple-splash-2048-2732.png" medi
a="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-
ratio: 2) and (orientation: portrait)">
<link rel="apple-touch-startup-image" href="ios/apple-splash-2732-2048.png" medi
a="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-
ratio: 2) and (orientation: landscape)">
<link rel="apple-touch-startup-image" href="ios/apple-splash-1668-2388.png" medi
a="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-r
atio: 2) and (orientation: portrait)">
<link rel="apple-touch-startup-image" href="ios/apple-splash-2388-1668.png" medi
a="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-r
atio: 2) and (orientation: landscape)">
<link rel="apple-touch-startup-image" href="ios/apple-splash-1668-2224.png" medi
a="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-r
atio: 2) and (orientation: portrait)">
<link rel="apple-touch-startup-image" href="ios/apple-splash-2224-1668.png" medi
a="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-r
atio: 2) and (orientation: landscape)">
<link rel="apple-touch-startup-image" href="ios/apple-splash-1536-2048.png" medi
a="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-r
atio: 2) and (orientation: portrait)">
<link rel="apple-touch-startup-image" href="ios/apple-splash-2048-1536.png" medi
a="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-r
atio: 2) and (orientation: landscape)">
<link rel="apple-touch-startup-image" href="ios/apple-splash-1242-2688.png" medi
a="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ra
tio: 3) and (orientation: portrait)">
<link rel="apple-touch-startup-image" href="ios/apple-splash-2688-1242.png" medi
a="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ra
tio: 3) and (orientation: landscape)">
<link rel="apple-touch-startup-image" href="ios/apple-splash-1125-2436.png" medi
a="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ra
tio: 3) and (orientation: portrait)">
<link rel="apple-touch-startup-image" href="ios/apple-splash-2436-1125.png" medi
a="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ra
tio: 3) and (orientation: landscape)">
<link rel="apple-touch-startup-image" href="ios/apple-splash-828-1792.png" media
="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-rat
io: 2) and (orientation: portrait)">
<link rel="apple-touch-startup-image" href="ios/apple-splash-1792-828.png" media
="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-rat
io: 2) and (orientation: landscape)">
<link rel="apple-touch-startup-image" href="ios/apple-splash-1242-2208.png" medi
a="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ra
tio: 3) and (orientation: portrait)">
<link rel="apple-touch-startup-image" href="ios/apple-splash-2208-1242.png" medi
a="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ra
tio: 3) and (orientation: landscape)">
<link rel="apple-touch-startup-image" href="ios/apple-splash-750-1334.png" media
="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-rat
io: 2) and (orientation: portrait)">
<link rel="apple-touch-startup-image" href="ios/apple-splash-1334-750.png" media
="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-rat
io: 2) and (orientation: landscape)">
<link rel="apple-touch-startup-image" href="ios/apple-splash-640-1136.png" media
="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-rat
io: 2) and (orientation: portrait)">
<link rel="apple-touch-startup-image" href="ios/apple-splash-1136-640.png" media
="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-rat
io: 2) and (orientation: landscape)">
```

# DB value (to be deleted)

```bash
mongodb://<dbuser>:<dbpassword>@ds123695.mlab.com:23695/i-am-bored-db
```