// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Table, Button } from 'antd';

const Voucher = () => {
    const dataSource = [
        {
            key: '1',
            code: 'VOUCHER1',
            discount: '10%',
            expiry: '2023-12-31',
        },
        {
            key: '2',
            code: 'VOUCHER2',
            discount: '20%',
            expiry: '2024-01-15',
        },
        // Thêm dữ liệu voucher khác nếu cần
    ];

    const columns = [
        {
            title: 'Voucher Code',
            dataIndex: 'code',
            key: 'code',
        },
        {
            title: 'Discount',
            dataIndex: 'discount',
            key: 'discount',
        },
        {
            title: 'Expiry Date',
            dataIndex: 'expiry',
            key: 'expiry',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Button type="primary" onClick={() => handleEdit(record.key)}>
                    Edit
                </Button>
            ),
        },
    ];

    const handleEdit = (key) => {
        // Logic để chỉnh sửa voucher
        console.log('Edit voucher with key:', key);
    };

    return (
        <div>
            <h1>Voucher Management</h1>
            <Button type="primary" style={{ marginBottom: 16 }}>
                Create New Voucher
            </Button>
            <Table dataSource={dataSource} columns={columns} />
        </div>
    );
};

export default Voucher;