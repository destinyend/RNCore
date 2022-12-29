import {Col, Col1, Row, Row1} from "../RNCore/components/markup/markup";
import {TextPrimary} from "../RNCore/components/text/text";
import {H4, H6} from "../RNCore/components/text/headers";
import React from "react";
import TextField from "../RNCore/components/fields/TextField";
import {ml2, ml5, mt1, mt2, stick, stickBottom, stickLeft, stickRight, stickTop} from "../styles/margins";
import {
    jStart,
    jEnd,
    jCenter,
    jEvenly,
    jAround,
    jBetween,
    aStretch,
    aStart,
    aEnd,
    aCenter,
    aBaseline
} from "../styles/markups";
import {BtnDanger, BtnPrimary} from "../RNCore/components/buttons/Btn";
import {faSmile} from "@fortawesome/free-solid-svg-icons";
import {fixHeight, fixWidth} from "../styles/sizes";
import {bgSecondary, bgSecondaryLight} from "../styles/colors";

export default function () {
    const justify = [
        {style: jStart, label: 'jStart'},
        {style: jEnd, label: 'jEnd'},
        {style: jCenter, label: 'jCenter'},
        {style: jEvenly, label: 'jEvenly'},
        {style: jAround, label: 'jAround'},
        {style: jBetween, label: 'jBetween'},
    ]

    const align = [
        {style: aStretch, label: 'aStretch'},
        {style: aStart, label: 'aStart'},
        {style: aEnd, label: 'aEnd'},
        {style: aCenter, label: 'aCenter'},
        {style: aBaseline, label: 'aBaseline'}
    ]

    return <Col1>
        <H4>прилипание: style=stick...</H4>
        <Row style={mt1}>
            <TextField placeholder={'stickRight'} style={stickRight}/>
            <TextField placeholder={'stick'} style={stick}/>
            <TextField placeholder={'stickLeft'} style={stickLeft}/>
        </Row>
        <Col style={mt1}>
            <TextField placeholder={'stickBottom'} style={stickBottom}/>
            <TextField placeholder={'stick'} style={stick}/>
            <TextField placeholder={'stickTop'} style={stickTop}/>
        </Col>

        <H4 style={mt2}>выравнивание:</H4>
        <Row1>
            <Col>
                <H6>Row</H6>
                <Col1>
                    {justify.map(({label, style}, key) => {
                        return <Col1>
                            <TextPrimary>{label}</TextPrimary>
                            <Row style={[fixWidth(200), bgSecondaryLight, style]}>
                                <BtnDanger icon={faSmile}/>
                                <BtnDanger icon={faSmile}/>
                                <BtnDanger icon={faSmile}/>
                            </Row>
                        </Col1>
                    })}
                </Col1>
            </Col>
            <Col style={ml5}>
                <H6>Col</H6>
                <Col1>
                    {justify.map(({label, style}, key) => {
                        return <Col1>
                            <TextPrimary>{label}</TextPrimary>
                            <Col1 style={[fixWidth(200), fixHeight(100), bgSecondaryLight, style]}>
                                <BtnDanger icon={faSmile}/>
                                <BtnDanger icon={faSmile}/>
                                <BtnDanger icon={faSmile}/>
                            </Col1>
                        </Col1>
                    })}
                </Col1>
            </Col>

            <Col style={ml5}>
                <H6>Row</H6>
                <Col1>
                    {align.map(({label, style}, key) => {
                        return <Col1>
                            <TextPrimary>{label}</TextPrimary>
                            <Row style={[fixWidth(200), bgSecondaryLight, style]}>
                                <BtnDanger icon={faSmile}/>
                                <BtnDanger icon={faSmile}/>
                                <BtnDanger icon={faSmile}/>
                            </Row>
                        </Col1>
                    })}
                </Col1>
            </Col>
            <Col style={ml5}>
                <H6>Col</H6>
                <Col1>
                    {align.map(({label, style}, key) => {
                        return <Col1>
                            <TextPrimary>{label}</TextPrimary>
                            <Col1 style={[fixWidth(200), fixHeight(100), bgSecondaryLight, style]}>
                                <BtnDanger icon={faSmile}/>
                                <BtnDanger icon={faSmile}/>
                                <BtnDanger icon={faSmile}/>
                            </Col1>
                        </Col1>
                    })}
                </Col1>
            </Col>
        </Row1>
    </Col1>
}
