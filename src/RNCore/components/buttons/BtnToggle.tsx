import {BtnPrimary, BtnSecondary, IBtn} from "./Btn";

export interface IBtnRemove extends IBtn {
    active: boolean
}

export default function (props: IBtnRemove) {
    if (props.active) return <BtnPrimary {...props}/>
    return <BtnSecondary {...props}/>
}
