import {mainHeight, mainWidth} from "./sizes";
import {border} from "./borders";
import {p1, ph1} from "./margins";
import {flex1} from "./markups";
import {bold} from "./text";

export const field = {
    backgroundColor: '#fff',
    ...mainWidth,
    ...mainHeight,
    ...border,
    ...p1,
}

export const flexField = {
    backgroundColor: '#fff',
    ...flex1,
    ...mainHeight,
    ...border,
    ...ph1,
}

export type TLabelPosition = 'border' | 'top' | 'left' | 'none'

export const defaultLabelPosition: TLabelPosition = 'border'

export const defaultLabelStyle = {
    ...bold,
    fontSize: '80%',
    color: border.borderColor
}
