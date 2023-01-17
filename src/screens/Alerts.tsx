import {useContext, useEffect} from "react";
import {AppContext} from "../RNCore/appContexts/AppContext";
import {Col} from "../RNCore/components/markup/markup";

export default function () {
    const {alert} = useContext(AppContext)

    useEffect(() => {
        if (!alert.state.visible) alert.show({})
    }, [])

    return <Col/>
}
