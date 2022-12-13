import {Col, Col1, Col3, Row, Row1, Row2, Row3} from "../RNCore/markup/markup";
import {bgDanger, bgPrimary, bgSecondary, bgSecondaryLight, bgSuccess, bgWarning, danger} from "../styles/colors";
import {fixHeight, fixWidth} from "../styles/sizes";
import {flattenStyle} from "../RNCore/component";
import {m1} from "../styles/margins";
import {aCenterMiddle} from "../styles/markups";
import {TextPrimary} from "../RNCore/text/text";

export default function (): JSX.Element {
    return <Row1>
        <Col style={[fixHeight(300), fixWidth(400), m1]}>
            <Row style={[bgSecondaryLight, aCenterMiddle]}>Row</Row>
            <Row1 style={[bgDanger, aCenterMiddle]}>Row1</Row1>
            <Row2 style={[bgWarning, aCenterMiddle]}>Row2</Row2>
            <Row3 style={[bgSuccess, aCenterMiddle]}>Row3</Row3>
        </Col>
        <Row style={[fixHeight(300), fixWidth(400), m1]}>
            <Col1 style={[bgDanger, aCenterMiddle]}>Col1</Col1>
            <Col1 style={[bgWarning, aCenterMiddle]}>Col2</Col1>
            <Col3 style={[bgSuccess, aCenterMiddle]}>Col3</Col3>
            <Col style={[bgSecondaryLight, aCenterMiddle]}>Col</Col>
        </Row>
    </Row1>
}

