import React from 'react';
import { Layout, Table, Button, message, Popconfirm, Card, Empty } from 'antd';

const { Header, Content } = Layout;

const ConsignmentOrders = () => {
    const [consignmentOrders, setConsignmentOrders] = React.useState([
        { key: '1', orderId: 'CNS001', status: 'Chờ duyệt', koiName: 'Koi 3', price: 2000000 },
        { key: '2', orderId: 'CNS002', status: 'Đã giao', koiName: 'Koi 4', price: 2500000 },
    ]);

    const handleCancelOrder = (orderId) => {
        setConsignmentOrders(consignmentOrders.filter(order => order.orderId !== orderId));
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
                    onConfirm={() => handleCancelOrder(record.orderId)}
                    okText="Có"
                    cancelText="Không"
                >
                    <Button type="danger">Hủy</Button>
                </Popconfirm>
            ),
        },
    ];

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header style={{ background: '#fff', padding: 0 }}>
                <h2 style={{ margin: '0 16px' }}>Quản Lý Đơn Kí Gửi</h2>
            </Header>
            <Content style={{ margin: '16px' }}>
                <Card title="Đơn Kí Gửi" style={{ marginBottom: 20 }}>
                    {consignmentOrders.length > 0 ? (
                        <Table
                            columns={columns}
                            dataSource={consignmentOrders}
                        />
                    ) : (
                        <Empty description="Chưa có đơn hàng" />
                    )}
                </Card>
            </Content>
        </Layout>
    );
};

export default ConsignmentOrders;