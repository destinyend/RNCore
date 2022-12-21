import {mr1, mt5, mv2} from "../styles/margins";
import {useState} from "react";
import {Col1, Row} from "../RNCore/components/markup/markup";
import {H1, H3} from "../RNCore/components/text/headers";
import {BtnDanger, BtnPrimary, BtnSecondary, BtnSuccess, BtnWarning} from "../RNCore/components/buttons/Btn";
import {TextPrimary} from "../RNCore/components/text/text";
import {BtnTimer} from "../RNCore/components/buttons/BtnTimer";
import BtnToggle from "../RNCore/components/buttons/BtnToggle";
import BtnRemove from "../RNCore/components/buttons/BtnRemove";


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
