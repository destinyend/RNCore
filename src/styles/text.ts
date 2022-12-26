import {danger, secondary, secondaryLight, success, warning} from "./colors";
import {fixHeight, fixWidth, mainHeight} from "./sizes";
import {mainPadding} from "./margins";
import {aCenter, jCenter} from "./markups";

export const bold = {fontWeight: 'bold'}
export const italic = {fontStyle: 'italic'}

export const textShadow = {
    textShadowColor: '#fff',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
}

export const textMain = {
    fontSize: '100%',
    ...mainHeight,
    ...mainPadding,
    ...aCenter,
    ...jCenter
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

export const h6Style = {
    ...textMain,
    ...bold
}

export const h1Style = {
    ...h6Style,
    fontSize: '150%',
}

export const h2Style = {
    ...h6Style,
    fontSize: '140%',
}

export const h3Style = {
    ...h6Style,
    fontSize: '130%',
}

export const h4Style = {
    ...h6Style,
    fontSize: '120%',
}

export const h5Style = {
    ...h6Style,
    fontSize: '110%',
}

export const placeholderColor = secondary.color
