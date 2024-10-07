
import { Layout, Typography, Timeline } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
const { Header, Content } = Layout;
const { Title } = Typography;
import { StarOutlined } from '@ant-design/icons';

const OrderStatus = () => {
  return (
    <Layout style={{backgroundColor: 'white'}}>
      <Header className="header">
        <Title style={{ color: 'white' }}>Trạng Thái Đơn Hàng</Title>
      </Header>
      <Content style={{ padding: '20px' }}>
        <Title level={3}>Trạng Thái Đơn Hàng của Bạn</Title>
        <Timeline
    items={[
      {
        
        children: 'Đã thanh toán',
      },
      {
        dot: <ClockCircleOutlined className="timeline-clock-icon" />,
        color: 'red',
        children: 'Đang chờ lấy hàng',
      },
      {
        
        children: 'Đang vận chuyển',
      },
      {
        children: 'Đơn hàng hoàn thành',
      },
      {
        children: <Link to="/rating">Đánh giá</Link>,
        dot: <Link to="/rating"><StarOutlined /></Link>
      },
    ]}
  />
      </Content>
      <button className='orderstatus-button'>
        <Link to="/v">Trở về trang chủ</Link>
      </button>
    </Layout>
  );
};

export default OrderStatus;