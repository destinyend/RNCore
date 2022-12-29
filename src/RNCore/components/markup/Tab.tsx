import {TouchableOpacity} from "react-native";
import {border} from "../../../styles/borders";
import { primary, secondary } from "../../../styles/colors";
import {p2} from "../../../styles/margins";
import {flex1, jCenter} from "../../../styles/markups";
import {flattenStyle} from "../component";
import {TextPrimary} from "../text/text";
import {bold} from "../../../styles/text";


interface ITab {
    active?: boolean,
    onPress?: () => void,
    label?: string,
    visible?: boolean
}

export function Tab(props: ITab) {
    if (props.visible === false) return null
    const activeStyle = {
        borderColor: border.borderColor,
        borderTopLeftRadius: border.borderRadius,
        borderTopRightRadius: border.borderRadius,
        borderWidth: border.borderWidth,
        borderBottomColor: 'transparent',
    }

    const inactiveStyle = {
        borderColor: 'transparent',
        borderWidth: border.borderWidth,
        borderBottomColor: border.borderColor,
    }

    const common = {
        ...p2,
        ...jCenter,
        ...flex1,
        height: 40,
        primary
    }

    return <TouchableOpacity
        style={flattenStyle([props.active ? activeStyle : inactiveStyle])}
        onPress={props.onPress}
    >
        <TextPrimary style={[common, props.active ? bold : null]}>{props.label}</TextPrimary>
    </TouchableOpacity>
}
