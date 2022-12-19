import React from "react";
import {Picker} from '@react-native-picker/picker';
import {Platform, StyleSheet, View} from "react-native";
import {p0} from "../../styles/margins";
import {field, TLabelPosition} from "../../styles/fields";
import {flattenStyle} from "../component";
import {fRow} from "../../styles/markups";
import {TextPrimary} from "../text/text";
import Label from "./Label";
import {IInputField} from "./InputField";

interface IItem {
    label: string
    value: string
}

interface ISelect extends Omit<IInputField, 'value' | 'onFocus'| 'onBlur'| 'onKey'| 'onChange'>{
    onBlur: undefined
    onKey: undefined
    onFocus: undefined
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

