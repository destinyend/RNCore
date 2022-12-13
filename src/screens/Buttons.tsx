import {Col, Col1, Row} from "../RNCore/markup/markup";
import {BtnDanger, BtnPrimary, BtnSecondary, BtnSuccess, BtnWarning} from "../RNCore/buttons/Btn";
import {BtnTimer} from "../RNCore/buttons/BtnTimer";
import {mr1, mt2, mt5, mv2} from "../styles/margins";
import {H1, H2, H3} from "../RNCore/text/headers";
import {TextPrimary} from "../RNCore/text/text";
import BtnToggle from "../RNCore/buttons/BtnToggle";
import {useState} from "react";
import BtnRemove from "../RNCore/buttons/BtnRemove";

export default function () {
    const [active, setActive] = useState(false)
    return <Row>
        <Col1>
            <H1>типы кнопок:</H1>
            <H3>простые:</H3>
            <Row>
                <BtnPrimary style={mr1} title={'BtnPrimary'}/>
                <BtnSecondary style={mr1} title={'BtnSecondary'}/>
                <BtnWarning style={mr1} title={'BtnWarning'}/>
                <BtnDanger style={mr1} title={'BtnDanger'}/>
                <BtnSuccess style={mr1} title={'BtnSuccess'}/>
            </Row>
            <H3 style={mt5}>магические:</H3>
            <Row>
                <TextPrimary>BtnTimer: </TextPrimary>
                <BtnTimer endMessage={'таймер завершен'} startSeconds={5} width={'field'}/>
            </Row>
            <Row style={mv2}>
                <TextPrimary>BtnToggle: </TextPrimary>
                <BtnToggle
                    active={active}
                    onPress={() => setActive(!active)}
                    title={active ? 'on': 'off'}
                    width={'field'}
                />
            </Row>
            <Row>
                <TextPrimary>BtnRemove: </TextPrimary>
                <BtnRemove/>
            </Row>
        </Col1>
        <Col1>
            <H1>Размеры:</H1>
            <Row>
                <TextPrimary>{`width={"auto"}`}</TextPrimary>
                <BtnPrimary title={'кнопка'}/>
            </Row>
            <Row style={mv2}>
                <TextPrimary>{`width={"field"}`}</TextPrimary>
                <BtnPrimary title={'кнопка'} width={'field'}/>
            </Row>
            <Row>
                <TextPrimary>{`width={"flex"}`}</TextPrimary>
                <BtnPrimary title={'кнопка'} width={'flex'}/>
            </Row>
        </Col1>
    </Row>
}
