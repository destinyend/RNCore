import {danger, primary, secondary, success, warning} from "./colors";
import {aCenter, aCenterMiddle, aMiddle} from "./markups";
import {p1, ph1, ph2, pv1} from "./margins";
import {fixHeight, mainHeight, mainPadding, mainSize} from "./sizes";

export const bold = {fontWeight: 'bold'}
export const italic = {fontStyle: 'italic'}

export const textShadow = {
    textShadowColor: '#fff',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
}

export const textMain = {
    fontSize: '100%',
    ...aMiddle,
    ...mainSize
}

export const textPrimary = {
    ...textMain,
    color: '#000',
}

export const textSecondary = {
    ...textMain,
    ...secondary
}

export const textWarning = {
    ...textMain,
    ...warning
}

export const textDanger = {
    ...textMain,
    ...danger
}

export const textSuccess = {
    ...textMain,
    ...success
}

export const textComment = {
    fontSize: 12,
    color: '#222',
    textStyle: 'italic'
}

export const h1Style = {
    ...mainSize,
    ...fixHeight(mainSize.height*1.5),
    color: '#222',
    textStyle: 'bold'
}

export const h2Style = {
    fontSize: textMain.fontSize * 1.4,
    color: '#222',
    textStyle: 'bold'
}

export const h3Style = {
    fontSize: textMain.fontSize * 1.3,
    color: '#222',
    textStyle: 'bold'
}

export const h4Style = {
    fontSize: textMain.fontSize * 1.2,
    color: '#222',
    textStyle: 'bold'
}

export const h5Style = {
    fontSize: textMain.fontSize * 1.1,
    color: '#222',
    textStyle: 'bold'
}

export const h6Style = {
    fontSize: textMain.fontSize,
    color: '#222',
    textStyle: 'bold'
}
