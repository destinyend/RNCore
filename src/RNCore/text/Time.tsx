import {TextPrimary} from "./text";
import {EDate} from "../sugar/date";
import {flattenStyle} from "../component";

interface ITime {
    children?: string | null | undefined | number | EDate | Date
    style?: object | object[] | null | undefined
    showSeconds?: boolean
    onPress?: () => void
}

export default function (props: ITime) {
    let time
    if (props.children && typeof props.children === 'string') time = new EDate(props.children)
    else if (typeof props.children === 'number') time = new EDate(+props.children*1000)
    else if (props.children instanceof EDate) time = new EDate(props.children)
    else if (props.children instanceof Date) time = new EDate(props.children)

    const elProps = {onPress: props.onPress, style: flattenStyle(props.style)}
    const showSeconds = props.showSeconds === true
    if (time) return <TextPrimary {...elProps}>{time.isoTime(showSeconds)}</TextPrimary>
    if (showSeconds) return <TextPrimary {...elProps}>--:--:--</TextPrimary>
    return <TextPrimary {...elProps}>--:--</TextPrimary>
}
