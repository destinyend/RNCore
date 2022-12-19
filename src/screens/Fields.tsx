import {Col, Col1, Col3, Row, Row1, Row2, Row3} from "../RNCore/markup/markup";
import {NumberFiled, TextField} from "../RNCore/fields/TextField";
import {useState} from "react";
import Select from "../RNCore/fields/Select";
import {mt1, mt2} from "../styles/margins";
import DateField from "../RNCore/fields/DateField";
import {textPrimary} from "../styles/text";


export default function (): JSX.Element {
    const [num, setNum] = useState(0)
    const [date, setDate] = useState('')
    const [selected, setSelected] = useState('0')
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

        <NumberFiled
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
    </Col1>
}

