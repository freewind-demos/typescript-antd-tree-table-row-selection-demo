import React, {FC} from 'react';
import './Hello.pcss';
import {Table} from 'antd';

type Props = {};

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        render: (text: string) => <a>{text}</a>,
    },
    {
        title: 'Cash Assets',
        className: 'column-money',
        dataIndex: 'money',
    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
];

const data = [
    {
        key: '1',
        name: 'John Brown',
        money: '￥300,000.00',
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        money: '￥1,256,000.00',
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        money: '￥120,000.00',
        address: 'Sidney No. 1 Lake Park',
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
            getCheckboxProps: (item) => {
                return {
                    disabled: item.name === 'Joe Black'
                }
            }
        }} columns={columns} dataSource={data}/>
    </div>;
}
