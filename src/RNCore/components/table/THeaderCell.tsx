import React from "react";
import {Col} from "../markup/markup";
import {headerCellBorder, headerFont} from "../../../styles/tables";
import {TStyle, TVoid} from "../../constants";
import {flex1, jCenter} from "../../../styles/markups";

export interface ITHeaderCell {
    label: string
    onPress: TVoid | undefined
    style: TStyle
}
export default function (props: ITHeaderCell) {
    return <Col
        style={[flex1, jCenter, headerCellBorder, props.style]}
        onPress={props.onPress}
        fontStyle={[jCenter, headerFont]}
    >
        {props.label}
    </Col>
}
