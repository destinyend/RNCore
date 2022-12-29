import Label from "./Label";
import {TextInput} from "react-native";
import {flattenStyle} from "../component";
import React from "react";
import {field, TLabelPosition} from "../../../styles/fields";
import {placeholderColor} from "../../../styles/text";

export interface IOnKey {
    [index: string]: (value: any) => void
}

export interface IField {
    value?: any
    visible?: boolean
    style?: object
    disabled?: boolean
    placeholder?: string
    labelPosition?: TLabelPosition
    label?: string
    labelStyle?: object
    onChange?: (value: any) => void
}


export interface ICursorField extends IField {
    cursorColor?: string
    onBlur?: (value: any) => void
    onKey?: IOnKey
    onFocus?: (value: any) => void
}

export interface IInputField extends ICursorField {
    keyboardType?: 'number-pad' | 'decimal-pad' | 'numeric' | 'email-address' | 'phone-pad' | 'url'
    autoCapitalize?: boolean
    maxLength?: number
    numberOfLines?: number
}

export function getFieldStyle(style: object| undefined) {
    let filedStyle = {}
     style = flattenStyle(style)
    for (let key in style) {
        if (key.startsWith('border') || key.startsWith('flex')) { // @ts-ignore
            filedStyle[key] = style[key]
        }
    }
    return filedStyle
}


export default function InputField(props: IInputField) {
    if (props.visible === false) return null
    const filedStyle = getFieldStyle(props.style)

    return <Label
        labelStyle={props.labelStyle}
        labelPosition={props.labelPosition}
        style={props.style}
        label={props.label}
    >
        <TextInput
            editable={!props.disabled}
            onKeyPress={({nativeEvent: {key: keyValue}}) => {
                if (props.onKey && keyValue in props.onKey) props.onKey[keyValue](props.value)
            }}
            style={flattenStyle([field, filedStyle])}
            value={props.value}
            onChangeText={props.onChange}
            // @ts-ignore
            onBlur={props.onBlur}
            onFocus={props.onFocus}
            placeholder={props.placeholder}
            placeholderTextColor={placeholderColor}
        />
    </Label>
}
