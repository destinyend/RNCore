import {flattenStyle} from "../RNCore/components/component";

export const borderTopLeftRadius = {borderTopLeftRadius: 5}
export const borderBottomLeftRadius = {borderBottomLeftRadius: borderTopLeftRadius.borderTopLeftRadius}
export const borderTopRightRadius = {borderTopRightRadius: borderTopLeftRadius.borderTopLeftRadius}
export const borderBottomRightRadius = {borderBottomRightRadius: borderTopLeftRadius.borderTopLeftRadius}

export const borderRadius = flattenStyle([
    borderTopLeftRadius,
    borderBottomLeftRadius,
    borderTopRightRadius,
    borderBottomRightRadius
])
export const borderLeftColor = {borderLeftColor: '#777'}
export const borderRightColor = {borderRightColor: borderLeftColor.borderLeftColor}
export const borderTopColor = {borderTopColor: borderLeftColor.borderLeftColor}
export const borderBottomColor = {borderBottomColor: borderLeftColor.borderLeftColor}
export const borderColor = {...borderLeftColor, ...borderRightColor, ...borderBottomColor, ...borderBottomColor}

export const borderLeftWidth = {borderLeftWidth: 1}
export const borderRightWidth = {borderRightWidth: borderLeftWidth.borderLeftWidth}
export const borderTopWidth = {borderTopWidth: borderLeftWidth.borderLeftWidth}
export const borderBottomWidth = {borderBottomWidth: borderLeftWidth.borderLeftWidth}

export const borderWidth = flattenStyle([borderRightWidth, borderLeftWidth, borderBottomWidth, borderTopWidth])
export const borderLeftStyle = {borderLeftStyle: 'solid'}
export const borderRightStyle = {borderRightStyle: borderLeftStyle.borderLeftStyle}
export const borderTopStyle = {borderTopStyle: borderLeftStyle.borderLeftStyle}
export const borderBottomStyle = {borderBottomStyle: borderLeftStyle.borderLeftStyle}
export const borderStyle = flattenStyle([borderLeftStyle, borderRightStyle, borderBottomStyle, borderTopStyle])

export const border = {
    ...borderWidth, ...borderColor, ...borderRadius, ...borderStyle}

export const noBorder = {borderColor: 'transparent'}
export const noRadius = {
    borderRadius: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
}
