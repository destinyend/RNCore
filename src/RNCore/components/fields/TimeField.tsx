import {Platform} from "react-native";
import {useState} from "react";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import DateTimePicker from '@react-native-community/datetimepicker'
import {TimePickerModal} from 'react-native-paper-dates';
import Label from "./Label";
import {BtnPrimary} from "../buttons/Btn";
import Time from "../text/Time";
import {getFieldStyle, IField} from "./InputField";
import {stickLeft, stickRight} from "../../../styles/margins";
import {field} from "../../../styles/fields";
import {EDate} from "../../sugar/date";
import {flattenStyle} from "../component";


interface ITimeField extends Omit<IField, 'value' | 'onChange'> {
    value?: string
    onChange?: (date: string) => void
    useButtons?: boolean
    isOpen?: boolean
    showSeconds?: boolean
}

export default function TimeField(props: ITimeField) {
    const [open, setOpen] = useState(!!props.isOpen)
    if (props.visible === false) return null

    const value = props.value ? new EDate(props.value) : new EDate()

    function onChange(value: any) {
        if (props.onChange) props.onChange(new EDate(value).isoTime(props.showSeconds === true))
        setOpen(false)
    }

    function changeTime(minutes: number) {
        value.change({minutes})
        // @ts-ignore
        props.onChange(date.isoTime(props.showSeconds === true))
    }
    const filedStyle = getFieldStyle(props.style)
    return <Label
        labelStyle={props.labelStyle}
        labelPosition={props.labelPosition}
        style={props.style}
        label={props.label}
    >
        <BtnPrimary
            visible={props.visible === true}
            icon={faChevronLeft}
            onPress={() => changeTime(-1)}
            style={stickRight}
        />
        <Time
            onPress={() => setOpen(true)}
            style={flattenStyle([filedStyle, field])}
            showSeconds={props.showSeconds}
        >
            {props.value}
        </Time>
        <Picker
            value={value}
            onChange={onChange}
            setOpen={setOpen}
            open={open}
        />
        <BtnPrimary
            visible={props.visible === true}
            icon={faChevronRight}
            style={stickLeft}
            onPress={() => changeTime(1)}
        />
    </Label>
}

interface IPicker {
    open: boolean
    setOpen: (value: boolean) => void
    value: EDate
    onChange: (value: string) => void
}

function Picker(props: IPicker) {
    if (!props.open) return null
    if (Platform.OS === 'web') {
        return <TimePickerModal
            locale="ru"
            visible={props.open}
            onDismiss={() => props.setOpen(false)}
            // @ts-ignore
            date={props.value}
            onChange={(params: { toString: () => any; }) => props.onChange(String(params.toString()))}
            label={''}
            saveLabel=""
            onConfirm={() => props.setOpen(false)}
        />
    }
    return <DateTimePicker
        testID="dateTimePicker"
        // @ts-ignore
        value={props.value}
        mode={'time'}
        display="default"
        onChange={(event, newDate) => props.onChange(String(newDate))}
    />
}
