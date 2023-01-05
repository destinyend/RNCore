import {TextPrimary} from "./text";
import {Linking} from "react-native";

export interface IURl {
    visible?: boolean
    url: string
    label?: string
    inNewTab?: boolean
}

export default function (props: IURl) {
    async function onPress() {
        if (props.inNewTab) {
            if (await Linking.canOpenURL(props.url)) {
                await Linking.openURL(props.url);
            } else window.location.href = props.url
        }
    }

    return <TextPrimary onPress={onPress}>
        {props.label || props.url}
    </TextPrimary>
}
