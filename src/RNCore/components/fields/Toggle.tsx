import React from "react";
import {faToggleOff, faToggleOn} from "@fortawesome/free-solid-svg-icons";
import FA from "../static/FA";
import {flattenStyle} from "../component";
import Label from "./Label";
import {primary, secondary} from "../../../styles/colors";
import {ICheckbox} from "./Checkbox";
import {checkBoxOff, checkBoxOn} from "../../../styles/checkbox";
import {pointer} from "../../../styles/cursors";

export default function (props: ICheckbox) {
    if (props.visible === false) return null

    function onPress() {
        if (props.onChange) props.onChange(!props.value)
    }

    return <Label
        style={props.style}
        label={props.label}
        labelStyle={[props.labelStyle]}
        labelPosition={props.labelPosition ? props.labelPosition : 'left'}
    >
        {props.value ?
            <FA
                icon={faToggleOn}
                style={[checkBoxOn, pointer]}
                onPress={onPress}
            />
            :
            <FA
                icon={faToggleOff}
                style={[checkBoxOff, pointer]}
                onPress={onPress}
            />
        }
    </Label>
}
