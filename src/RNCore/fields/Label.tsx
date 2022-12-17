import {RNText} from "../text/text";
import React from "react";
import {defaultLabelPosition, defaultLabelStyle, TLabelPosition} from "../../styles/fields";
import {flattenStyle} from "../component";
import {absolute, fRow} from "../../styles/markups";
import {View} from "react-native";

interface ILabel {
    labelPosition?: TLabelPosition
    labelStyle?: object
    label?: string
    children?: JSX.Element | JSX.Element[] | null | undefined
    style?: object | object[] | null | undefined
}

export default function (props: ILabel) {
    const labelPosition = props.labelPosition || defaultLabelPosition
    let labelStyle
    if (labelPosition === 'border') {
        labelStyle = flattenStyle([absolute, {
            top: -8,
            left: 10,
        }, defaultLabelStyle, props.labelStyle])
    } else labelStyle = flattenStyle([defaultLabelStyle, props.labelStyle])
    return <View
        style={flattenStyle([props.style, labelPosition === 'left' ? fRow : {}])}
    >
        <RNText
            visible={!!props.label && labelPosition !== 'none'}
            style={labelStyle}
        >
            {props.label}:
        </RNText>
        {props.children}
    </View>
}
