import {useContext} from "react";
import {AppContext} from "../RNCore/appContexts/AppContext";
import {bold} from "../styles/text";
import {screen_list} from "../screens/_navigation";
import {headerStyle} from "../styles/wrapper";
import {Row} from "../RNCore/components/markup/markup";
import {TextPrimary} from "../RNCore/components/text/text";

export default function () {
    const {navigation} = useContext(AppContext)
    return <Row style={headerStyle}>
        {screen_list.map((scr, key) => {
            if (!scr.inHeader) return null
            return <TextPrimary
                onPress={() => navigation.navigate(scr.name)}
                style={scr.name === navigation.state.current ? bold: {}}
                key={key}
            >
                {scr.title}
            </TextPrimary>
        })}
    </Row>
}
