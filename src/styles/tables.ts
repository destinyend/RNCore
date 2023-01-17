import {border, borderColor, borderRightWidth, borderStyle, borderWidth, noBorder, noRadius} from "./borders";
import {bold} from "./text";
import {m0, mt1, p1, pr3} from "./margins";
import {aCenter, flex1, jCenter, sEnd} from "./markups";
import {fixWidth, mainHeight} from "./sizes";
import {bgPrimary, bgSecondaryLight, primary} from "./colors";
import {btnPrimary} from "./buttons";
import {H4} from "../RNCore/components/text/headers";

export const title = {...H4}

export const tableBorder = {...border, ...noRadius}
export const headerBorder = tableBorder
export const headerHeight = mainHeight

export const headerBackground = bgPrimary
export const headerFont = {...btnPrimary.font, ...bold}

export const headerCellBorder = {
    borderRightColor: border.borderRightColor,
    //@ts-ignore
    borderRightWidth: border.borderRightWidth,
    //@ts-ignore
    borderStyle: border.borderRightStyle
}

export const rowBorder = tableBorder
export const rowHeight = mainHeight
export const rowEvenBG = {backgroundColor: '#fff'}
export const rowNotEvenBG = bgSecondaryLight
export const rowFont = primary

export const cellBorder = headerCellBorder

export const tableValue = {...noBorder, ...flex1}
export const tableNumber = {...sEnd}

export const tableCheckbox = {...fixWidth(40), ...jCenter, ...aCenter}
