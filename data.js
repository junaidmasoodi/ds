import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "*": {
        "fontFamily": "'Lato', sans-serif",
        "textAlign": "center",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "img": {
        "maxWidth": "100%"
    },
    "h1": {
        "fontSize": 3,
        "fontWeight": 300,
        "marginTop": 1
    },
    "psetting--up": {
        "fontFamily": "'Cormorant Garamond', serif",
        "fontSize": 1.5,
        "paddingTop": 1,
        "paddingRight": 1,
        "paddingBottom": 1,
        "paddingLeft": 1,
        "marginBottom": 1,
        "color": "#04a080"
    },
    "supported-by": {
        "paddingTop": 1,
        "paddingRight": 1,
        "paddingBottom": 1,
        "paddingLeft": 1,
        "borderTop": "1px solid #ececec",
        "marginBottom": 1.5
    },
    "supported-by p": {
        "paddingTop": 1,
        "paddingRight": 1,
        "paddingBottom": 1,
        "paddingLeft": 1,
        "marginBottom": 1
    },
    "supported-by img": {
        "paddingTop": 0,
        "paddingRight": 10,
        "paddingBottom": 0,
        "paddingLeft": 10
    },
    "divsponsor": {
        "paddingTop": 1,
        "paddingRight": 1,
        "paddingBottom": 1,
        "paddingLeft": 1,
        "backgroundColor": "#04a080",
        "color": "#fff"
    },
    "divsponsor one": {
        "paddingBottom": 10
    },
    "copy": {
        "marginTop": 1,
        "fontWeight": 100
    }
});