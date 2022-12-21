import React from "react";
import InputField, {IInputField} from "./InputField";

interface IOnKey {
    [index: string]: (value: string) => void
}

interface ITextField extends Omit<IInputField, 'onChange'| 'onBlur' | 'onFocus' | 'onKey'> {
    onChange?: (value: string) => void
    onBlur?: (value: string) => void
    onFocus?: (value: string) => void
    onKey?: IOnKey
}


export default function TextField(props: ITextField) {
    return <InputField {...props}/>
}

