import {mb2, mh1, mr1, mt2, mt5, mv2, stick} from "../styles/margins";
import {useState} from "react";
import {Col1, Row} from "../RNCore/components/markup/markup";
import {H1, H3} from "../RNCore/components/text/headers";
import {BtnDanger, BtnPrimary, BtnSecondary, BtnSuccess, BtnWarning} from "../RNCore/components/buttons/Btn";
import {TextPrimary} from "../RNCore/components/text/text";
import {BtnTimer} from "../RNCore/components/buttons/BtnTimer";
import BtnToggle from "../RNCore/components/buttons/BtnToggle";
import {faCalendarWeek, faChevronLeft, faFaceAngry, faSearch, faTrash} from "@fortawesome/free-solid-svg-icons";


export default function () {
    const [active, setActive] = useState(false)
    return <Row>
        <Col1>
            <H1>типы кнопок:</H1>
            <H3 style={mv2}>простые:</H3>
            <Row>
                <BtnPrimary style={mr1} title={'BtnPrimary'}/>
                <BtnSecondary style={mr1} title={'BtnSecondary'}/>
                <BtnWarning style={mr1} title={'BtnWarning'}/>
                <BtnDanger style={mr1} title={'BtnDanger'}/>
                <BtnSuccess style={mr1} title={'BtnSuccess'}/>
            </Row>
            <H3 style={mt5}>магические:</H3>
            <Row style={mt2}>
                <TextPrimary>BtnTimer: </TextPrimary>
                <BtnTimer endMessage={'таймер завершен'} startSeconds={5} width={'field'}/>
            </Row>
            <Row style={mv2}>
                <TextPrimary>BtnToggle: </TextPrimary>
                <BtnToggle
                    active={active}
                    onPress={() => setActive(!active)}
                    title={active ? 'on' : 'off'}
                    width={'field'}
                />
            </Row>
            <H3 style={mt5}>с иконкой:</H3>
            <Row style={mt2}>
                <BtnPrimary style={[mh1]} icon={faSearch}/>
                <BtnSecondary style={mh1} icon={faChevronLeft}/>
                <BtnWarning style={mh1} icon={faFaceAngry}/>
                <BtnDanger style={mh1} icon={faTrash}/>
                <BtnSuccess style={mh1} icon={faCalendarWeek}/>
            </Row>
        </Col1>
        <Col1>
            <H1 style={mb2}>размеры:</H1>
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
