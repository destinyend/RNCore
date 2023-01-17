import {TouchableOpacity} from "react-native";
import {FontAwesomeIcon as FontAwesomeNative} from "@fortawesome/react-native-fontawesome";
import {IconDefinition} from "@fortawesome/fontawesome-common-types";
import React from "react";
import {flattenStyle} from "../component";
import {jCenter} from "../../../styles/markups";
import {mainWidth} from "../../../styles/sizes";
import {TStyle} from "../../constants";


export interface IFA {
    icon: IconDefinition | null | undefined
    style?: TStyle
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
                style={props.style}
                size={props.size}
            />
        </TouchableOpacity>
    }
    return <FAIcon
        icon={props.icon}
        style={[{width: mainWidth.minWidth}, props.style]}
        size={props.size}
    />
}

interface IFAIcon {
    icon: IconDefinition
    style: TStyle
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
    return <FontAwesomeNative icon={props.icon} style={flattenStyle(props.style)}/>
}
