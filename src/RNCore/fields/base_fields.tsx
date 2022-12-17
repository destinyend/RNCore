import React, {useState} from "react";
import {TextInput, View} from "react-native";
import {flattenStyle} from "../component";
import {defaultLabelPosition, defaultLabelStyle, field, TLabelPosition} from "../../styles/fields";
import {RNText, TextPrimary} from "../text/text";
import {absolute, fRow, jCenter} from "../../styles/markups";
import {bold, placeholderColor, textPrimary} from "../../styles/text";
import {borderColor} from "../../styles/borders";
import Label from "./Label";

export interface IField {
    onChange?: (value: any) => void
    onBlur?: (value: any) => void
    value?: any
    visible?: boolean
    style?: object
    disabled?: boolean
    onEnter?: () => void
    onTab?: () => void
    onUp?: () => void
    onDown?: () => void
    onLeft?: () => void
    onRight?: () => void
    keyboardType?: 'number-pad' | 'decimal-pad' | 'numeric' | 'email-address' | 'phone-pad' | 'url'
    placeholder: string
    autoCapitalize?: boolean
    cursorColor?: string
    maxLength?: number
    numberOfLines?: number
    labelPosition?: TLabelPosition
    label?: string
    onFocus?: (value: any) => void
    labelStyle?: object
}

function InputField(props: IField) {
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
                if (keyValue === 'Enter' && props.onEnter) props.onEnter()
                else if (keyValue === 'Tab' && props.onTab) props.onTab()
                else if (keyValue === 'ArrowUp' && props.onUp) props.onUp()
                else if (keyValue === 'ArrowDown' && props.onDown) props.onDown()
                else if (keyValue === 'ArrowLeft' && props.onLeft) props.onLeft()
                else if (keyValue === 'ArrowRight' && props.onRight) props.onRight()
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

interface ITextField {
    onChange?: (value: string) => void
    onBlur?: (value: string) => void
    value?: string
    visible?: boolean
    style?: object
    disabled?: boolean
    onEnter?: () => void
    onTab?: () => void
    onUp?: () => void
    onDown?: () => void
    onLeft?: () => void
    onRight?: () => void
    placeholder?: string
    autoCapitalize?: boolean
    cursorColor?: string
    maxLength?: number
    numberOfLines?: number
    labelPosition?: 'left' | 'top' | 'border'
    label?: string
    onFocus?: (value: any) => void
    labelStyle?: object
}

export function TextField(props: ITextField) {
    // @ts-ignore
    return <InputField {...props}/>
}

interface INumberField {
    onChange?: (value: number) => void
    onBlur?: (value: number) => void
    value?: number
    label?: string
    visible?: boolean
    style?: object
    disabled?: boolean
    onEnter?: () => void
    onTab?: () => void
    onUp?: () => void
    onDown?: () => void
    onLeft?: () => void
    onRight?: () => void
    placeholder?: string
    cursorColor?: string
    labelPosition?: 'left' | 'top' | 'border'
    onFocus?: (value: any) => void
    labelStyle?: object
}

export function NumberFiled(props: INumberField) {
    function onChange(value: string) {
        const num: number = +value.replace(/[^0-9]/g, '')
        if (props.onChange) props.onChange(num)
    }

    // @ts-ignore
    return <InputField {...props} keyboardType={'numeric'} onChange={onChange}/>
}
