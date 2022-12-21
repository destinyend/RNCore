import {useState} from "react";
import {IconDefinition} from "@fortawesome/fontawesome-common-types";
import Select, {IItem} from "../fields/Select";
import {stick, stickBottom, stickLeft, stickRight, stickTop} from "../../../styles/margins";
import TextField from "../fields/TextField";
import DateField from "../fields/DateField";
import NumberField from "../fields/NumberField";
import {Col, Row} from "../markup/markup";
import {flattenStyle} from "../component";
import {danger} from "../../../styles/colors";
import {jEnd} from "../../../styles/markups";
import {TextPrimary} from "../text/text";
import {BtnPrimary} from "../buttons/Btn";


export interface IField {
    label?: string
    placeholder?: string
    field: string
    required?: boolean
    type: 'number' | 'text' | 'date' | 'select'
    value: any
    items?: IItem[]
}

export interface ICreator {
    visible?: boolean
    create: (args: any) => void
    fields: IField[]
    vertical?: boolean
    style?: object
    title?: string
    icon?: IconDefinition | null
    error?: string
}


export default function (props: ICreator): JSX.Element | null {
    const initialState = {}
    for (const field of props.fields) {
        // @ts-ignore
        initialState[field.field] = field.value
    }
    const [state, setState] = useState(initialState)
    const [_error, setError] = useState(props.error)
    if (!props.visible) return null

    function onPress() {
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
        if (props.vertical) {
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
            style: stickStyle
        }
        switch (field.type) {
            case 'number':
                return <NumberField{...fieldProps} onChange={value => updateState({[field.field]: +value})}/>
            case 'text':
                return <TextField{...props} onChange={value => updateState({[field.field]: value})}/>
            case 'date':
                return <DateField{...props} onChange={value => updateState({[field.field]: value})}/>
            case 'select':
                return <Select
                    // @ts-ignore
                    items={field.items}
                    {...props}
                    onChange={value => updateState({[field.field]: value})}
                />
            default:
                return null
        }
    })
    if (props.vertical) {
        return <Col style={flattenStyle([jEnd, props.style])}>
            {components}
            <TextPrimary visible={props.vertical} style={danger}>{_error}</TextPrimary>
            <BtnPrimary
                icon={props.icon}
                title={props.title}
                onPress={onPress}
                width={'field'}
                style={stickTop}
            />
        </Col>
    }
    return <Col style={{...props.style}}>
        <Row>
            {components}
            <BtnPrimary icon={props.icon} title={props.title} onPress={onPress} style={stickLeft}/>
        </Row>
        <TextPrimary visible={props.vertical} style={danger}>{_error}</TextPrimary>
    </Col>
}
