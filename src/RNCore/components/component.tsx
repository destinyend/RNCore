import {TStyle} from "../constants";

export interface IComponent {
    visible?: boolean | undefined
    children?: any
    style?: TStyle
    fontStyle?: TStyle
    onPress?: () => void
    disabled?: boolean
}

export function flattenStyle(args: TStyle): object {
    if (Array.isArray(args)) {
        let styles: object = {}
        for (const el of args) {
            styles = {...styles, ...flattenStyle(el)}
        }
        return styles
    }
    if (args) {
        return args
    }
    return {}
}
