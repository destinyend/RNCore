import {pointer} from "../../../styles/cursors";
import {Col, Row1} from "../markup/markup";
import TCell, {ITCell} from "./TCell";
import {TVoid} from "../../constants";
import Checkbox from "../fields/Checkbox";
import {IVariant} from "../fields/Select";
import {ITValue} from "./TValue";

export interface ITRow {
    onSelect?: (selected: boolean) => void
    style?: object
    cells: ITCell[]
    variants?: IVariant[][]
    selected?: boolean
    types: ITValue[]
}

export default function (props: ITRow) {
    return <Row1>
        {!!props.onSelect && <Col>
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
                {...cell}
                type={props.types[key].type}
                value={cell.value}
                variants={props.variants ? props.variants[key]: []}
            />
        })}
    </Row1>
}

