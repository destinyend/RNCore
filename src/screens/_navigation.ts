import Markup from "../screens/Markup";
import Buttons from "./Buttons";
import Fields from "./Fields";
import Texts from "./Texts";
import Complex from "./Complex";
import Styles from "./Styles";
import Media from "./Media";

interface IScreen {
    title: string
    name: string
    Component: () => JSX.Element
    inHeader: boolean
}

const firstScreen = 'complex'
export const screen_list: IScreen[] = [
    {title: 'разметка', name: 'markup', Component: Markup, inHeader: true},
    {title: 'кнопки', name: 'buttons', Component: Buttons, inHeader: true},
    {title: 'поля', name: 'fields', Component: Fields, inHeader: true},
    {title: 'текст', name: 'texts', Component: Texts, inHeader: true},
    {title: 'стилизация', name: 'styles', Component: Styles, inHeader: true},
    {title: 'составные', name: 'complex', Component: Complex, inHeader: true},
    {title: 'медиа', name: 'media', Component: Media, inHeader: true},
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
    current: firstScreen
}

export const initialNavigation: INavigation = {
    state: initialNavigationState,
    canGoBack: () => false,
    goBack: () => {},
    navigate: (url: string) => {},
}
