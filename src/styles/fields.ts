import {heightNormal, mainWidth} from "./sizes";
import {border} from "./borders";
import {p1, ph1} from "./margins";
import {flex1} from "./markups";

export const fieldWidth = {
    minWidth: mainWidth,
    width: mainWidth,
    maxWidth: mainWidth
}

export const field = {
    backgroundColor: '#fff',
    ...fieldWidth,
    ...heightNormal,
    ...border,
    ...p1,
}

export const flexField = {
    backgroundColor: '#fff',
    ...flex1,
    ...heightNormal,
    ...border,
    ...ph1,
}

