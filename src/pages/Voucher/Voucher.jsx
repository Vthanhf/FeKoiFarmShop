// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

function Voucher() {
    const [vouchers, setVouchers] = useState([]);
    const [newVoucher, setNewVoucher] = useState('');

    const addVoucher = () => {
        if (newVoucher) {
            setVouchers([...vouchers, newVoucher]);
            setNewVoucher('');
        }
    };

    return (
        <div>
            <h1>Voucher của bạn 🎁</h1>
            <div className="voucher-card">
                <h2>VOUCHER</h2>
                <p>VND 25.000,-</p>
                <input type="text" placeholder="Dates:" />
                <input type="text" placeholder="Kode voucher:" />
            </div>
            <div className="voucher-list">
                {vouchers.map((voucher, index) => (
                    <div key={index}>
                        <p>{voucher} The Koi Legend</p>
                    </div>
                ))}
            </div>
            <input 
                type="text" 
                value={newVoucher} 
                onChange={(e) => setNewVoucher(e.target.value)} 
                placeholder="Nhập voucher mới" 
            />
            <button onClick={addVoucher}>Thêm Voucher</button>
        </div>
    );
}

export default Voucher;

