
import { Layout, Form, Input, Button } from 'antd';

const { Header, Content } = Layout;

const ChangePassword = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header style={{ background: '#fff', padding: 0 }}>
                <h2 style={{ margin: '0 16px' }}>Đổi Mật Khẩu</h2>
            </Header>
            <Content style={{ margin: '16px' }}>
                <Form
                    name="change-password"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Mật Khẩu Cũ"
                        name="oldPassword"
                        rules={[{ required: true, message: 'Vui lòng nhập mật khẩu cũ!' }]}
                    >
                        <Input.Password />
                    </Form.Item>
                    
                    <Form.Item
                        label="Mật Khẩu Mới"
                        name="newPassword"
                        rules={[{ required: true, message: 'Vui lòng nhập mật khẩu mới!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        label="Nhập Lại Mật Khẩu Mới"
                        name="confirmPassword"
                        rules={[{ required: true, message: 'Vui lòng nhập lại mật khẩu mới!' }]}
                    >
                        <Input.Password />
                    </Form.Item>
                </Form>
                <Button type="primary" htmlType="submit" style={{ marginTop: '16px' }}>Đổi Mật Khẩu</Button>
            </Content>
        </Layout>
    );
};

export default ChangePassword;