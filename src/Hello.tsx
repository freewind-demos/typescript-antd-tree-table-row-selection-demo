import React, {FC} from 'react';
import './Hello.pcss';
import {Table} from 'antd';

type Props = {};

interface User {
    key: string,
    name: string
    children?: User[]
}

const data: User[] = [
    {
        key: '1',
        name: 'John Brown',
        children: [{
            key: '1-1',
            name: 'John 1-1'
        }]
    },
    {
        key: '2',
        name: 'Jim Green',
        children: [{
            key: '2-1',
            name: 'Jim 2-1'
        }]
    },
    {
        key: '3',
        name: 'Joe Black',
    },
];

export const Hello: FC<Props> = ({}) => {
    return <div className={'Hello'}>
        <h1>Hello React</h1>
        <Table rowSelection={{
            type: 'checkbox',
            onChange: (selectedRowKeys, selectedRows) => {
                console.log("### onChange", {selectedRowKeys, selectedRows})
            },
            onSelect: (record, selected: boolean, selectedRows, nativeEvent: Event) => {
                console.log("### onSelect", {record, selected, selectedRows, nativeEvent})
            },
            getCheckboxProps: (item) => {
                return {
                    disabled: item.name === 'Joe Black'
                }
            }
        }} columns={[
            {
                title: 'Name',
                render: (_, it) => <a>{it.name}</a>,
            },
        ]} dataSource={data}/>
    </div>;
}


