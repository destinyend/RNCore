import React, {useState} from "react";
import {mt1, mt2} from "../styles/margins";
import {textPrimary} from "../styles/text";
import {Col1} from "../RNCore/components/markup/markup";
import TextField from "../RNCore/components/fields/TextField";
import NumberField from "../RNCore/components/fields/NumberField";
import Select from "../RNCore/components/fields/Select";
import DateField from "../RNCore/components/fields/DateField";
import TimeField from "../RNCore/components/fields/TimeField";
import Checkbox from "../RNCore/components/fields/Checkbox";
import Toggle from "../RNCore/components/fields/Toggle";

export default function (): JSX.Element {
    const [num, setNum] = useState(0)
    const [date, setDate] = useState('')
    const [selected, setSelected] = useState('0')
    const [checkbox, setCheckbox] = useState(true)
    const [toggle, setToggle] = useState(true)
    const items = [
        {label: 'Москва', value: '0'},
        {label: 'Санкт-Петербург', value: '1'},
        {label: 'Красноярск', value: '2'},
        {label: 'Ростов', value: '3'},
        {label: 'Ярославль', value: '4'},
    ]
    return <Col1>
        <TextField
            style={mt1}
            placeholder={'placeholder'}
            label={'TextField'}
            labelPosition={'left'}
            labelStyle={textPrimary}
        />

        <NumberField
            style={mt2}
            label={'NumberFiled'}
            value={num}
            onChange={setNum}
            labelPosition={'left'}
            labelStyle={textPrimary}
        />

        <Select
            style={mt2}
            label={'Select'}
            items={items}
            value={selected}
            onChange={setSelected}
            labelPosition={'left'}
            labelStyle={textPrimary}
        />

        <DateField
            label={'DateField'}
            style={mt2}
            value={date}
            onChange={setDate}
            labelPosition={'left'}
            labelStyle={textPrimary}
        />

        <TimeField
            style={mt2}
            label={'TimeField'}
            labelPosition={'left'}
            labelStyle={textPrimary}
        />

        <Checkbox
            style={mt2}
            label={'Checkbox'}
            value={checkbox}
            onChange={setCheckbox}
            labelStyle={textPrimary}
        />

        <Toggle
            style={mt2}
            label={'Toggle'}
            value={toggle}
            onChange={setToggle}
            labelStyle={textPrimary}
        />
    </Col1>
}

