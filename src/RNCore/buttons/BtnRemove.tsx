import Btn, {BtnDanger, IBtn} from "./Btn";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {useContext} from "react";
import {AppContext} from "../appContexts/AppContext";


export interface IBtnRemove extends IBtn {
    confirm?: boolean
}

export default function (props: IBtnRemove) {
    const {alert} = useContext(AppContext)

    function remove() {
        if (!props.onPress) return
        if (props.confirm) {
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

    return <BtnDanger
        title={props.title ? props.title : 'удалить'}
        onPress={remove}
    />
}
