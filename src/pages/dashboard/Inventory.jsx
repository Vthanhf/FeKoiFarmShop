/* eslint-disable no-unused-vars */
// path/to/Inventory.jsx
import React, { useState } from "react";
import { Table, Button, Modal, Form, Input, message } from "antd";

const Inventory = () => {
  const [dataSource, setDataSource] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form.validateFields().then((values) => {
      setDataSource([...dataSource, { key: Date.now(), ...values }]);
      setIsModalVisible(false);
      form.resetFields();
    });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleDelete = (key) => {
    setDataSource(dataSource.filter((item) => item.key !== key));
    message.success("Xóa sản phẩm thành công!");
  };

  const columns = [
    { title: "Mã sản phẩm", dataIndex: "code", key: "code" },
    { title: "Tên sản phẩm", dataIndex: "name", key: "name" },
    { title: "Số lượng", dataIndex: "quantity", key: "quantity" },
    { title: "Tình trạng", dataIndex: "status", key: "status" },
    { title: "Giá tiền", dataIndex: "price", key: "price" },
    { title: "Danh mục", dataIndex: "category", key: "category" },
    {
      title: "Chức năng",
      key: "action",
      render: (_, record) => (
        <Button type="link" onClick={() => handleDelete(record.key)}>
          Xóa
        </Button>
      ),
    },
  ];

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Tạo mới sản phẩm
      </Button>
      <Button type="primary" onClick={showModal}>
        Tải từ file
      </Button>
      <Button type="primary" onClick={showModal}>
      In dữ liệu
      </Button>
      <Button type="primary" onClick={showModal}>
      Sao chép
      </Button>
      <Button type="primary" onClick={showModal}>
      Xuất Excel
      </Button>
      <Button type="primary" onClick={showModal}>
      Xuất PDF
      </Button>
      <Button type="primary" onClick={showModal}>
      Xóa tất cả
      </Button>
      <Button type="primary" onClick={showModal}>
      Cá ký gửi
      </Button>
      <Table dataSource={dataSource} columns={columns} />

      <Modal
        title="Thêm sản phẩm"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="code"
            label="Mã sản phẩm"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="name"
            label="Tên sản phẩm"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="quantity"
            label="Số lượng"
            rules={[{ required: true }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            name="status"
            label="Tình trạng"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="price" label="Giá tiền" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="category"
            label="Danh mục"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Inventory;
