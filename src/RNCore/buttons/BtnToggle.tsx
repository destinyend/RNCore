import Btn, {BtnPrimary, BtnSecondary, IBtn} from "./Btn";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {useContext} from "react";
import {AppContext} from "../appContexts/AppContext";


export interface IBtnRemove extends IBtn {
    active: boolean
}

export default function (props: IBtnRemove) {
    if (props.active) return <BtnPrimary {...props}/>
    return <BtnSecondary {...props}/>
}
