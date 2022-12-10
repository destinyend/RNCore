import {primary} from "./colors";

export const bold = {fontWeight: 'bold'}
export const italic = {fontStyle: 'italic'}

export const fontShadow = {
    textShadowColor: '#fff',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
}

export const fontMain = {
    fontSize: 16,
    color: '#000'
}

export const fontTitle = {
    fontSize: 20,
    color: primary.color,
    ...fontShadow,
    fontWeight: 'bold'
}

export const fontComment = {
    fontSize: 12,
    color: '#222',
    fontStyle: 'italic'
}

export const fontPlaceholder = {
    fontSize: 12,
    color: '#666'
}

