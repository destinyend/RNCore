import {Col1} from "../RNCore/components/markup/markup";
import Table, {ITCol} from "../RNCore/components/table/Table";

export default function () {
    let columns: ITCol[];
    columns = [
        {label: 'text', fieldName: 'text', type: 'text'},
        {label: 'number', fieldName: 'number', type: 'number'},
        {label: 'rub', fieldName: 'rub', type: 'rub'},
        {label: 'percent', fieldName: 'percent', type: 'percent'},
    ];

    const data = [
        {cells: ['some', 1000, 40000, 25]},
        {cells: ['text', 2000, 50000, 35]},
        {cells: ['test', 7000, 60000, 45]},
    ]
    return <Col1>
        <Table
            columns={columns}
            data={data}
        />
    </Col1>
}
