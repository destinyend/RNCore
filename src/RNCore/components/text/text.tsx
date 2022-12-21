import {Text, TouchableOpacity} from 'react-native'
import {flattenStyle} from "../component";
import {textDanger, textPrimary, textSecondary, textSuccess, textWarning} from "../../../styles/text";

export interface IText {
    style?: object | object[] | null | undefined
    onPress?: () => void
    visible?: boolean
    children: any
}

export function RNText(props: IText) {
    if (props.visible === false) return null
    const style = flattenStyle(props.style)
    if (props.onPress) return <TouchableOpacity style={style} onPress={props.onPress}>
        <Text style={style}>{props.children}</Text>
    </TouchableOpacity>
    return <Text style={style}>{props.children}</Text>
}

export function TextPrimary(props: IText) {
    return <RNText {...props} style={[textPrimary, props.style]}>{props.children}</RNText>
}

export function TextSecondary(props: IText) {
    return <RNText {...props} style={[textSecondary, props.style]}>{props.children}</RNText>
}

export function TextWarning(props: IText) {
    return <RNText {...props} style={[textWarning, props.style]}>{props.children}</RNText>
}

export function TextDanger(props: IText) {
    return <RNText {...props} style={[textDanger, props.style]}>{props.children}</RNText>
}

export function TextSuccess(props: IText) {
    return <RNText {...props} style={[textSuccess, props.style]}>{props.children}</RNText>
}

