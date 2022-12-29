import {Col, Col1, Row} from "../RNCore/components/markup/markup";
import Find from "../RNCore/components/complex/Find";
import {TextPrimary} from "../RNCore/components/text/text";
import {ml3, mr3, mt2, mt3, mv2} from "../styles/margins";
import Remover from "../RNCore/components/complex/Remover";
import Creator from "../RNCore/components/complex/Creator";
import {H4} from "../RNCore/components/text/headers";
import {bgDanger, danger} from "../styles/colors";
import Changer from "../RNCore/components/complex/Changer";
import TabBar from "../RNCore/components/markup/TabBar";
import {useState} from "react";

export default function () {
    const [tabBar, setTabBar] = useState('moscow')
    return <Col1>
        <H4>Find</H4>
        <Find/>

        <Col style={mv2}>
            <H4>Changer</H4>
            <Changer
                fields={[
                    {type: 'text', field: 'text', placeholder: 'text'},
                    {type: 'date', field: 'date'},
                    {
                        type: 'select',
                        field: 'select',
                        items: [{label: 'Москва', value: '0'}, {label: 'Сочи', value: '1'}]
                    },
                    {type: 'number', field: 'number', placeholder: 'number'}
                ]}
            />
            <TextPrimary>vertical=true</TextPrimary>
            <Changer
                vertical={true}
                fields={[
                    {type: 'text', field: 'text', placeholder: 'text'},
                    {type: 'date', field: 'date'},
                    {
                        type: 'select',
                        field: 'select',
                        items: [{label: 'Москва', value: '0'}, {label: 'Сочи', value: '1'}]
                    },
                    {type: 'number', field: 'number', placeholder: 'number'}
                ]}
            />
        </Col>

        <Col style={mv2}>
            <H4>Creator</H4>
            <Creator
                fields={[
                    {type: 'text', field: 'text', placeholder: 'text'},
                    {type: 'date', field: 'date'},
                    {
                        type: 'select',
                        field: 'select',
                        items: [{label: 'Москва', value: '0'}, {label: 'Сочи', value: '1'}]
                    },
                    {type: 'number', field: 'number', placeholder: 'number'}
                ]}
            />
            <TextPrimary>vertical=true</TextPrimary>
            <Creator
                vertical={true}
                fields={[
                    {type: 'text', field: 'text', placeholder: 'text'},
                    {type: 'date', field: 'date'},
                    {
                        type: 'select',
                        field: 'select',
                        items: [{label: 'Москва', value: '0'}, {label: 'Сочи', value: '1'}]
                    },
                    {type: 'number', field: 'number', placeholder: 'number'}
                ]}
            />
        </Col>

        <H4>Remover</H4>
        <Row>
            <Col>mode=btn (default)</Col>
            <Remover/>

            <Col style={ml3}>mode=icon</Col>
            <Remover style={mr3} mode={"icon"}/>

            <Col>mode=btnIcon</Col>
            <Remover mode={"btnIcon"}/>
        </Row>
        <H4 style={mt3}>TabBar</H4>
        <TabBar
            value={tabBar}
            onPress={setTabBar}
            items={[
                {label: 'Москва', value: 'moscow'},
                {label: 'Архангельск', value: 'arch'},
                {label: 'Челябинск', value: 'chel'},
            ]}
        />
    </Col1>
}
