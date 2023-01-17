import {Col} from "../markup/markup";
import {cellBorder} from "../../../styles/tables";
import {TStyle} from "../../constants";
import TValue, {ITValue} from "./TValue";
import React from "react";
import {flex1} from "../../../styles/markups";
import {noRadius} from "../../../styles/borders";

export interface ITCell extends ITValue {
    style: TStyle
}
export default function (props: ITCell) {
    const {style, ...valueProps} = props
    return <Col style={[flex1, cellBorder, style, noRadius]}>
        <TValue {...valueProps}/>
    </Col>
}
