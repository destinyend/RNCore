import React, {useState} from "react";
import {TextInput, View} from "react-native";
import {flattenStyle} from "../component";
import {defaultLabelPosition, defaultLabelStyle, field, TLabelPosition} from "../../styles/fields";
import {RNText, TextPrimary} from "../text/text";
import {absolute, fRow, jCenter} from "../../styles/markups";
import {bold, placeholderColor, textPrimary} from "../../styles/text";
import {borderColor} from "../../styles/borders";
import Label from "./Label";
import {IInputField} from "./InputField";


interface ITextField extends Omit<IInputField, 'onChange'| 'onBlur' | 'onFocus'> {
    onChange?: (value: string) => void
    onBlur?: (value: string) => void
    onFocus?: (value: string) => void
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
