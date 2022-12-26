import Markup from "../screens/Markup";
import Buttons from "./Buttons";
import Fields from "./Fields";
import Texts from "./Texts";
import Complex from "./Complex";

interface IScreen {
    title: string
    name: string
    Component: () => JSX.Element
    inHeader: boolean
}

export const screen_list: IScreen[] = [
    {title: 'разметка', name: 'markup', Component: Markup, inHeader: true},
    {title: 'кнопки', name: 'buttons', Component: Buttons, inHeader: true},
    {title: 'поля', name: 'fields', Component: Fields, inHeader: true},
    {title: 'текст', name: 'texts', Component: Texts, inHeader: true},
    {title: 'составные', name: 'complex', Component: Complex, inHeader: true},
]

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
    current: screen_list[2].name
}

export const initialNavigation: INavigation = {
    state: initialNavigationState,
    canGoBack: () => false,
    goBack: () => {},
    navigate: (url: string) => {},
}
