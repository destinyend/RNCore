import {borderColor, borderStyle, borderWidth, noRadius} from "./borders";
import {bold} from "./text";
import {p1, pr3} from "./margins";

export const tableBorder = {...borderWidth, ...borderColor, ...noRadius, ...borderStyle}
export const tableStyle = {...tableBorder}
export const tableTitle = {...tableBorder, ...bold, ...p1}
export const tableRow = {...tableBorder}
export const tableCell = {...tableBorder, ...pr3}
