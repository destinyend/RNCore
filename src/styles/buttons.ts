import {heightNormal, maxWidth, minWidth} from "./sizes";

export const btnWidth = {
    minWidth,
    maxWidth
}

export const btnStyle = {
    ...heightNormal,
    ...btnWidth,
    zIndex: 3,
    elevation: 3,
}
