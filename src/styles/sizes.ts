import {p1, p2, p3, ph1, ph2, pv1} from "./margins";
import {h1Style, textComment, textPrimary} from "./text";


export const mainHeight = fixHeight(24)

export const mainWidth = {minWidth: mainHeight.height, width: 200, maxWidth: 200}
export function fixHeight(height: number) {
    return {minHeight: height, height, maxHeight: height}
}

export function fixWidth(width: number) {
    return {minWidth: width, width, maxWidth: width}
}
