import {fixHeight, fixWidth} from "../styles/sizes";

export interface IComponent {
    visible?: boolean | undefined
    children?: any
    style?: object | object[] | null | undefined
    onPress?: () => void
    disabled?: boolean
}

export function flattenStyle(args: object | object[] | null | undefined): object|null {
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
    return null
}
