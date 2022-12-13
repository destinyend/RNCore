import React from "react";
import {TextInput} from "react-native";
import {flattenStyle} from "../component";
import {field} from "../../styles/fields";
import {Row} from "../markup/markup";
import {TextPrimary} from "../text/text";
import {aMiddle} from "../../styles/markups";

export interface IInput {
    label?: string
    visible?: boolean
    value?: string
    onChange?: () => void
    onBlur?: () => void
    style?: object
    disabled?: boolean
    onEnter?: () => void
    onTab?: () => void
    onUp?: () => void
    onDown?: () => void
    onLeft?: () => void
    onRight?: () => void
}

interface ITextInput  extends IInput {
    placeholder?: string,
}

export default function (props: ITextInput) {
    if (props.visible === false) return null
    return <Row style={aMiddle}>
        <TextPrimary visible={!!props.label}>{props.label}: </TextPrimary>
        <TextInput
        editable={!props.disabled}
        onKeyPress={({nativeEvent: {key: keyValue}}) => {
            // @ts-ignore
            if (props.onKey && props.onKey[keyValue]) props.onKey[keyValue]()
        }}
        style={flattenStyle([field, props.style])}
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.onChange}
        // @ts-ignore
        onBlur={props.onBlur}
    />
    </Row>
}
