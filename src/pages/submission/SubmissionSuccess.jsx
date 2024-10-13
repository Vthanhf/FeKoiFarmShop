import { Result, Button } from "antd";

function SubmissionSuccess() {
    return (
        <Result
            status="info"
            title="Chờ đợi để trang trại duyệt đơn kí gửi"
            subTitle="Chúng tôi sẽ thông báo cho bạn khi đơn của bạn được duyệt."
            extra={[
                <Button type="primary" key="home" onClick={() => window.location.href = '/v'}>
                    Quay lại trang chủ
                </Button>,
            ]}
        />
    );
}
export default SubmissionSuccess;
