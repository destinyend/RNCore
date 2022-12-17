import {Col, Col1, Col3, Row, Row1, Row2, Row3} from "../RNCore/markup/markup";
import {bgDanger, bgSecondaryLight, bgSuccess, bgWarning, danger} from "../styles/colors";
import {fixHeight, fixWidth} from "../styles/sizes";
import {m1} from "../styles/margins";
import {aCenter, jCenter} from "../styles/markups";


export default function (): JSX.Element {
    return <Row1>
        <Col style={[fixHeight(300), fixWidth(400), m1]}>
            <Row style={[bgSecondaryLight, jCenter, aCenter]}>Row</Row>
            <Row1 style={[bgDanger, jCenter, aCenter]}>Row1</Row1>
            <Row2 style={[bgWarning, jCenter, aCenter]}>Row2</Row2>
            <Row3 style={[bgSuccess, jCenter, aCenter]}>Row3</Row3>
        </Col>
        <Row style={[fixHeight(300), fixWidth(400), m1]}>
            <Col1 style={[bgDanger, jCenter, aCenter]}>Col1</Col1>
            <Col1 style={[bgWarning, jCenter, aCenter]}>Col2</Col1>
            <Col3 style={[bgSuccess, jCenter, aCenter]}>Col3</Col3>
            <Col style={[bgSecondaryLight, jCenter, aCenter]}>Col</Col>
        </Row>
    </Row1>
}

