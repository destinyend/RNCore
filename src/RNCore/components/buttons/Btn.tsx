import {Text, TouchableOpacity} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import FA from "../static/FA";
import {IconDefinition} from "@fortawesome/fontawesome-common-types";
import {flattenStyle} from "../component";
import {fixHeight, mainWidth} from "../../../styles/sizes";
import {btnDanger, btnPrimary, btnSecondary, btnSuccess, btnWarning, btnWrapper} from "../../../styles/buttons";
import {flex1} from "../../../styles/markups";


export interface IBtnBase {
    title?: string
    onPress?: () => void
    onLongPress?: () => void
    disabled?: boolean,
    visible?: boolean,
    bgColors?: string[]
    fontStyle?: object
    icon?: IconDefinition | undefined | null
    width?: 'auto' | 'field' | 'flex'
    style?: object
}


export default function Btn(props: IBtnBase) {
    if (props.visible === false) return null

    let wrpStyle
    switch (props.width) {
        case 'field':
            wrpStyle = flattenStyle([mainWidth, btnWrapper, props.style])
            break
        case 'flex':
            wrpStyle = flattenStyle([btnWrapper, flex1, props.style])
            break
        default:
            wrpStyle = flattenStyle([{alignSelf: 'flex-start'}, btnWrapper, props.style])
            break
    }

    return <TouchableOpacity
        style={props.width ? flattenStyle(flex1): null}
        onPress={props.onPress}
        disabled={props.disabled}
        onLongPress={props.onLongPress}
    >
        <LinearGradient
            colors={props.bgColors ? props.bgColors : []}
            style={wrpStyle}
        >
            {
                props.title ?
                    <Text style={props.fontStyle}>{props.title}</Text>
                    :
                    <FA icon={props.icon} style={[props.fontStyle, fixHeight('100%')]}/>
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


