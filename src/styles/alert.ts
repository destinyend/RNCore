import {fixHeight, fixWidth} from "./sizes";
import {bgSecondary} from "./colors";
import {textPrimary, textTitle} from "./text";
import {aRight} from "./markups";

export const alertWrapper = {
    flex: 1,
    background: '#000',
    opacity: 0.3
}

export const alertBox = {
    ...fixWidth(300),
    ...fixHeight(200),
    backgroundColor: bgSecondary.backgroundColor
}

export const alertTitle = {
    ...textTitle,
}

export const alertBody = {
    ...textPrimary,
}

export const alertCloseBtnWrapper = {
    ...aRight
}

export const alertCloseBtn = {

}
