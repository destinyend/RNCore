import {AppContext} from "../RNCore/appContexts/AppContext";
import {useContext} from "react";
import {ScrollView} from "react-native";
import {screen_list} from "../screens/_navigation";
import {bodyStyle} from "../styles/wrapper";


export default function () {
    const {navigation} = useContext(AppContext)
    return <ScrollView style={bodyStyle}>
        {screen_list.map(({name, Component}, key) => {
            if (name !== navigation.state.current) return null
            return <Component key={key}/>
        })}
    </ScrollView>
}
