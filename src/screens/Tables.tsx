import {Col1} from "../RNCore/components/markup/markup";
import Table, {ITCol} from "../RNCore/components/table/Table";
import {ITRow} from "../RNCore/components/table/TRow";

export default function () {
    let columns: ITCol[];
    columns = [
        {label: 'text', fieldName: 'text', type: 'text'},
        {label: 'number', fieldName: 'number', type: 'number'},
        {label: 'rub', fieldName: 'rub', type: 'rub'},
        {label: 'percent', fieldName: 'percent', type: 'percent'},
    ];

    const rows: ITRow[] = [
        {cells: ['some', 1000, 40000, 25], id: '1'},
        {cells: ['text', 2000, 50000, 35], id: '2'},
        {cells: ['test', 7000, 60000, 45], id: '3'},
    ]
    return <Col1>
        <Table
            sortBy={['text', 'number', 'percent', 'rub']}
            columns={columns}
            data={rows}
            remove={() => {}}
        />
    </Col1>
}
