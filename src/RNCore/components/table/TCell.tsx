import {Col} from "../markup/markup";
import {tableCell} from "../../../styles/tables";
import {TStyle} from "../../constants";
import TValue, {ITValue} from "./TValue";
import React from "react";

export interface ITCell extends ITValue {
    style: TStyle
}
export default function (props: ITCell) {
    const {style, ...valueProps} = props
    return <Col style={[tableCell, style]}>
        <TValue {...valueProps}/>
    </Col>
}
