import React from "react";
import {Picker} from '@react-native-picker/picker';
import Label from "./Label";
import {IField} from "./InputField";
import {field} from "../../../styles/fields";

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
    return <Label
        labelStyle={props.labelStyle}
        labelPosition={props.labelPosition}
        style={props.style}
        label={props.label}
    >
        <Picker
            enabled={props.disabled}
            // @ts-ignore
            style={field}
            selectedValue={String(props.value)}
            onValueChange={props.onChange}
        >
            {props.items.map((item, key) => <Picker.Item key={key} {...item}/>)}
        </Picker>
    </Label>
}

