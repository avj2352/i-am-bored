# I AM B.O.R.E.D

A Progressive Web application to Read, Create, Share cooking recipes. 

## App Names

- **I am B.O.R.E.D** : I am Book Of Recipes Easily Done
- **G.I.R.A** : Great Indian Recipe Application
- **Y.M.C.A** : Yo! My Cooking App / Your Mobile Cooking App
- **C.R.Y** : Cookbook Recipe, Yeah !!

## Important Links

- [Nest JS Documentation](https://docs.nestjs.com/first-steps)
- [Material UI Theme Generator](https://cimdalli.github.io/mui-theme-generator/)

## Material UI Theme Configuration

```javascript
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import * as Colors from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator'

const getTheme = () => {
  let overwrites = {
    "palette": {
        "primary1Color": Colors.deepOrange500,
        "accent1Color": Colors.pink500,
        "primary2Color": Colors.deepOrange700
    }
};
  return getMuiTheme(baseTheme, overwrites);
}
```