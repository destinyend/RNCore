import {IconDefinition} from "@fortawesome/fontawesome-common-types";
import {createContext} from "react";

export interface IAlertBtn {
    title?: string
    icon?: IconDefinition
    onPress?: () => void
    style: 'primary' | 'secondary' | 'danger' | 'warning' | 'success'
}

export interface IAlertShow {
    title?: string
    body?: string
    buttons?: IAlertBtn[]
}

export interface IAlertState extends IAlertShow {
    visible: boolean
}
export interface IAlert {
    state: IAlertState
    show: (args: IAlertShow) => void
    hide: () => void
}

export const initialAlertState: IAlertState = {
    visible: false,
    title: '',
    body: '',
    buttons: [],
}

export const initialAlert: IAlert = {
    state: initialAlertState,
    show: ({}) => {},
    hide: () => {}
}

export const Alert = createContext(initialAlert)


