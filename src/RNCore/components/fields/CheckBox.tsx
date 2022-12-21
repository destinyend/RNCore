import {faSquare} from "@fortawesome/free-solid-svg-icons/faSquare";
import {faCheckSquare} from "@fortawesome/free-solid-svg-icons";
import FA from "../static/FA";
import React from "react";
import {IField} from "./InputField";
import {flattenStyle} from "../component";
import Label from "./Label";
import {primary, secondary} from "../../../styles/colors";

interface ICheckBox extends Omit<IField, 'value'| 'onChange'>{
    onChange?: (value: boolean) => void,
    value: undefined
}

export default function (props: ICheckBox) {
    if (!props.visible) return null

    return <Label
        style={flattenStyle([props.style])}
        onPress={() => {
            if (props.onChange) props.onChange(!props.value)
        }}
    >
        {props.value ?
            <FA
                icon={faCheckSquare}
                // @ts-ignore
                style={primary}
            />
            :
            <FA
                icon={faSquare}
                // @ts-ignore
                style={secondary}
            />
        }
    </Label>
}
