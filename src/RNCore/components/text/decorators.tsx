import {IText, TextPrimary} from "./text";
import {numberWithSpaces} from "../../sugar/number";

interface INumber extends IText {
    decimal?: number
}

export function Rub({visible = true, children, style = {}, decimal = 2}: INumber) {
    if (!visible) return null
    const str = numberWithSpaces(children, decimal) + ' ₽'
    return <TextPrimary style={style}>{str}</TextPrimary>
}

export function Percent({visible = true, children, style = {}, decimal = 2}: INumber) {
    if (!visible) return null
    const str = numberWithSpaces(children, decimal) + ' %'
    return <TextPrimary style={style}>{str}</TextPrimary>
}

export function Number({visible = true, children, style = {}, decimal = 2}: INumber) {
    if (!visible) return null
    return <TextPrimary style={style}>{numberWithSpaces(children, decimal)}</TextPrimary>
}
