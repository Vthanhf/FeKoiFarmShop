/* eslint-disable no-unused-vars */
// path/to/Inventory.jsx
import React, { useState } from "react";
import { Table, Button, Modal, Form, Input, message } from "antd";
import "./Inventory.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faFileDownload,
  faPrint,
  faCopy,
  faFileExcel,
  faFilePdf,
  faTrash,
  faSignature,
} from "@fortawesome/free-solid-svg-icons";

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
    { title: "Ảnh", dataIndex: "image", key: "image", render: (text) => <img src={text} alt="product" style={{ width: 50, height: 50 }} /> },
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
      <Button className="custom-button green" onClick={showModal}>
        <FontAwesomeIcon icon={faPlus} /> Tạo mới sản phẩm
      </Button>
      <Button className="custom-button yellow" onClick={showModal}>
        <FontAwesomeIcon icon={faFileDownload} /> Tải từ file
      </Button>
      <Button className="custom-button purple" onClick={showModal}>
        <FontAwesomeIcon icon={faPrint} /> In dữ liệu
      </Button>
      <Button className="custom-button blue" onClick={showModal}>
        <FontAwesomeIcon icon={faCopy} /> Sao chép
      </Button>
      <Button className="custom-button green" onClick={showModal}>
        <FontAwesomeIcon icon={faFileExcel} /> Xuất Excel
      </Button>
      <Button className="custom-button pink" onClick={showModal}>
        <FontAwesomeIcon icon={faFilePdf} /> Xuất PDF
      </Button>
      <Button className="custom-button gray" onClick={showModal}>
        <FontAwesomeIcon icon={faTrash} /> Xóa tất cả
      </Button>
      <Button className="custom-button pink" onClick={showModal}>
        <FontAwesomeIcon icon={faSignature} /> Cá ký gửi
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
