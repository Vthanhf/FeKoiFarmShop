import React from 'react';
import { Layout, Menu, Table, Button, message, Popconfirm, Card, Empty } from 'antd';

const { Header, Content, Sider } = Layout;

const RegularOrders = () => {
    const [regularOrders, setRegularOrders] = React.useState([
        { key: '1', orderId: 'ORD001', status: 'Chờ thanh toán', koiName: 'Koi 1', price: 1000000 },
        { key: '2', orderId: 'ORD002', status: 'Đang vận chuyển', koiName: 'Koi 2', price: 1500000 },
    ]);

    const handleCancelOrder = (orderId) => {
        setRegularOrders(regularOrders.filter(order => order.orderId !== orderId));
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
            <Sider width={200} style={{ background: '#fff' }}>
                <Menu mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">Tất cả</Menu.Item>
                    <Menu.Item key="2">Chờ thanh toán</Menu.Item>
                    <Menu.Item key="3">Vận chuyển</Menu.Item>
                    <Menu.Item key="4">Chờ giao hàng</Menu.Item>
                    <Menu.Item key="5">Hoàn thành</Menu.Item>
                    <Menu.Item key="6">Đã hủy</Menu.Item>
                    <Menu.Item key="7">Trả hàng/Hoàn tiền</Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header style={{ background: '#fff', padding: 0 }}>
                    <h2 style={{ margin: '0 16px' }}>Quản Lý Đơn Thường</h2>
                </Header>
                <Content style={{ margin: '16px' }}>
                    <Card title="Đơn Thường" style={{ marginBottom: 20 }}>
                        {regularOrders.length > 0 ? (
                            <Table
                                columns={columns}
                                dataSource={regularOrders}
                            />
                        ) : (
                            <Empty description="Chưa có đơn hàng" />
                        )}
                    </Card>
                </Content>
            </Layout>
        </Layout>
    );
};

export default RegularOrders;