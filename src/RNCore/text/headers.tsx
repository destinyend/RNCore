import {IText, TextPrimary} from "./text";
import {h1Style, h2Style, h3Style, h4Style, h5Style, h6Style} from "../../styles/text";
import {flattenStyle} from "../component";

export function H1(props: IText) {
    const style = [props.style, h1Style]
    return <TextPrimary {...props} style={style}>{props.children}</TextPrimary>
}

export function H2(props: IText) {
    const style = flattenStyle([props.style, h2Style])
    return <TextPrimary {...props} style={style}>{props.children}</TextPrimary>
}

export function H3(props: IText) {
    const style = [props.style, h3Style]
    return <TextPrimary {...props} style={style}>{props.children}</TextPrimary>
}

export function H4(props: IText) {
    const style = [props.style, h4Style]
    return <TextPrimary {...props} style={style}>{props.children}</TextPrimary>
}

export function H5(props: IText) {
    const style = [props.style, h5Style]
    return <TextPrimary {...props} style={style}>{props.children}</TextPrimary>
}

export function H6(props: IText) {
    const style = [props.style, h6Style]
    return <TextPrimary {...props} style={style}>{props.children}</TextPrimary>
}
