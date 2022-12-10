import {StyleSheet, Text, TouchableOpacity} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import FA from "../static/FA";
import {fontMain} from "../styles/fonts";
import {fCenter, flex1, jCenter, noWrap} from "../styles/markups";
import {btnStyle} from "../styles/buttons";
import {ph1} from "../styles/margins";
import {IconDefinition} from "@fortawesome/fontawesome-common-types";

export interface BtnInterface {
    title: string
    onPress?: () => void
    onLongPress?: () => void
    disabled?: boolean,
    visible?: boolean,
    style?: object,
    bgColors?: string[]
    wrpStyle?: object
    fontStyle?: object
    borderStyle?: object
    gradientStyle?: object
    icon?: IconDefinition
}


export default function (props: BtnInterface) {
    if (props.visible === false) return null
    return <TouchableOpacity
        onPress={props.onPress}
        disabled={props.disabled}
        style={props.wrpStyle}
        onLongPress={props.onLongPress}
    >
        <LinearGradient
            colors={props.bgColors ? props.bgColors: []}
            style={props.gradientStyle}
        >
            {getTitle(title, textStyle)}
        </LinearGradient>
    </TouchableOpacity>

}

function getTitle(title, textStyle) {
    if (['string', 'number'].includes(typeof title)) return <Text style={textStyle}>{title}</Text>
    if (title instanceof Array) {
        return isDesktop() ?
            <Text style={textStyle}>{title[0]}</Text>
            :
            // @ts-ignore
            <FA icon={title[1]} style={textStyle}/>
    }
    // @ts-ignore
    return <FA icon={title} style={textStyle}/>
}
