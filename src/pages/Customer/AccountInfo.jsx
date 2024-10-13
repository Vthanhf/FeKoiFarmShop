
import { Layout } from 'antd';

const { Header, Content } = Layout;

const AccountInfo = () => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header style={{ background: '#fff', padding: 0 }}>
                <h2 style={{ margin: '0 16px' }}>Thông Tin Tài Khoản</h2>
            </Header>
            <Content style={{ margin: '16px' }}>
                <p>Thông tin tài khoản của bạn sẽ được hiển thị ở đây.</p>
            </Content>
        </Layout>
    );
};

export default AccountInfo;