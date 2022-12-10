import {Platform, Text} from "react-native";
import {FontAwesomeIcon as FontAwesomeNative} from "@fortawesome/react-native-fontawesome";
import {FontAwesomeIcon as FontAwesomeReact} from "@fortawesome/react-fontawesome";
import {IconDefinition} from "@fortawesome/fontawesome-common-types";

export interface IFA {
    icon: IconDefinition
    style: object
    visible?: boolean
}

export default function (props: IFA) {
    if (!props.visible) return null
    if (!props.icon) return <Text>icon</Text>
    if (Platform.OS === 'web') {
        return <FontAwesomeReact icon={props.icon} style={props.style}/>;
    }
    return <FontAwesomeNative icon={props.icon} style={props.style}/>
}
