import {pointer} from "../../../styles/cursors";
import {Col, Row1} from "../markup/markup";
import TCell, {ITCell} from "./TCell";
import {TVoid} from "../../constants";
import Checkbox from "../fields/Checkbox";
import {IVariant} from "../fields/Select";
import {ITValue, TCellKind, TCellVal} from "./TValue";
import {mainHeight} from "../../../styles/sizes";
import {cellBorder, tableCheckbox} from "../../../styles/tables";
import {flex1} from "../../../styles/markups";
import {flattenStyle} from "../component";

export interface ITRow {
    onSelect?: (selected: boolean) => void
    style?: object
    cells: TCellVal[]
    variants?: IVariant[][]
    selected?: boolean
    id?: string
}

export default function (props: ITRow) {
    return <Row1 style={props.style}>
        {!!props.onSelect && <Col style={[flex1, tableCheckbox]}>
            <Checkbox
                value={props.selected === true}
                onChange={() => {
                    if (props.onSelect) props.onSelect(!props.selected)
                }}
            />
        </Col>}
        {props.cells.map((cell,key) => {
            return <TCell
                key={key}
                style={key && key !== props.cells.length-1 ? cellBorder: null}
                //@ts-ignore
                type={props.types[key]}
                value={cell}
                variants={props.variants ? props.variants[key]: []}
            />
        })}
    </Row1>
}

