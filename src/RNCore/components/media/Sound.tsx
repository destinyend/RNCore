import * as React from 'react';
import {Audio} from 'expo-av';
import {faPlay, faStop} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";
import Slider from "@react-native-community/slider";
import {TStyle} from "../../constants";
import {flex1, fRow} from "../../../styles/markups";
import {Col, Col1, Row} from "../markup/markup";
import {BtnPrimary, BtnSecondary} from "../buttons/Btn";
import {fixWidth} from "../../../styles/sizes";
import {mh1, stickLeft, stickRight} from "../../../styles/margins";
import {border} from "../../../styles/borders";
import {bgSecondaryLight, secondary} from "../../../styles/colors";
import {flattenStyle} from "../component";
import {soundStyle} from "../../../styles/media";

export interface IAudio {
    visible?: boolean
    url: string
    style?: TStyle
    autoPlay?: boolean
}
export default function (props: IAudio) {
    if (props.visible === false) return null
    const [state, setState] = useState({isPlaying: false, sound: null, duration: 0, progress: 0, url: null})

    async function play() {
        // @ts-ignore
        const {sound} = await Audio.Sound.createAsync(props.url)
        updateState({sound, isPlaying: true})
        await sound.playAsync()
    }

    function updateState(args: object) {
        setState({...state, ...args})
    }

    async function stop() {
        if (!state.sound) return
        //@ts-ignore
        await state.sound.stopAsync()
        updateState({progress: 0, isPlaying: false})
    }

    useEffect(() => {
        let timer = setInterval(async () => {
            //@ts-ignore
            const status = await state.sound?.getStatusAsync()
            if (status) {
                const progress = Math.ceil(status.positionMillis * 100 / status.durationMillis)
                if (progress < 100) updateState({progress, duration: status.durationMillis})
                else {
                    updateState({progress: 0, isPlaying: false})
                    clearInterval(timer)
                }
            }
        }, 100)

        return state.sound
            ? () => {
                clearInterval(timer)
                //@ts-ignore
                if (state.sound) state.sound.unloadAsync();
            }
            : undefined;
    }, [state.sound, props.url]);

    return <Row style={[, props.style]}>
        {
            state.isPlaying ?
                <BtnPrimary icon={faStop} style={[fixWidth(40), stickRight]} onPress={stop}/>
                :
                <BtnSecondary icon={faPlay} style={[fixWidth(40), stickRight]} onPress={play}/>
        }
        <Col style={[soundStyle, stickLeft]}>
            <Slider
                thumbTintColor={secondary.color}
                //@ts-ignore
                onLayout={props.autoPlay ? play : null}
                style={flattenStyle([flex1, mh1])}
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor="#aaa"
                maximumTrackTintColor="#FFF"
                value={state.progress}
            />
        </Col>
    </Row>
}
