
import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

const {  Sider } = Layout;

const OrderManagement = () => {
    const navigate = useNavigate(); // Khởi tạo useNavigate

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider width={200} style={{ background: '#fff' }}>
                <Menu mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" onClick={() => navigate('/v/account-info')}>Thông Tin Tài Khoản</Menu.Item>
                    <Menu.Item key="4" onClick={() => navigate('/v/regular')}>Đơn Thường</Menu.Item>
                    <Menu.Item key="5" onClick={() => navigate('/v/consignment')}>Đơn Kí Gửi</Menu.Item>
                    <Menu.Item key="2" onClick={() => navigate('/v/change-password')}>Đổi Mật Khẩu</Menu.Item>
                    <Menu.Item key="3" onClick={() => navigate('/v/')}>Đăng Xuất</Menu.Item>
                </Menu>
            </Sider>
        </Layout>
    );
};

export default OrderManagement;
