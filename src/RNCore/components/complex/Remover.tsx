import {useContext} from "react";
import {AppContext} from "../../appContexts/AppContext";
import {BtnDanger, IBtn} from "../buttons/Btn";
import {TMainColor} from "../../constants";
import BtnAuto from "../buttons/BtnAuto";
import FA from "../static/FA";
import {faTrash} from "@fortawesome/free-solid-svg-icons";


export interface IBtnRemove extends IBtn {
    visible?: boolean
    confirm?: boolean
    mode?: 'btn' | 'icon' | 'btnIcon'
}

export default function (props: IBtnRemove) {
    const {alert} = useContext(AppContext)
    if (props.visible === false) return null

    function remove() {
        if (!props.onPress) return
        if (props.confirm !== false) {
            alert.show({
                title: 'Вы уверенны?',
                buttons: [
                    {
                        title: 'удалить',
                        style: 'danger',
                        onPress: props.onPress
                    },
                    {
                        title: 'отмена',
                        style: 'secondary'
                    }
                ]
            })
        } else props.onPress()
    }

    if (props.mode === 'icon') return <FA icon={faTrash} onPress={remove} style={props.style}/>
    if (props.mode === 'btnIcon') return <BtnDanger icon={faTrash} onPress={remove} style={props.style}/>
    const btnProps = {
        title: props.title ? props.title : 'удалить',
        onPress: remove
    }
    return <BtnDanger {...btnProps} style={props.style}/>
}
