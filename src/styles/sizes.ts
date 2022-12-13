import {p1, p2, p3, ph1, ph2, pv1} from "./margins";
import {h1Style, textComment, textPrimary} from "./text";


export const mainHeight = fixHeight(30)

export const mainWidth = {minWidth: 40, width: 200, maxWidth: 200}

export const mainPadding = {...ph2, ...pv1}

export const mainSize = {...mainPadding, ...mainHeight, ...mainWidth}
export function fixHeight(height: number) {
    return {minHeight: height, height, maxHeight: height}
}

export function fixWidth(width: number) {
    return {minWidth: width, width, maxWidth: width}
}
