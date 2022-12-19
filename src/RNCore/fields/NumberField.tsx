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


interface INumberField extends Omit<IInputField, 'value' | 'onFocus'| 'onBlur'| 'onKey'| 'onChange'>{
    onChange?: (value: number) => void
    onBlur?: (value: number) => void
    value?: number
}

export function NumberFiled(props: INumberField) {
    function onChange(value: string) {
        const num: number = +value.replace(/[^0-9]/g, '')
        if (props.onChange) props.onChange(num)
    }

    // @ts-ignore
    return <InputField {...props} keyboardType={'numeric'} onChange={onChange}/>
}
