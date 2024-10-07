import { useState } from 'react';
import { Rate, Button, Input, message } from 'antd'; // Nhập CSS của Ant Design
// import { useHistory } from 'react-router-dom'; // Để điều hướng
import { Link } from 'react-router-dom';
import './Rating.css'; // Đảm bảo bạn tạo file CSS này

const Rating = () => {
    const [value, setValue] = useState(0);
    const [feedback, setFeedback] = useState('');
    // Khai báo useHistory để điều hướng

    const handleSubmit = () => {
        // Xử lý gửi đánh giá ở đây
        console.log(`Đánh giá: ${value}, Phản hồi: ${feedback}`);
        
        // Hiển thị thông báo thành công
        message.success('Đánh giá thành công!');

        // Quay trở lại trang chủ sau 2 giây
        
    };

    return (
        <div className="rating-container">
            <h1 className="rating-title">Đánh Giá Chúng Tôi</h1>
            <p className="rating-description">Chúng tôi rất mong nhận được phản hồi từ bạn!</p>
            <Rate onChange={setValue} value={value} />
            <Input.TextArea
                className="feedback"
                rows={4}
                placeholder="Nhập ý kiến của bạn ở đây..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
            />
            <Button type="primary" className="submit-button" onClick={handleSubmit}>
            <Link to="/v"> Gửi Đánh Giá</Link>
            </Button>
        </div>
    );
};

export default Rating;