// // eslint-disable-next-line no-unused-vars
// import React, { useState } from 'react';
// import './Voucher.css'; // Đảm bảo bạn đã tạo file CSS này

// function Voucher() {
//     const [vouchers, setVouchers] = useState([]);
//     const [newVoucher, setNewVoucher] = useState('');
//     const [isAdding, setIsAdding] = useState(false); // Trạng thái để hiển thị ô nhập liệu

//     const addVoucher = () => {
//         if (newVoucher) {
//             setVouchers([...vouchers, newVoucher]);
//             setNewVoucher('');
//             setIsAdding(false); // Đóng ô nhập liệu sau khi thêm
//         }
//     };

//     return (
//         <div>
//             <h1>Voucher của bạn 🎁</h1>
//             <div className="voucher-card">
//                 <h2>VOUCHER</h2>
//                 <p>VND 25.000,-</p>
//             </div>
//             <div className="voucher-list">
//                 {vouchers.map((voucher, index) => (
//                     <div key={index} className="voucher-item">
//                         <div className="voucher-content">
//                             <p className="voucher-amount">đ{voucher}</p>
//                             <p className="voucher-description">The Koi Legend</p>
//                             <p className="voucher-validity">Valid until 01 February 2022</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             {isAdding ? (
//                 <div>
//                     <input 
//                         type="text" 
//                         value={newVoucher} 
//                         onChange={(e) => setNewVoucher(e.target.value)} 
//                         placeholder="Nhập voucher mới" 
//                     />
//                     <button onClick={addVoucher}>Xác nhận</button>
//                     <button onClick={() => setIsAdding(false)}>Hủy</button>
//                 </div>
//             ) : (
//                 <button onClick={() => setIsAdding(true)}>Thêm Voucher</button>
//             )}
//         </div>
//     );
// }

// export default Voucher;

// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Voucher.css'; // Đảm bảo bạn đã tạo file CSS này

const VoucherDisplay = () => {
    const mainVoucher = {
        image: 'path/to/main-voucher-image.jpg', // Đường dẫn đến hình ảnh voucher chính
        description: 'Voucher Chính - Giảm giá 50%',
        expiry: 'Hạn sử dụng: 31/12/2023',
    };

    const vouchers = [
        {
            image: 'path/to/voucher1.jpg',
            description: 'Voucher 1 - Giảm giá 20%',
            expiry: 'Hạn sử dụng: 15/01/2024',
        },
        {
            image: 'path/to/voucher2.jpg',
            description: 'Voucher 2 - Giảm giá 30%',
            expiry: 'Hạn sử dụng: 20/02/2024',
        },
        {
            image: 'path/to/voucher3.jpg',
            description: 'Voucher 3 - Giảm giá 10%',
            expiry: 'Hạn sử dụng: 10/03/2024',
        },
        // Thêm nhiều voucher nếu cần
    ];

    return (
        <div className="voucher-display">
            <div className="main-voucher">
                <img src={mainVoucher.image} alt="Main Voucher" />
                <h2>{mainVoucher.description}</h2>
                <p>{mainVoucher.expiry}</p>
            </div>
            <div className="voucher-list">
                {vouchers.map((voucher, index) => (
                    <div className="voucher-item" key={index}>
                        <img src={voucher.image} alt={`Voucher ${index + 1}`} />
                        <h3>{voucher.description}</h3>
                        <p>{voucher.expiry}</p>
                    </div>
                ))}
            </div>
            <button className="get-more-button">Nhận thêm</button>
        </div>
    );
};

export default VoucherDisplay;