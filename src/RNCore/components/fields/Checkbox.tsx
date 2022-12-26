import {faSquare} from "@fortawesome/free-solid-svg-icons/faSquare";
import {faCheckSquare} from "@fortawesome/free-solid-svg-icons";
import FA from "../static/FA";
import React from "react";
import {IField} from "./InputField";
import Label from "./Label";
import {bgDanger, primary, secondary} from "../../../styles/colors";
import {pointer} from "../../../styles/cursors";
import {jCenter, sCenter} from "../../../styles/markups";
import {checkBoxOff, checkBoxOn} from "../../../styles/checkbox";

export interface ICheckbox extends Omit<IField, 'value' | 'onChange' | 'labelPosition'> {
    onChange?: (value: boolean) => void,
    value: boolean
    labelPosition?: 'top' | 'left' | 'none'
}

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
                icon={faCheckSquare}
                style={[checkBoxOn, pointer]}
                onPress={onPress}
            />
            :
            <FA
                icon={faSquare}
                style={[checkBoxOff, pointer]}
                onPress={onPress}
            />
        }
    </Label>
}
