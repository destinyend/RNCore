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
import {getInitialFieldState, IField} from "./Creator";


export interface IChanger {
    visible?: boolean
    change?: (args: any) => void
    fields: IField[]
    vertical?: boolean
    style?: object
    error?: string
    labelPosition?: TLabelPosition
    id?: string
}


export default function (props: IChanger): JSX.Element | null {
    const initialState = getInitialFieldState(props.fields)
    const [state, setState] = useState(initialState)
    const [_error, setError] = useState(props.error)
    if (props.visible === false) return null

    function onBlur(key: string) {
        if (!props.change) return
        for (let field of props.fields) {
            if (field.field === key) {
                // @ts-ignore
                if (field.required && !state[key]) setError(`"${field.label}" не может быть пустым`)
                else {
                    setError('')
                    // @ts-ignore
                    props.change({id: props.id, [key]: state[key]})
                }
                return;
            }
        }
    }

    function updateState(args: object) {
        setState({...state, ...args})
    }

    const components = props.fields.map((field, key) => {
        let stickStyle: object
        if (props.vertical === true) {
            if (!key) stickStyle = stickBottom
            else if (key === props.fields.length - 1) stickStyle = stickTop
            else stickStyle = stick
        } else {
            if (!key) stickStyle = stickRight
            else if (key === props.fields.length - 1) stickStyle = stickLeft
            else stickStyle = stick
        }

        const fieldProps = {
            key,
            label: field.label,
            // @ts-ignore
            value: state[field.field],
            placeholder: field.placeholder,
            style: stickStyle,
            labelPosition: props.labelPosition,
            onBlur: () => onBlur(field.field)
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
        </Col>
    }
    return <Col>
        <Row style={flattenStyle(props.style)}>
            {components}
        </Row>
        <TextWarning visible={!!_error} style={danger}>{_error}</TextWarning>
    </Col>
}
