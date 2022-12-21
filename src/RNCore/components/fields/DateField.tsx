import {Platform} from "react-native";
import {useState} from "react";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import DateTimePicker from '@react-native-community/datetimepicker'
import {DatePickerModal} from 'react-native-paper-dates';
import Date from "../text/Date"
import Label from "./Label";
import {BtnPrimary} from "../buttons/Btn";
import {IField} from "./InputField";
import {EDate} from "../../sugar/date";
import {stickLeft, stickRight} from "../../../styles/margins";
import {field} from "../../../styles/fields";


interface IDateField extends Omit<IField, 'value' | 'onChange'>{
    value?: string
    onChange?: (date: string) => void
    useButtons?: boolean
    isOpen?: boolean
    showYear?: boolean
}

export default function DateField(props: IDateField) {
    const [open, setOpen] = useState(!!props.isOpen)
    if (props.visible === false) return null

    const value = props.value ? new EDate(props.value) : new EDate()

    function onChange(value: any) {
        if (props.onChange) props.onChange(new EDate(value).isoDate())
        setOpen(false)
    }

    function changeDay(value: number) {
        const date: EDate = props.value ? new EDate(props.value) : new EDate()
        date.change({days: value})
        // @ts-ignore
        props.onChange(date.isoDate())
    }
    return <Label
        labelStyle={props.labelStyle}
        labelPosition={props.labelPosition}
        style={props.style}
        label={props.label}
    >
        <BtnPrimary
            visible={props.visible === true}
            icon={faChevronLeft}
            onPress={() => changeDay(-1)}
            style={stickRight}
        />
        <Date
            onPress={() => setOpen(true)}
            style={field}
            showYear={props.showYear}
        >
            {props.value}
        </Date>
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
            onPress={() => changeDay(1)}
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
        return <DatePickerModal
            locale="ru"
            mode="single"
            visible={props.open}
            onDismiss={() => props.setOpen(false)}
            // @ts-ignore
            date={props.value}
            onChange={params => props.onChange(String(params.date))}
            label={''}
            saveLabel=""
            onConfirm={() => props.setOpen(false)}
        />
    }
    return <DateTimePicker
        testID="dateTimePicker"
        // @ts-ignore
        value={props.value}
        mode={'date'}
        display="default"
        onChange={(event, newDate) => props.onChange(String(newDate))}
    />
}
