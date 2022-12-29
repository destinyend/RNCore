import {Row} from "./markup";
import {Tab} from "./Tab";
import {flattenStyle} from "../component";
import {TStyle} from "../../constants";

interface IItem {
    label: string
    value: string
}

interface ITabBar {
    visible?: boolean
    items: IItem[]
    onPress: (value: string) => void
    value: string
    style?: TStyle
}

export default function (props: ITabBar) {
    if (props.visible === false) return null
    return <Row style={flattenStyle(props.style)}>
        {props.items.map((tab, key) => {
            return <Tab
                key={key}
                label={tab.label}
                active={tab.value === props.value}
                onPress={() => props.onPress(tab.value)}
            />
        })}
    </Row>
}
