import { useState } from 'react';
import { Table, Button, Tabs, message, Popconfirm } from 'antd';

const { TabPane } = Tabs;

const OrderManagement = () => {
    const [regularOrders, setRegularOrders] = useState([
        { key: '1', orderId: 'ORD001', status: 'Pending', koiName: 'Koi 1', price: 1000000 },
        { key: '2', orderId: 'ORD002', status: 'Shipped', koiName: 'Koi 2', price: 1500000 },
    ]);

    const [consignmentOrders, setConsignmentOrders] = useState([
        { key: '1', orderId: 'CNS001', status: 'Pending', koiName: 'Koi 3', price: 2000000 },
        { key: '2', orderId: 'CNS002', status: 'Delivered', koiName: 'Koi 4', price: 2500000 },
    ]);

    const handleCancelOrder = (orderId, type) => {
        if (type === 'regular') {
            setRegularOrders(regularOrders.filter(order => order.orderId !== orderId));
        } else {
            setConsignmentOrders(consignmentOrders.filter(order => order.orderId !== orderId));
        }
        message.success(`Order ${orderId} has been canceled.`);
    };

    const columns = [
        {
            title: 'Order ID',
            dataIndex: 'orderId',
            key: 'orderId',
        },
        {
            title: 'Tên Cá Koi',
            dataIndex: 'koiName',
            key: 'koiName',
        },
        {
            title: 'Giá Tiền',
            dataIndex: 'price',
            key: 'price',
            render: (text) => `${text} VNĐ`,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Popconfirm
                    title="Bạn có chắc chắn muốn hủy đơn hàng này?"
                    onConfirm={() => handleCancelOrder(record.orderId, record.type)}
                    okText="Có"
                    cancelText="Không"
                >
                    <Button type="danger">
                        Hủy
                    </Button>
                </Popconfirm>
            ),
        },
    ];

    return (
        <Tabs defaultActiveKey="1">
            <TabPane tab="Đơn Thường" key="1">
                <Table
                    columns={columns}
                    dataSource={regularOrders.map(order => ({ ...order, type: 'regular' }))}
                />
            </TabPane>
            <TabPane tab="Đơn Kí Gửi" key="2">
                <Table
                    columns={columns}
                    dataSource={consignmentOrders.map(order => ({ ...order, type: 'consignment' }))}
                />
            </TabPane>
        </Tabs>
    );
};

export default OrderManagement;
