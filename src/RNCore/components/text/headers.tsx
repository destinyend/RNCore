import {IText, RNText, TextPrimary} from "./text";
import {flattenStyle} from "../component";
import {h1Style, h2Style, h3Style, h4Style, h5Style, h6Style} from "../../../styles/text";

export function H1(props: IText) {
    const style = [props.style, h1Style]
    return <RNText {...props} style={style}>{props.children}</RNText>
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
