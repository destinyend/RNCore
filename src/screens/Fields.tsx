import {Col, Col1, Col3, Row, Row1, Row2, Row3} from "../RNCore/markup/markup";
import {bgDanger, bgPrimary, bgSecondary, bgSecondaryLight, bgSuccess, bgWarning, danger} from "../styles/colors";
import {fixHeight, fixWidth} from "../styles/sizes";
import {flattenStyle} from "../RNCore/component";
import {m1} from "../styles/margins";
import {aCenterMiddle} from "../styles/markups";
import {TextPrimary} from "../RNCore/text/text";
import TextField from "../RNCore/fields/TextField";

export default function (): JSX.Element {
    return <Col1>
        <TextField placeholder={'placeholder'} label={'TextField'}/>
    </Col1>
}

