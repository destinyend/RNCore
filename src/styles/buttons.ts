import {border} from "./borders";
import {
    bgDanger,
    bgDangerLight,
    bgPrimary,
    bgPrimaryLight,
    bgSecondary,
    bgSecondaryLight, bgSuccess, bgSuccessLight,
    bgWarning,
    bgWarningLight
} from "./colors";
import {textPrimary} from "./text";
import {mainHeight, mainWidth} from "./sizes";
import {mainPadding} from "./margins";
import {aCenter, jCenter} from "./markups";

export const btnBorder = {}

export const btnWrapper = {
    ...aCenter,
    ...jCenter,
    ...border,
    ...mainHeight,
    ...mainPadding
}

export const btnPrimary = {
    font: {...textPrimary, color: '#fff'},
    background: [bgPrimary.backgroundColor, bgPrimary.backgroundColor, bgPrimaryLight.backgroundColor]
}

export const btnSecondary = {
    font: {...textPrimary, color: '#fff'},
    background: [bgSecondaryLight.backgroundColor, bgSecondary.backgroundColor, bgSecondaryLight.backgroundColor]
}

export const btnWarning = {
    font: {...textPrimary, color: '#fff'},
    background: [bgWarningLight.backgroundColor, bgWarning.backgroundColor, bgWarningLight.backgroundColor]
}

export const btnDanger = {
    font: {...textPrimary, color: '#fff'},
    background: [bgDangerLight.backgroundColor, bgDanger.backgroundColor, bgDangerLight.backgroundColor]
}

export const btnSuccess = {
    font: {...textPrimary, color: '#fff'},
    background: [bgSuccessLight.backgroundColor, bgSuccess.backgroundColor, bgSuccessLight.backgroundColor]
}
