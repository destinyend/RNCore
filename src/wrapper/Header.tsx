import {Row} from "../RNCore/markup/markup";
import {TextPrimary} from "../RNCore/text/text";
import {useContext} from "react";
import {AppContext} from "../RNCore/appContexts/AppContext";
import {bold} from "../styles/text";
import {screen_list} from "../screens/_map";
import {headerStyle} from "../styles/wrapper";

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
