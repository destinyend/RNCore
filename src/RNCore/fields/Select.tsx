import React from "react";
import {Picker} from '@react-native-picker/picker';
import {Platform, StyleSheet, View} from "react-native";
import {p0} from "../../styles/margins";
import {field, TLabelPosition} from "../../styles/fields";
import {flattenStyle} from "../component";
import {fRow} from "../../styles/markups";
import {TextPrimary} from "../text/text";
import Label from "./Label";

interface IItem {
    label: string
    value: string
}

interface ISelect {
    visible?: boolean
    label?: string
    value: string
    items: IItem[]
    onChange?: (value: string) => void
    style?: object
    editable?: boolean
    labelLeft?: boolean
    labelStyle?: object
    labelPosition?: TLabelPosition
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
        enabled={props.editable}
        // @ts-ignore
        style={field}
        selectedValue={String(props.value)}
        onValueChange={props.onChange}
    >
        {props.items.map((item, key) => <Picker.Item key={key} {...item}/>)}
    </Picker>
    </Label>
}

