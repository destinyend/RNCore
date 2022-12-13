import {createContext} from "react";
import {IAlert, IAlertState, initialAlert, initialAlertState} from "./alert";
import {INavigation, INavigationState, initialNavigation, initialNavigationState} from "./navigation";


export interface IApp {
    alert: IAlert
    navigation: INavigation
}


export const initialApp : IApp = {
    alert: initialAlert,
    navigation: initialNavigation
}

export interface IAppState {
    alert: IAlertState
    navigation: INavigationState
}
export const initialAppState: IAppState ={
    alert: initialAlertState,
    navigation: initialNavigationState
}
export const AppContext = createContext(initialApp)
