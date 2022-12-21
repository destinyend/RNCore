import {useContext} from "react";
import {Modal, Pressable} from "react-native";
import {Row} from "../markup/markup";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import Btn, {BtnPrimary} from "../buttons/Btn";
import {AppContext} from "../../appContexts/AppContext";
import {
    alertBody,
    alertBox,
    alertCloseBtn,
    alertCloseBtnWrapper,
    alertTitle,
    alertWrapper
} from "../../../styles/alert";
import {ml1} from "../../../styles/margins";
import {danger, primary, secondary, success, warning} from "../../../styles/colors";


export default function () {
    const {alert} = useContext(AppContext)

    return <Modal animationType={'fade'} visible={alert.state.visible} transparent={true}>
        <Pressable
            style={alertWrapper}
            onPress={alert.hide}
        >
            <Pressable style={alertBox}>
                <Row style={alertCloseBtnWrapper}>
                    <Btn icon={faTimes} onPress={alert.hide} fontStyle={alertCloseBtn}/>
                </Row>
                <Row visible={!!alert.state.title} style={alertTitle}>
                    {alert.state.title}
                </Row>
                <Row visible={!!alert.state.body} style={alertBody}>
                    {alert.state.body}
                </Row>
                <Row>
                    <BtnPrimary
                        title={'ОК'}
                        onPress={alert.hide}
                        visible={!!alert.state.buttons}
                    />
                    {alert.state.buttons ?
                        alert.state.buttons.map((btn, key) => {
                            let style = key ? ml1: {}
                            switch (btn.style) {
                                case 'primary':
                                    style = {...style, ...primary}
                                    break
                                case 'secondary':
                                    style = {...style, ...secondary}
                                    break
                                case 'warning':
                                    style = {...style, ...warning}
                                    break
                                case 'danger':
                                    style = {...style, ...danger}
                                    break
                                case 'success':
                                    style = {...style, ...success}
                                    break
                            }
                            return <Btn
                                title={btn.title}
                                icon={btn.icon}
                                key={key}
                                style={style}
                                onPress={btn.onPress}
                            />
                        })
                        :
                        null
                    }
                </Row>
            </Pressable>
        </Pressable>
    </Modal>
}
