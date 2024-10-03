/* eslint-disable no-unused-vars */
// path/to/Orders.jsx
import React, { useState } from 'react';
import { Table, Button } from 'antd';

const Orders = () => {
  const [orders, setOrders] = useState([
    { key: '1', customer: 'Nguyễn Văn A', status: 'Đang xử lý' },
    { key: '2', customer: 'Trần Thị B', status: 'Hoàn thành' },
  ]);

  const handleCompleteOrder = (key) => {
    setOrders(orders.map(order => order.key === key ? { ...order, status: 'Hoàn thành' } : order));
  };

  const columns = [
    { title: 'Khách hàng', dataIndex: 'customer', key: 'customer' },
    { title: 'Trạng thái', dataIndex: 'status', key: 'status' },
    {
      title: 'Hành động',
      key: 'action',
      render: (_, record) => (
        <Button onClick={() => handleCompleteOrder(record.key)}>Hoàn thành</Button>
      ),
    },
  ];

  return <Table dataSource={orders} columns={columns} />;
};

export default Orders;