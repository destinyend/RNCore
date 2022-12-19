import React, {useState} from "react";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {Row} from "../markup/markup";
import {TextField} from "./TextField";
import {flattenStyle} from "../component";
import {field} from "../../styles/fields";
import {flex1} from "../../styles/markups";
import {stickLeft, stickRight} from "../../styles/margins";
import {BtnPrimary} from "../buttons/Btn";


interface IFind {
    placeholder?: string
    minSymbols?: number
    onPress?: (value: string) => void
    disabled?: boolean,
    visible?: boolean,
    style?: object
}

export default function (props: IFind) {
    if (props.visible === false) return null
    const [text, setText] = useState('')

    function find() {
        const minSymbols = props.minSymbols || 2
        if (text.length >= minSymbols && props.onPress) props.onPress(text.trim())
        setText('')
    }

    return <Row style={flattenStyle([field, props.style])}>
        <TextField
            disabled={props.disabled}
            placeholder={props.placeholder}
            style={flattenStyle([flex1, stickRight])}
            onChange={setText}
            value={text}
            onKey={{
                Enter: find
            }}
        />
        <BtnPrimary
            disabled={props.disabled}
            style={stickLeft}
            icon={faSearch}
            onPress={find}
        />
    </Row>
}
