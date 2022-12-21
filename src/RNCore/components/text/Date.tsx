import {TextPrimary} from "./text";
import {flattenStyle} from "../component";
import {EDate} from "../../sugar/date";

interface IDate {
    children?: string | null | undefined | number | EDate | Date
    style?: object | object[] | null | undefined
    showYear?: boolean
    onPress?: () => void
}

export default function (props: IDate) {
    let date
    if (props.children && typeof props.children === 'string') date = new EDate(props.children)
    else if (typeof props.children === 'number') date = new EDate(+props.children*1000)
    else if (props.children instanceof EDate) date = new EDate(props.children)
    else if (props.children instanceof Date) date = new EDate(props.children)

    const elProps = {onPress: props.onPress, style: flattenStyle(props.style)}
    const showYear = props.showYear !== false
    if (date) return <TextPrimary {...elProps}>{date.ruDate(showYear)}</TextPrimary>
    if (showYear) return <TextPrimary {...elProps}>--.--.----</TextPrimary>
    return <TextPrimary {...elProps}>--.--</TextPrimary>
}
