import {p1, p3} from "./margins";
import {fontComment, fontMain, fontTitle} from "./fonts";

export const mainWidth = 200
export const minWidth = 40
export const maxWidth = 200

export const heightSmall = {
    height: fontComment.fontSize + p1.padding,
    maxHeight: fontComment.fontSize + p1.padding,
    minHeight: fontComment.fontSize + p1.padding
}

export const heightNormal = {
    height: fontMain.fontSize + p1.padding,
    maxHeight: fontMain.fontSize + p1.padding,
    minHeight: fontMain.fontSize + p1.padding
}

export const heightBig = {
    height: fontTitle.fontSize + p3.padding,
    maxHeight: fontTitle.fontSize + p3.padding,
    minHeight: fontTitle.fontSize + p3.padding
}

export function fixHeight(height: number) {
    return {minHeight: height, height, maxHeight: height}
}

export function fixWidth(width: number) {
    return {minWidth: width, width, maxWidth: width}
}
