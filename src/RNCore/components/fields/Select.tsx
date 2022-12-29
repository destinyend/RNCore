import React from "react";
import {Picker} from '@react-native-picker/picker';
import Label from "./Label";
import {getFieldStyle, IField} from "./InputField";
import {field} from "../../../styles/fields";
import {flattenStyle} from "../component";

export interface IItem {
    label: string
    value: string
}

interface ISelect extends Omit<IField, 'value' | 'onChange'> {
    value: string
    items: IItem[]
    onChange?: (value: string) => void
}

export default function (props: ISelect) {
    if (props.visible === false) return null
    const filedStyle = getFieldStyle(props.style)
    return <Label
        labelStyle={props.labelStyle}
        labelPosition={props.labelPosition}
        style={props.style}
        label={props.label}
    >
        <Picker
            enabled={props.disabled}
            style={flattenStyle([filedStyle, field])}
            selectedValue={String(props.value)}
            onValueChange={props.onChange}
        >
            {props.items.map((item, key) => <Picker.Item key={key} {...item}/>)}
        </Picker>
    </Label>
}

