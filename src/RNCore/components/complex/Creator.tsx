import {useState} from "react";
import {IconDefinition} from "@fortawesome/fontawesome-common-types";
import Select, {IVariant} from "../fields/Select";
import {stick, stickBottom, stickLeft, stickRight, stickTop} from "../../../styles/margins";
import TextField from "../fields/TextField";
import DateField from "../fields/DateField";
import NumberField from "../fields/NumberField";
import {Col, Row} from "../markup/markup";
import {flattenStyle} from "../component";
import {danger} from "../../../styles/colors";
import {jEnd} from "../../../styles/markups";
import {TextDanger, TextPrimary, TextWarning} from "../text/text";
import {BtnPrimary} from "../buttons/Btn";
import {TLabelPosition} from "../../../styles/fields";
import Checkbox from "../fields/Checkbox";
import Toggle from "../fields/Toggle";
import {faPlus} from "@fortawesome/free-solid-svg-icons";


export interface IField {
    label?: string
    placeholder?: string
    field: string
    required?: boolean
    type: 'number' | 'text' | 'date' | 'select' | 'toggle' | 'checkbox'
    value?: any
    items?: IVariant[]
}

export interface ICreator {
    visible?: boolean
    create?: (args: any) => void
    fields: IField[]
    vertical?: boolean
    style?: object
    title?: string
    icon?: IconDefinition | null
    error?: string
    labelPosition?: TLabelPosition
}

export function getInitialFieldState(fields: IField[]) {
    let initialState = {}
    for (const field of fields) {
        // @ts-ignore
        initialState[field.field] = field.value
    }
    return initialState
}

export default function (props: ICreator): JSX.Element | null {
    const initialState = getInitialFieldState(props.fields)
    const [state, setState] = useState(initialState)
    const [_error, setError] = useState(props.error)
    if (props.visible === false) return null

    function onPress() {
        if (!props.create) return
        const required = []
        for (const filed of props.fields) {
            // @ts-ignore
            if (!!filed.required && !state[filed.field]) {
                if (filed.label) required.push(filed.label)
                else if (filed.placeholder) required.push(filed.placeholder)
                else required.push(filed.field)
            }
        }
        if (required.length) {
            setError("Заполните: " + required.join(', '))
        } else {
            // @ts-ignore
            props.create(state)
            setState(initialState)
            setError('')
        }
    }

    function updateState(args: object) {
        setState({...state, ...args})
    }

    const components = props.fields.map((field, key) => {
        let stickStyle: object
        if (props.vertical === true) {
            if (key) stickStyle = stick
            else stickStyle = stickBottom
        } else {
            if (key) stickStyle = stick
            else stickStyle = stickRight
        }
        const fieldProps = {
            key,
            label: field.label,
            // @ts-ignore
            value: state[field.field],
            placeholder: field.placeholder,
            style: stickStyle,
            labelPosition: props.labelPosition
        }

        switch (field.type) {
            case 'number':
                return <NumberField{...fieldProps} onChange={value => updateState({[field.field]: +value})}/>
            case 'text':
                return <TextField{...fieldProps} onChange={value => updateState({[field.field]: value})}/>
            case 'date':
                return <DateField{...fieldProps} onChange={value => updateState({[field.field]: value})}/>
            case 'select':
                return <Select
                    // @ts-ignore
                    items={field.items}
                    {...fieldProps}
                    onChange={value => updateState({[field.field]: value})}
                />
            case 'checkbox':
                // @ts-ignore
                return <Checkbox {...fieldProps} onChange={value => updateState({[field.field]: value})}/>
            case 'toggle':
                // @ts-ignore
                return <Toggle {...fieldProps} onChange={value => updateState({[field.field]: value})}/>
            default:
                return null
        }
    })

    if (props.vertical) {
        return <Col style={flattenStyle([jEnd, props.style])}>
            {components}
            <TextWarning visible={!!_error}>{_error}</TextWarning>
            <BtnPrimary
                icon={props.icon || faPlus}
                title={props.title}
                onPress={onPress}
                width={'field'}
                style={stickTop}
            />
        </Col>
    }
    return <Col>
        <Row style={flattenStyle(props.style)}>
            {components}
            <BtnPrimary icon={props.icon || faPlus} title={props.title} onPress={onPress} style={stickLeft}/>
        </Row>
        <TextWarning visible={!!_error} style={danger}>{_error}</TextWarning>
    </Col>
}
