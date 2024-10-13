// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Voucher.css'; // Đảm bảo bạn đã tạo file CSS này

function Voucher() {
    const [vouchers, setVouchers] = useState([]);
    const [newVoucher, setNewVoucher] = useState('');
    const [isAdding, setIsAdding] = useState(false); // Trạng thái để hiển thị ô nhập liệu

    const addVoucher = () => {
        if (newVoucher) {
            setVouchers([...vouchers, newVoucher]);
            setNewVoucher('');
            setIsAdding(false); // Đóng ô nhập liệu sau khi thêm
        }
    };

    return (
        <div>
            <h1>Voucher của bạn 🎁</h1>
            <div className="voucher-card">
                <h2>VOUCHER</h2>
                <p>VND 25.000,-</p>
            </div>
            <div className="voucher-list">
                {vouchers.map((voucher, index) => (
                    <div key={index} className="voucher-item">
                        <div className="voucher-content">
                            <p className="voucher-amount">đ{voucher}</p>
                            <p className="voucher-description">The Koi Legend</p>
                            <p className="voucher-validity">Valid until 01 February 2022</p>
                        </div>
                    </div>
                ))}
            </div>
            {isAdding ? (
                <div>
                    <input 
                        type="text" 
                        value={newVoucher} 
                        onChange={(e) => setNewVoucher(e.target.value)} 
                        placeholder="Nhập voucher mới" 
                    />
                    <button onClick={addVoucher}>Xác nhận</button>
                    <button onClick={() => setIsAdding(false)}>Hủy</button>
                </div>
            ) : (
                <button onClick={() => setIsAdding(true)}>Thêm Voucher</button>
            )}
        </div>
    );
}

export default Voucher;
