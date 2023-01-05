import React from "react";
import {Col} from "../markup/markup";
import {tableHeader, tableHeaderFont} from "../../../styles/tables";
import {TStyle, TVoid} from "../../constants";

export interface ITHeaderCell {
    label: string
    onPress: TVoid | undefined
    style: TStyle
}
export default function (props: ITHeaderCell) {
    return <Col
        style={[tableHeader, props.style]}
        onPress={props.onPress}
        fontStyle={tableHeaderFont}
    >
        {props.label}
    </Col>
}
