import {fixHeight, fixWidth} from "./sizes";
import {bgSecondary, bgSecondaryLight} from "./colors";
import {h3Style, textPrimary} from "./text";
import {aCenter, jCenter, jEnd} from "./markups";

export const alertWrapper = {
    flex: 1,
    opacity: 0.1,
    paddingTop: '15%',
    ...aCenter
}

export const alertBox = {
    ...fixWidth(300),
    ...fixHeight(200),
    backgroundColor: bgSecondaryLight.backgroundColor,
    opacity: 1
}

export const alertTitle = {
    ...h3Style,
}

export const alertBody = {
    ...textPrimary,
}

export const alertCloseBtnWrapper = {
    ...jEnd
}

export const alertCloseBtn = {

}
