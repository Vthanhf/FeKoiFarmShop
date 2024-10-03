/* eslint-disable no-unused-vars */
// path/to/Customers.jsx
import React, { useState } from 'react';
import { Table } from 'antd';

const Customers = () => {
  const [customers, setCustomers] = useState([
    { key: '1', name: 'Nguyễn Văn A', feedback: 'Rất hài lòng!' },
    { key: '2', name: 'Trần Thị B', feedback: 'Cần cải thiện dịch vụ.' },
  ]);

  const columns = [
    { title: 'Tên khách hàng', dataIndex: 'name', key: 'name' },
    { title: 'Phản hồi', dataIndex: 'feedback', key: 'feedback' },
  ];

  return <Table dataSource={customers} columns={columns} />;
};

export default Customers;