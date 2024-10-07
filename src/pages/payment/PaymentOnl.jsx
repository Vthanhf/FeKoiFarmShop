import { useState } from 'react';
import { QRCode, Layout, Button, Radio, Input, Typography, message, Card, Steps } from 'antd';
// import { useHistory } from 'react-router-dom';
import './PaymentPage.css'; // Import file CSS
import { Link } from 'react-router-dom';

const { Header, Content } = Layout;
const { Title } = Typography;
const { Step } = Steps;

const PaymentPageOnline = () => {
//   const history = useHistory();
  const [paymentMethod, setPaymentMethod] = useState('MoMo');
  const [amount, setAmount] = useState(0);
  const [qrValue, setQrValue] = useState('');
  const [currentStep, setCurrentStep] = useState(0);

  const handlePayment = () => {
    if (amount <= 0) {
      message.error('Vui lòng nhập số tiền hợp lệ!');
      return;
    }

    // Tạo giá trị QR cho thanh toán dựa trên phương thức
    const qrData = paymentMethod === 'MoMo'
      ? `MoMo Payment: Amount: ${amount}`
      : `VNPay Payment: Amount: ${amount}`;
    
    setQrValue(qrData);
    setCurrentStep(1); // Chuyển sang bước 2 sau khi tạo mã QR
  };

  const goToPreviousStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0)); // Quay lại bước trước đó
  };
//   const goToOrderStatus = () => {
//     history.push('/orderstatus'); // Điều hướng đến trang trạng thái đơn hàng
//   };

  return (
    <Layout>
      <Header className="header">
        <Title style={{ color: 'white' }}>Trang Thanh Toán</Title>
      </Header>
      <Content style={{ padding: '20px' }}>
        <Card className="payment-card">
          <Steps current={currentStep}>
            <Step title="Chọn Phương Thức" description="Chọn MoMo hoặc VNPay" />
            <Step title="Tạo Mã QR" description="Nhận mã QR để thanh toán" />
            <Step title="Hoàn Tất" description="Xác nhận thanh toán" />
          </Steps>

          {currentStep === 0 && (
            <>
              <Title level={3}>Chọn Phương Thức Thanh Toán</Title>
              <Radio.Group onChange={(e) => setPaymentMethod(e.target.value)} value={paymentMethod}>
                <Radio value="MoMo">MoMo</Radio>
                <Radio value="VNPay">VNPay</Radio>
              </Radio.Group>

              <div className="input-container">
                <Input
                  type="number"
                  placeholder="Nhập số tiền"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="amount-input"
                />
                <Button type="primary" onClick={handlePayment} className="generate-button">
                  Tạo Mã QR
                </Button>
              </div>
            </>
          )}

          {currentStep === 1 && qrValue && (
            <div className="qr-container">
              <Title level={4}>Mã QR Thanh Toán</Title>
              <QRCode
                errorLevel="H"
                value={qrValue} // Sử dụng giá trị QR đã tạo
                size={256} // Kích thước mã QR
              />
              <p className="qr-value">{qrValue}</p>
              <Button type="primary" onClick={() => setCurrentStep(2)} className="confirm-button">
                Xác Nhận Thanh Toán
              </Button>
              <Button onClick={goToPreviousStep} className="back-button">
                Quay lại
              </Button>
            </div>
          )}

          {currentStep === 2 && (
            <div className="confirmation-container completepayment">
              <Title level={4}>Thanh Toán Thành Công!</Title>
              <p>Cảm ơn bạn đã thanh toán qua {paymentMethod}.</p>
              <button className='orderstatus-button'>
                <Link to="/orderstatus" className="order-status-button">
                Xem Trạng Thái Đơn Hàng
              </Link>
              </button>
              
            </div>
          )}
        </Card>
      </Content>
    </Layout>
  );
};

export default PaymentPageOnline;