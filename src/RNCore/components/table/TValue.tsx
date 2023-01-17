import {TVoid} from "../../constants";
import TextField from "../fields/TextField";
import {TextPrimary} from "../text/text";
import React from "react";
import {Numeric, Percent, Rub} from "../text/decorators";
import DateField from "../fields/DateField";
import Select, {IVariant} from "../fields/Select";
import NumberField from "../fields/NumberField";
import {tableNumber, tableValue} from "../../../styles/tables";
import TimeField from "../fields/TimeField";
import URL from "../text/URL";

export type TCellKind = 'textField' | 'numberField' | 'dateField' | 'select' | 'timeField' | 'text' | 'rub' |
    'percent' | 'number'| 'jsx' | 'url'

export type TCellVal = string | number | null | JSX.Element
export interface ITValue {
    type: TCellKind
    value: TCellVal
    onChange?: TVoid
    variants?: IVariant[]
}

export default function (props: ITValue) {
    const fieldProps = {
        style: tableValue,
        onChange: props.onChange,
        value: props.value
    }
    switch (props.type) {
        case "timeField":
            // @ts-ignore
            return <TimeField {...fieldProps}/>
        case 'textField':
            return <TextField {...fieldProps}/>
        case 'numberField':
            // @ts-ignore
            return <NumberField {...fieldProps}/>
        case 'dateField':
            // @ts-ignore
            return <DateField {...fieldProps}/>
        case 'select':
            return <Select
                {...fieldProps}
                // @ts-ignore
                variants={props.variants}
            />
        case 'rub':
            return <Rub style={tableNumber}>{props.value}</Rub>
        case 'percent':
            return <Percent style={tableNumber}>{props.value}</Percent>
        case 'number':
            return <Numeric style={tableNumber}>{props.value}</Numeric>
        case 'url':
            return <URL url={String(props.value)}/>
        case 'jsx':
            const Comp = props.value
            // @ts-ignore
            return <Comp/>
        default:
            return <TextPrimary>{props.value}</TextPrimary>
    }
}
