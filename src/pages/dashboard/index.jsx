// path/to/Dashboard.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, Card, Row, Col,Table } from 'antd';
import Inventory from './Inventory';
import Orders from './Orders';
import Customers from './Customers';

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem('Dashboard', '1', <PieChartOutlined />),
  getItem('Inventory', '2', <DesktopOutlined />),
  getItem('Orders', 'sub1', <UserOutlined />, [
    getItem('Pending Orders', '3'),
    getItem('Completed Orders', '4'),
  ]),
  getItem('Customers', 'sub2', <TeamOutlined />, [
    getItem('Customer List', '5'),
    getItem('Customer Feedback', '6'),
  ]),
  getItem('Reports', '7', <FileOutlined />),
];

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState('1');
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleMenuClick = (e) => {
    setSelectedKey(e.key);
  };

  const renderContent = () => {
    switch (selectedKey) {
      case '1':
        return (
          <>
          <Row gutter={16}>
            <Col span={8}>
              <Card title="Tổng Khách Hàng" bordered={false}>
                <h2>56</h2>
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Tổng Doanh Thu" bordered={false}>
                <h2>1,295,000,000đ</h2>
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Tình Trạng Đơn Hàng" bordered={false}>
                <h2>10 Đơn</h2>
              </Card>
            </Col>
          </Row>
          <Table
              dataSource={[
                { key: '1', id: 'IK0847', customer: 'Nguyễn Văn A', total: '85.000.000đ', status: 'Đã hoàn thành' },
                { key: '2', id: 'IK0742', customer: 'Nguyễn Tuấn Kiệt', total: '650.000.000đ', status: 'Đã hủy' },
                { key: '3', id: 'IK1084', customer: 'Đỗ Khánh Huy', total: '70.000.000đ', status: 'Đang vận chuyển' },
                { key: '4', id: 'IK1084', customer: 'Đỗ Khánh Huy', total: '70.000.000đ', status: 'Đã hủy' },
                { key: '5', id: 'IK1084', customer: 'Đỗ Khánh Huy', total: '70.000.000đ', status: 'Đang vận chuyển' },
                { key: '6', id: 'IK1084', customer: 'Đỗ Khánh Huy', total: '70.000.000đ', status: 'Đang vận chuyển' },
                { key: '7', id: 'IK1084', customer: 'Đỗ Khánh Huy', total: '70.000.000đ', status: 'Đang vận chuyển' },
                { key: '8', id: 'IK1084', customer: 'Đỗ Khánh Huy', total: '70.000.000đ', status: 'Đang vận chuyển' },
                { key: '9', id: 'IK1084', customer: 'Đỗ Khánh Huy', total: '70.000.000đ', status: 'Đang vận chuyển' },
                { key: '10', id: 'IK1084', customer: 'Đỗ Khánh Huy', total: '70.000.000đ', status: 'Đang vận chuyển' },
              ]}
              columns={[
                { title: 'ID Đơn Hàng', dataIndex: 'id', key: 'id' },
                { title: 'Tên Khách Hàng', dataIndex: 'customer', key: 'customer' },
                { title: 'Tổng Tiền', dataIndex: 'total', key: 'total' },
                { title: 'Trạng Thái', dataIndex: 'status', key: 'status' },
              ]}
            />
          </>

        );
      case '2':
        return <Inventory />;
      case '3':
        return <Orders />;
      case '4':
        return <Orders />;
      case '5':
        return <Customers />;
      case '6':
        return <Customers />;
      default:
        return <h2>Welcome to the Koi Fish Management Dashboard</h2>;
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={items}
          onClick={handleMenuClick}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Management</Breadcrumb.Item>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {renderContent()}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Dashboard;