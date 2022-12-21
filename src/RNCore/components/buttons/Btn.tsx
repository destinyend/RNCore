import {Text, TouchableOpacity} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import FA from "../static/FA";
import {IconDefinition} from "@fortawesome/fontawesome-common-types";
import {flattenStyle} from "../component";
import {mainWidth} from "../../../styles/sizes";
import {btnDanger, btnPrimary, btnSecondary, btnSuccess, btnWarning, btnWrapper} from "../../../styles/buttons";
import {flex1} from "../../../styles/markups";


export interface IBtnBase {
    title?: string
    onPress?: () => void
    onLongPress?: () => void
    disabled?: boolean,
    visible?: boolean,
    bgColors?: string[]
    wrpStyle?: object
    fontStyle?: object
    borderStyle?: object
    icon?: IconDefinition | undefined | null
    width?: 'auto' | 'field' | 'flex'
    style?: object
}


export default function Btn(props: IBtnBase) {
    if (props.visible === false) return null

    let wrpStyle
    switch (props.width) {
        case 'field':
            wrpStyle = flattenStyle([mainWidth, btnWrapper, props.wrpStyle])
            break
        case 'flex':
            wrpStyle = flattenStyle([btnWrapper, props.borderStyle, flex1])
            break
        default:
            wrpStyle = flattenStyle([{alignSelf: 'flex-start'}, btnWrapper, props.wrpStyle])
            break
    }
    let style = {...props.style}
    if (props.width) style = {...style, ...flex1}
    return <TouchableOpacity
        style={style}
        onPress={props.onPress}
        disabled={props.disabled}
        onLongPress={props.onLongPress}
    >
        <LinearGradient
            colors={props.bgColors ? props.bgColors : []}
            // @ts-ignore
            style={wrpStyle}
        >
            {
                props.title ?
                    <Text style={props.fontStyle}>{props.title}</Text>
                    :
                    // @ts-ignore
                    <FA icon={props.icon} style={props.fontStyle}/>
            }
        </LinearGradient>
    </TouchableOpacity>

}

export interface IBtn {
    title?: string
    onPress?: () => void
    onLongPress?: () => void
    disabled?: boolean,
    visible?: boolean,
    style?: object,
    icon?: IconDefinition | null | undefined
    width?: 'auto' | 'field' | 'flex'
}

export function BtnPrimary(props: IBtn) {
    return <Btn
        {...props}
        style={props.style}
        bgColors={btnPrimary.background}
        fontStyle={btnPrimary.font}
    />
}

export function BtnSecondary(props: IBtn) {
    return <Btn
        {...props}
        style={props.style}
        bgColors={btnSecondary.background}
        fontStyle={btnSecondary.font}
    />
}

export function BtnWarning(props: IBtn) {
    return <Btn
        {...props}
        style={props.style}
        bgColors={btnWarning.background}
        fontStyle={btnWarning.font}
    />
}

export function BtnDanger(props: IBtn) {
    return <Btn
        {...props}
        style={props.style}
        bgColors={btnDanger.background}
        fontStyle={btnDanger.font}
    />
}

export function BtnSuccess(props: IBtn) {
    return <Btn
        {...props}
        style={props.style}
        bgColors={btnSuccess.background}
        fontStyle={btnSuccess.font}
    />
}

