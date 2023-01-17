import {fixHeight, fixWidth} from "./sizes";
import {p2} from "./margins";
import {bgSecondary} from "./colors";

export const headerStyle = {
    ...fixHeight(30),
    ...fixWidth(window.innerWidth),
    ...p2
}


export const bodyStyle = {
    ...headerStyle,
    // @ts-ignore
    ...fixHeight(window.innerHeight - headerStyle.height - 1),
    ...bgSecondary
}
