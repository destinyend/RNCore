import {aCenter, flex1, jCenter, sCenter} from "./markups";
import {fixHeight, fixWidth} from "./sizes";
import {field} from "./fields";
import {bgSecondaryLight} from "./colors";
import {border} from "./borders";

export const mediaSplash = {
    ...flex1, ...aCenter, ...jCenter, backgroundColor: '#000'
}

export const soundStyle = {
    ...fixWidth(field.width),
    ...bgSecondaryLight,
    ...border
}

export const playerStyle = {
    resizeMode: 'contain',
    ...fixWidth(320),
    ...fixHeight(180),
    jCenter,
    aCenter,
    sCenter
}

export const imageStyle = {...playerStyle}
