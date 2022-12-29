import {Col1} from "../RNCore/components/markup/markup";
import React from "react";
import Sound from "../RNCore/components/media/Sound";
import Player from "../RNCore/components/media/Player";
import {H4} from "../RNCore/components/text/headers";
import {mt3} from "../styles/margins";
import Img from "../RNCore/components/media/Img";

export default function () {
    return <Col1>
        <H4>Sound</H4>
        <Sound url={'https://zvukogram.com/index.php?r=site/download&id=23058'}/>
        <H4 style={mt3}>Player</H4>
        <Player url={'https://www.youtube.com/watch?v=lfT7xcqYMPA'}/>
        <H4 style={mt3}>Img</H4>
        <Img
            url={'https://i.pinimg.com/originals/b1/02/dc/b102dcda56577ee8b860b89dadf0f4c0.jpg'}
            onPress={'resize'}
        />
    </Col1>
}
