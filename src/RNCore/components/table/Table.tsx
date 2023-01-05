import {Col, Col1, Row1} from "../markup/markup";
import {tableHeader, tableHeaderFont, tableSelector, tableTitle} from "../../../styles/tables";
import {RNText} from "../text/text";
import React, {useState} from "react";
import {pointer} from "../../../styles/cursors";
import THeaderCell from "./THeaderCell";
import TRow from "./TRow";
import TextField from "../fields/TextField";
import Checkbox from "../fields/Checkbox";
import Creator, {IField} from "../complex/Creator";
import Remover from "../complex/Remover";
import {ITValue, TCell} from "./TValue";

export interface IItem {
    label: string
    value: string
}

export interface ITCol {
    label: string
    type: ITValue
    onChange?: (args: { id: string, value: any }) => void
    onRowClick?: (rowId: string) => void
    onHeaderClick?: (titleId: string) => void
    style?: object
    fieldName: string
    items?: IItem[]
}

export interface ITRow {
    id?: string
    style?: object
    cells: any[]
}

export interface ITable {
    visible?: boolean
    columns: ITCol[]
    data: ITRow[]
    headerStyle?: object
    remove?: (id: string | string[]) => void
    create?: (args: object) => void
    createFields?: IField[]
    title?: string
    sortable?: boolean
    filterBy?: string[]
    filterPlaceholder?: string
    filterType?: 'startsWith' | 'contains'
}

export default function (props: ITable) {
    const [sortBy, setSortBy] = useState('id')
    const [reverse, setReverse] = useState(false)
    const initialSelected: string[] = []
    const [selected, setSelected] = useState(initialSelected)
    const [filter, setFilter] = useState('')

    function onSelect(id: string) {
        const array = selected.slice()
        const i = array.indexOf(id)
        if (i === -1) array.push(id)
        else array.splice(i, 1)
        setSelected(array)
    }

    function remove() {
        if (!props.remove) return
        props.remove(selected)
        setSelected([])
    }

    function selectAll() {
        if (props.data.length === selected.length) setSelected([])
        else {
            const array = initialSelected.slice()
            for (let row of props.data) {
                //@ts-ignore
                array.push(row.id)
            }
            setSelected(array)
        }
    }

    if (reverse) { // @ts-ignore
        props.data.sort((a, b) => a[sortBy] < b[sortBy])
    } else { // @ts-ignore
        props.data.sort((a, b) => a[sortBy] > b[sortBy])
    }

    function filterRow(row: ITRow) {
        if (!props.filterBy || !filter) return true
        for (let field of props.filterBy) {
            for (let i = 0; i < props.columns.length; i++) {
                if (props.columns[i].fieldName === field) {
                    if (props.filterType === 'contains') return row.cells[i].includes(filter)
                    else return row.cells[i].startsWith(filter)
                }
            }
        }
    }

    return <Col1>
        <Row1>
            {!!props.remove && <Col style={tableSelector}>
                <Checkbox
                    value={props.data.length === selected.length}
                    onChange={selectAll}
                />
            </Col>}
            <TextField
                visible={!!props.filterBy}
                placeholder={props.filterPlaceholder || 'поиск'}
                onChange={setFilter}
            />
            {!!props.create && <Creator
                create={props.create}
                //@ts-ignore
                fields={props.createFields}
            />}
            {!!props.remove && <Remover
                onPress={remove}
            />}
        </Row1>
        <RNText
            visible={!!props.visible}
            style={tableTitle}
        >
            {props.title}
        </RNText>
        <Row1>
            {props.columns.map((column, key) => {
                function sort() {
                    if (column.fieldName === sortBy) setReverse(!reverse)
                    else setSortBy(column.fieldName)
                }

                let onPress = props.sortable ? sort : undefined
                return <THeaderCell
                    style={[tableHeader, props.headerStyle, column.style]}
                    label={column.label}
                    onPress={onPress}
                    key={key}
                />
            })}
        </Row1>
        {props.data.filter(filterRow).map(({id, style, cells}, key) => {
            const cursor = !props.columns[key]?.onRowClick ? {} : pointer
            return <TRow
                key={key}
                style={[style, cursor]}
                cells={cells}
                onSelect={id ? () => onSelect(id) : undefined}
                variants={[]}
                selected={id ? selected.includes(id) : false}
                types={props.columns.map((col, key) => col.type)}
            />
        })}
    </Col1>
}
