import React, {useState} from "react";
import {Dimensions, Image, Modal, Pressable} from "react-native";
import {TStyle, TVoid} from "../../constants";
import {flattenStyle} from "../component";
import {Col} from "../markup/markup";
import {imageStyle, mediaSplash} from "../../../styles/media";

interface IImg {
    url: string
    style?: TStyle
    visible?: boolean
    onPress?: 'resize' | TVoid
}

export default function (props: IImg) {
    const [fullScreen, setFullScreen] = useState(false)
    if (!props.url || props.visible === false) return null

    function onPress() {
        if (props.onPress === 'resize') setFullScreen(true)
        else { // @ts-ignore
            props.onPress()
        }
    }

    const {height, width} = Dimensions.get('window')

    return <Col style={props.style} onPress={(props.onPress ? onPress: undefined)}>
        <Image source={{uri: props.url}} style={flattenStyle([imageStyle, props.style])}/>
        <Modal animationType={'fade'} visible={fullScreen} transparent={true}>
            <Pressable
                // @ts-ignore
                style={mediaSplash}
                onPress={() => {
                    setFullScreen(false)
                }}
            >
                <Image
                    source={{uri: props.url}}
                    style={[{height, width, resizeMode: 'contain'}]}
                />
            </Pressable>
        </Modal>
    </Col>
}
