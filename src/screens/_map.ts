import Markup from "../screens/Markup";
import Buttons from "./Buttons";
import Fields from "./Fields";

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
]
