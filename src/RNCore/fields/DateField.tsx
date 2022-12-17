import {Platform, Text, View, TouchableOpacity} from "react-native";
import {useState} from "react";
import {faCalendar, faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import DateTimePicker from '@react-native-community/datetimepicker'
import {DatePickerModal} from 'react-native-paper-dates';
import Date from "../text/Date"
import {EDate} from "../sugar/date";
import {field, TLabelPosition} from "../../styles/fields";
import {flattenStyle} from "../component";
import {bgDanger} from "../../styles/colors";
import {fRow, jStart} from "../../styles/markups";
import {TextPrimary} from "../text/text";
import {textPrimary} from "../../styles/text";
import Label from "./Label";


interface IDateField {
    value?: string
    onChange?: (date: string) => void
    useButtons?: boolean
    editable?: boolean
    style?: object | object[] | null | undefined
    visible?: boolean
    isOpen?: boolean
    showYear?: boolean
    label?: string
    labelPosition?: TLabelPosition
    labelStyle?: object
}

export default function DateField(props: IDateField) {
    const [open, setOpen] = useState(!!props.isOpen)
    if (props.visible === false) return null

    const value = props.value ? new EDate(props.value) : new EDate()

    function onChange(value: any) {
        if (props.onChange) props.onChange(new EDate(value).isoDate())
        setOpen(false)
    }
    console.log(props.value)
    return <Label
        labelStyle={props.labelStyle}
        labelPosition={props.labelPosition}
        style={props.style}
        label={props.label}
    >
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
        onChange={(event, newDate) => props.onChange(newDate)}
    />
}

//
// function EnableDate({isOpen, displayMode, useButtons, weekdayMode, date, empty, showYear, onChange, style}) {
//
//
//     function onChangeDate(newDate) {
//         setOpen(false)
//         if (newDate) onChange(new EDate(newDate))
//     }
//
//     return <View>
//         <ButtonMode visible={displayMode === 'button'} style={style} onPress={() => setOpen(true)}/>
//         <Col visible={displayMode === 'normal'} style={[flex, fRow]}>
//             <ChangeDateBtn
//                 title={faChevronLeft}
//                 visible={useButtons}
//                 onChange={onChange}
//                 days={-1}
//                 date={date}
//                 style={stickRight}
//             />
//
//             <TouchableOpacity
//                 style={[
//                     useButtons ? borderTable : getBorderStyle(style),
//                     {
//                         backgroundColor: field.backgroundColor,
//                     },
//                     jCenter,
//                     center,
//                     flex,
//                 ]}
//                 onPress={() => setOpen(true)}
//             >
//                 <DisabledDate
//                     style={style}
//                     date={date}
//                     empty={empty}
//                     showYear={showYear}
//                     weekdayMode={weekdayMode}
//                 />
//             </TouchableOpacity>
//
//             <ChangeDateBtn
//                 title={faChevronRight}
//                 visible={useButtons}
//                 onChange={onChange}
//                 days={1}
//                 date={date}
//                 style={stickLeft}
//             />
//         </Col>
//
//     </View>
// }
//
// function DisabledDate({weekdayMode, date, showYear, empty, style}) {
//     return <Text style={[ph1, getTextStyle(style)]}>
//         {date ? date.ruDate(showYear) : empty}
//         {weekdayMode ?
//             date ? " " + date.weekDay(weekdayMode === 'short') : '--'
//             :
//             null
//         }
//     </Text>
// }

// function ButtonMode({onPress, style, visible}) {
//     if (!visible) return null
//     return <BtnSecondary
//         style={[{maxWidth: 45, minWidth: 45, width: 45}, style]}
//         onPress={onPress}
//         title={faCalendar}
//     />
// }
//
// function ChangeDateBtn({visible, date, onChange, days, title, style}) {
//     if (!visible) return null
//     return <BtnSecondary
//         style={style}
//         title={title}
//         onPress={() => {
//             let newDate = date ? date.copy() : new EDate()
//             newDate.change({days})
//             onChange(newDate)
//         }}
//     />
// }
