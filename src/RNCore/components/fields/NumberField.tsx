import React from "react";
import InputField, {ICursorField} from "./InputField";

interface IOnKey {
    [index: string]: (value: number) => void
}

interface INumberField extends Omit<ICursorField, 'value' | 'onFocus'| 'onBlur'| 'onKey'| 'onChange'>{
    onChange?: (value: number) => void
    onBlur?: (value: number) => void
    onFocus?: (value: number) => void
    onKey?: IOnKey
    value?: number
}

export default function NumberField(props: INumberField) {
    function onChange(value: string) {
        const num: number = +value.replace(/[^0-9]/g, '')
        if (props.onChange) props.onChange(num)
    }
    return <InputField {...props} keyboardType={'numeric'} onChange={onChange}/>
}
