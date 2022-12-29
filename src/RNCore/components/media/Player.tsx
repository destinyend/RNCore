import React from "react";
import {Video} from 'expo-av';
import {TStyle} from "../../constants";
import {flattenStyle} from "../component";
import {playerStyle} from "../../../styles/media";

interface IPlayer {
    visible?: boolean
    style?: TStyle
    url: string
}

export default function (props: IPlayer) {
    if (props.visible === false) return null
    return <Video
        style={flattenStyle([playerStyle, props.style])}
        source={{
            uri: props.url
        }}
        useNativeControls
        // @ts-ignore
        resizeMode="contain"
        isLooping
    />
}
