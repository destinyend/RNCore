import React from "react";
import {faToggleOff, faToggleOn} from "@fortawesome/free-solid-svg-icons";
import {Text, StyleSheet, Platform} from "react-native";
import FA from "../static/FA";
import {Row} from "../markup/markup";
import {flattenStyle} from "../component";
import Label from "./Label";
import {primary, secondary} from "../../styles/colors";

interface IToggle {
    selected?: boolean,
    onPress?: (value: boolean) => void,
    visible?: boolean,
    style?: object,
    label?: string
}

export default function (props: IToggle) {
    if (props.visible === false) return null
    return <Label
        style={flattenStyle([props.style])}
        onPress={() => {
            if (props.onPress) props.onPress(!props.selected)
        }}
    >
        <FA
            icon={props.selected ? faToggleOn : faToggleOff}
            // @ts-ignore
            style={flattenStyle([{
                color: props.selected ? primary.color : secondary.color,
            }, props.style])}
        />
    </Label>
}
