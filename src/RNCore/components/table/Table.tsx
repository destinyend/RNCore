import {Col, Col1, Row1} from "../markup/markup";
import {
    tableBorder,
    tableCheckbox,
    headerBorder,
    headerHeight,
    headerFont,
    headerBackground,
    rowHeight,
    rowBorder,
    rowNotEvenBG,
    rowEvenBG,
    title, headerCellBorder
} from "../../../styles/tables";
import {RNText} from "../text/text";
import React, {useState} from "react";
import {pointer} from "../../../styles/cursors";
import THeaderCell from "./THeaderCell";
import TRow, {ITRow} from "./TRow";
import TextField from "../fields/TextField";
import Checkbox from "../fields/Checkbox";
import Creator, {IField} from "../complex/Creator";
import Remover from "../complex/Remover";
import {TCellKind} from "./TValue";
import {flattenStyle} from "../component";
import {TStyle} from "../../constants";
import {flex1} from "../../../styles/markups";

export interface IItem {
    label: string
    value: string
}

export interface ITCol {
    label: string
    type: TCellKind
    onChange?: (args: { id: string, value: any }) => void
    onRowClick?: (rowId: string) => void
    onHeaderClick?: (titleId: string) => void
    style?: object
    fieldName: string
    items?: IItem[]
}

export interface ITable {
    visible?: boolean
    columns: ITCol[]
    data: ITRow[]
    headerStyle?: TStyle
    style?: TStyle
    remove?: (id: string | string[]) => void
    create?: (args: object) => void
    createFields?: IField[]
    title?: string
    sortBy?: string[]
    filterBy?: string[]
    filterPlaceholder?: string
    filterType?: 'startsWith' | 'contains'
}

export default function (props: ITable) {
    const [sortBy, setSortBy] = useState(0)
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

    if (reverse) {//@ts-ignore
        props.data.sort((a, b) => a.cells[sortBy] < b.cells[sortBy] ? 1: -1)
    } else {//@ts-ignore
        props.data.sort((a, b) => a.cells[sortBy] > b.cells[sortBy] ? 1: -1)
    }

    function filterRow(row: ITRow) {
        if (!props.filterBy || !filter) return true
        for (let field of props.filterBy) {
            for (let i = 0; i < props.columns.length; i++) {
                if (props.columns[i].fieldName === field) {
                    if (props.filterType === 'contains') { // @ts-ignore
                        return row.cells[i].includes(filter)
                    }
                    else { // @ts-ignore
                        return row.cells[i].startsWith(filter)
                    }
                }
            }
        }
    }

    return <Col1 style={[tableBorder, props.style]}>
        <Row1>
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
            {(!!props.remove && !!selected.length) && <Remover
                onPress={remove}
            />}
        </Row1>
        <RNText
            visible={!!props.visible}
            style={title}
        >
            {props.title}
        </RNText>
        <Row1 style={[flex1, headerBorder, headerBackground, headerHeight, props.headerStyle]}>
            {!!props.remove && <Col style={tableCheckbox}>
                <Checkbox
                    value={props.data.length === selected.length}
                    onChange={selectAll}
                />
            </Col>}
            {props.columns.map((column, key) => {
                function sort() {
                    if (key === sortBy) setReverse(!reverse)
                    else setSortBy(key)
                }

                let onPress
                if (props.sortBy?.length && props.sortBy.includes(column.fieldName)) onPress = sort
                return <THeaderCell
                    style={[column.style, key && key!== props.columns.length-1 ? headerCellBorder : null]}
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
                style={[flex1, rowBorder, rowHeight, key % 2 ? rowEvenBG : rowNotEvenBG, style, cursor]}
                cells={cells}
                onSelect={id && !!props.remove ? () => onSelect(id) : undefined}
                variants={[]}
                selected={id ? selected.includes(id) : false}
                // @ts-ignore
                types={props.columns.map((col, key) => col.type)}
            />
        })}
    </Col1>
}
