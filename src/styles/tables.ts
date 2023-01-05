import {borderColor, borderStyle, borderWidth, noBorder, noRadius} from "./borders";
import {bold} from "./text";
import {m0, mt1, p1, pr3} from "./margins";
import {flex1, sEnd} from "./markups";
import {fixWidth, mainHeight} from "./sizes";
import {bgPrimary} from "./colors";
import {btnPrimary} from "./buttons";
import {H4} from "../RNCore/components/text/headers";

export const tableTitle = {...H4}
export const tableBorder = {...borderWidth, ...borderColor, ...noRadius, ...borderStyle}
export const tableStyle = {...tableBorder}
export const tableHeader = {...tableBorder, ...bold, ...flex1, ...bgPrimary, ...mainHeight, ...m0}
export const tableHeaderFont = {...btnPrimary.font}

export const tableRow = {...tableBorder}
export const tableCell = {...tableBorder, ...flex1,  ...mainHeight}

export const tableValue = {...noBorder, ...flex1}
export const tableNumber = {...sEnd}

export const tableSelector = {...fixWidth(40)}
