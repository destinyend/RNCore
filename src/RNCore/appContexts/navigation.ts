import {screen_list} from "../../screens/_map";

export interface INavigationState {
    stack: string[]
    current: string
}

export interface INavigation {
    state: INavigationState
    canGoBack: () => boolean
    goBack: () => void
    navigate: (url: string) => void
}

export const initialNavigationState: INavigationState = {
    stack: [],
    current: screen_list[0].name
}

export const initialNavigation: INavigation = {
    state: initialNavigationState,
    canGoBack: () => false,
    goBack: () => {},
    navigate: (url: string) => {},
}
