import {Col1, Row, Row1} from "../RNCore/components/markup/markup";
import Label from "../RNCore/components/fields/Label";
import {Number, Percent, Rub} from "../RNCore/components/text/decorators";
import {m1, mt2, p1} from "../styles/margins";
import {H1, H2, H6, H4, H5, H3} from "../RNCore/components/text/headers";
import React from "react";
import {TextDanger, TextPrimary, TextSecondary, TextSuccess, TextWarning} from "../RNCore/components/text/text";

export default function () {
    return <Col1>
        <Row1 style={mt2}>
            <H1 style={m1}>H1</H1>
            <H2 style={m1}>H2</H2>
            <H3 style={m1}>H3</H3>
            <H4 style={m1}>H4</H4>
            <H5 style={m1}>H5</H5>
            <H6 style={m1}>H6</H6>
        </Row1>
        <Row1 style={mt2}>
            <TextPrimary style={m1}>TextPrimary</TextPrimary>
            <TextSecondary style={m1}>TextSecondary</TextSecondary>
            <TextWarning style={m1}>TextWarning</TextWarning>
            <TextDanger style={m1}>TextDanger</TextDanger>
            <TextSuccess style={m1}>TextSuccess</TextSuccess>
        </Row1>
        <Row1 style={mt2}>
            <Label style={m1} label={'Rub'}>
                <Rub>1000</Rub>
            </Label>
            <Label style={m1} label={'Number'}>
                <Number>1000</Number>
            </Label>
            <Label style={m1} label={'Percent'}>
                <Percent>10</Percent>
            </Label>
        </Row1>
    </Col1>
}
