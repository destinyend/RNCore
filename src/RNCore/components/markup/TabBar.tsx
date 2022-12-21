import {Row} from "./markup";
import {Tab} from "./Tab";
import {flattenStyle} from "../component";

interface IItem {
    label: string
    value: string
}

interface ITabBar {
    visible?: boolean
    items: IItem[]
    onPress: (value: string) => void
    value: string
    style?: object | null | undefined | object[]
}

export default function (props: ITabBar) {
    if (props.visible === false) return null
    return <Row style={flattenStyle(props.style)}>
        {props.items.map((tab, key) => {
            return <Tab
                key={key}
                label={tab.label}
                active={tab.value === props.value}
            />
        })}
    </Row>
}
