import {BtnDanger, BtnPrimary, BtnSecondary, BtnSuccess, BtnWarning, IBtn} from "./Btn";
import {TMainColor} from "../../constants";

interface IBtnAuto extends IBtn {
    color: TMainColor
}
export default function (props: IBtnAuto) {
    const {color, ...btnProps} = props
    switch (color) {
        case 'secondary':
            return <BtnSecondary {...btnProps}/>
        case 'warning':
            return <BtnWarning {...btnProps}/>
        case 'danger':
            return <BtnDanger {...btnProps}/>
        case 'success':
            return <BtnSuccess {...btnProps}/>
        default:
            return <BtnPrimary {...btnProps}/>
    }
}
