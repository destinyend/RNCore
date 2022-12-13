import {useState} from "react";
import {AppContext} from "./src/RNCore/appContexts/AppContext";
import {IAlertShow, initialAlertState} from "./src/RNCore/appContexts/alert";
import {initialNavigationState} from "./src/RNCore/appContexts/navigation";
import Header from "./src/wrapper/Header";
import Body from "./src/wrapper/Body";
import {View} from "react-native";

export default function App() {
    const [alertState, setAlertState] = useState(initialAlertState)
    const [navigationState, setNavigationState] = useState(initialNavigationState)

    function showAlert(args: IAlertShow) {
        setAlertState({...initialAlertState, ...args})
    }

    function hideAlert() {
        setAlertState(initialAlertState)
    }

    function canGoBack() {
        return navigationState.stack.length > 1
    }

    function navigate(url: string) {
        if (navigationState.current === url) return
        const stack: string[] = navigationState.stack.slice()
        stack.push(url)
        setNavigationState({...navigationState, stack, current: url})
    }

    function goBack() {
        if (!navigationState.stack.length) return
        const stack = navigationState.stack.slice()
        const current = stack.pop()
        // @ts-ignore
        setNavigationState({...navigationState, stack, current})
    }

    return <AppContext.Provider
        value={{
            alert: {
                state: alertState,
                show: showAlert,
                hide: hideAlert
            },
            navigation: {
                state: navigationState,
                canGoBack,
                navigate,
                goBack
            }
        }}
    >
        <View>
            <Header/>
            <Body/>
        </View>
    </AppContext.Provider>
}

