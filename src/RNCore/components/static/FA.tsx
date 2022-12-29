import {Platform, TouchableOpacity} from "react-native";
import {FontAwesomeIcon as FontAwesomeNative} from "@fortawesome/react-native-fontawesome";
import {FontAwesomeIcon as FontAwesomeReact} from "@fortawesome/react-fontawesome";
import {IconDefinition} from "@fortawesome/fontawesome-common-types";
import React from "react";
import {flattenStyle} from "../component";
import {bgDanger} from "../../../styles/colors";
import {jCenter} from "../../../styles/markups";
import {mainWidth} from "../../../styles/sizes";


export interface IFA {
    icon: IconDefinition | null | undefined
    style?: object
    visible?: boolean
    onPress?: () => void
    size?: number
}

export default function (props: IFA) {
    if (props.visible === false || !props.icon) return null
    if (props.onPress) {
        return <TouchableOpacity
            style={flattenStyle(jCenter)}
            onPress={() => {
                if (props.onPress) props.onPress()
            }}
        >
            <FAIcon
                icon={props.icon}
                style={flattenStyle(props.style)}
                size={props.size}
            />
        </TouchableOpacity>
    }
    return <FAIcon
        icon={props.icon}
        style={flattenStyle([{width: mainWidth.minWidth}, props.style])}
        size={props.size}
    />
}

interface IFAIcon {
    icon: IconDefinition
    style: object
    size?: number
}

function FAIcon(props: IFAIcon) {
    const sizes = ["2xs",
        "xs",
        "sm",
        "lg",
        "xl",
        "2xl",
        "1x",
        "2x",
        "3x",
        "4x",
        "5x",
        "6x",
        "7x",
        "8x",
        "9x",
        "10x"]
    // if (Platform.OS === 'web') {
    //
    //     return <FontAwesomeReact
    //         icon={props.icon}
    //         style={props.style}
    //         // @ts-ignore
    //         size={props.size ? sizes[props.size - 1]: 'lg'}
    //     />;
    // }
    console.log(props.size, '..........', props.style)
    return <FontAwesomeNative icon={props.icon} style={props.style}/>
}
