import React from "react";
import {faToggleOff, faToggleOn} from "@fortawesome/free-solid-svg-icons";
import FA from "../static/FA";
import {flattenStyle} from "../component";
import Label from "./Label";
import {primary, secondary} from "../../../styles/colors";

interface IToggle {
    value?: boolean,
    onChange?: (value: boolean) => void,
    visible?: boolean,
    style?: object,
    label?: string
}

export default function (props: IToggle) {
    if (props.visible === false) return null
    return <Label
        style={flattenStyle([props.style])}
        onPress={() => {
            if (props.onChange) props.onChange(!props.value)
        }}
    >
        <FA
            icon={props.value ? faToggleOn : faToggleOff}
            // @ts-ignore
            style={flattenStyle([{
                color: props.value ? primary.color : secondary.color,
            }, props.style])}
        />
    </Label>
}
