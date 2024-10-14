// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Table, Button } from 'antd';

const Voucher = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [editingVoucher, setEditingVoucher] = useState(null);
    const [dataSource, setDataSource] = useState([
        {
            key: '1',
            code: 'VOUCHER1',
            discount: '10%',
            expiry: '2023-12-31',
        },
        {
            key: '2',
            code: 'VOUCHER2',
            discount: '20%',
            expiry: '2024-01-15',
        },
    ]);

    const showModal = () => {
        setEditingVoucher(null); // Reset editingVoucher khi mở modal
        setIsModalVisible(true);
    };

    const handleOk = () => {
        if (editingVoucher) {
            // Cập nhật voucher
            setDataSource(dataSource.map(voucher => 
                voucher.key === editingVoucher.key ? editingVoucher : voucher
            ));
        } else {
            // Tạo voucher mới
            const newVoucher = {
                key: `${dataSource.length + 1}`, // Tạo key mới
                code: '', // Giá trị mặc định
                discount: '', // Giá trị mặc định
                expiry: '', // Giá trị mặc định
            };
            setDataSource([...dataSource, newVoucher]); // Thêm voucher mới vào danh sách
            setEditingVoucher(newVoucher); // Cập nhật state với voucher mới
        }
        setIsModalVisible(false); // Ẩn modal
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleEdit = (key) => {
        const voucherToEdit = dataSource.find(voucher => voucher.key === key);
        setEditingVoucher(voucherToEdit);
        setIsModalVisible(true);
    };

    const handleInputChange = (e, field) => {
        const value = e.target.value;
        setEditingVoucher({ ...editingVoucher, [field]: value });
    };

    const columns = [
        {
            title: 'Voucher Code',
            dataIndex: 'code',
            key: 'code',
        },
        {
            title: 'Discount',
            dataIndex: 'discount',
            key: 'discount',
        },
        {
            title: 'Expiry Date',
            dataIndex: 'expiry',
            key: 'expiry',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Button type="primary" onClick={() => handleEdit(record.key)}>
                    Edit
                </Button>
            ),
        },
    ];

    return (
        <div>
            <h1>Voucher Management</h1>
            <Button type="primary" style={{ marginBottom: 16 }} onClick={showModal}>
                Create New Voucher
            </Button>
            {isModalVisible && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h2>{editingVoucher ? 'Chỉnh sửa thông tin voucher' : 'Nhập thông tin voucher'}</h2>
                        <input 
                            type="text" 
                            placeholder="Voucher Code" 
                            value={editingVoucher ? editingVoucher.code : ''} 
                            style={{ marginBottom: 5 }} 
                            onChange={(e) => handleInputChange(e, 'code')}
                        />
                        <input 
                            type="text" 
                            placeholder="Discount" 
                            value={editingVoucher ? editingVoucher.discount : ''} 
                            style={{ marginBottom: 5 }} 
                            onChange={(e) => handleInputChange(e, 'discount')}
                        />
                        <input 
                            type="date" 
                            placeholder="Expiry Date" 
                            value={editingVoucher ? editingVoucher.expiry : ''} 
                            style={{ marginBottom: 5 }} 
                            onChange={(e) => handleInputChange(e, 'expiry')}
                        />
                        <Button onClick={handleOk}>Xác nhận</Button>
                        <Button onClick={handleCancel}>Hủy</Button>
                    </div>
                </div>
            )}
            <Table dataSource={dataSource} columns={columns} />
        </div>
    );
};

export default Voucher;
