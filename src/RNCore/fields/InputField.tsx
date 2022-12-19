import {field, TLabelPosition} from "../../styles/fields";
import Label from "./Label";
import {TextInput} from "react-native";
import {flattenStyle} from "../component";
import {placeholderColor} from "../../styles/text";
import React from "react";

export interface IOnKey {
    [index: string]: (value: any) => void
}
export interface IInputField {
    onChange?: (value: any) => void
    onBlur?: (value: any) => void
    value?: any
    visible?: boolean
    style?: object
    disabled?: boolean
    onKey?: IOnKey
    keyboardType?: 'number-pad' | 'decimal-pad' | 'numeric' | 'email-address' | 'phone-pad' | 'url'
    placeholder?: string
    autoCapitalize?: boolean
    cursorColor?: string
    maxLength?: number
    numberOfLines?: number
    labelPosition?: TLabelPosition
    label?: string
    onFocus?: (value: any) => void
    labelStyle?: object
}

function InputField(props: IInputField) {
    if (props.visible === false) return null
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
            style={flattenStyle(field)}
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
