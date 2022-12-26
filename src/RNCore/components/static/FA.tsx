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
    icon: IconDefinition
    style?: object
    visible?: boolean
    onPress?: () => void
}

export default function (props: IFA) {
    if (props.visible === false) return null
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
            />
        </TouchableOpacity>
    }
    return <FAIcon
        icon={props.icon}
        style={flattenStyle([props.style, {width: mainWidth.minWidth}])}
    />
}

interface IFAIcon {
    icon: IconDefinition
    style: object
}

function FAIcon(props: IFAIcon) {
    if (Platform.OS === 'web') {
        return <FontAwesomeReact icon={props.icon} style={props.style}/>;
    }
    return <FontAwesomeNative icon={props.icon} style={props.style}/>
}
