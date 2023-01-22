import {bgSecondaryLight} from "./colors";
import {h3Style, textPrimary} from "./text";
import {aCenter, flex1} from "./markups";
import {tableBorder} from "./tables";
import {mv2, p2} from "./margins";

export const alertSplash = {
    ...flex1,
    ...aCenter,
    paddingTop: '15%'
}

export const alertBox = {
    backgroundColor: bgSecondaryLight.backgroundColor,
    ...tableBorder,
    ...p2
}

export const alertTitle = {
    ...h3Style,
}

export const alertBody = {
    ...textPrimary,
    ...mv2
}

