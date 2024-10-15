/* eslint-disable no-unused-vars */
// path/to/Inventory.jsx
import React, { useState, useEffect } from "react";
import { Table, Button, Modal, Form, Input, message } from "antd";
import "./Inventory.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
//npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons
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
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get('koi/getAllKoi');
      setDataSource(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      message.error('Failed to fetch products');
      setLoading(false);
    }
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form.validateFields().then(async (values) => {
      try {
        setLoading(true);
        const response = await axios.post('koi/createKoi');
        setDataSource([...dataSource, response.data]);
        setIsModalVisible(false);
        form.resetFields();
        message.success('Sản phẩm đã được tạo thành công!');
      } catch (error) {
        console.error('Error creating product:', error);
        message.error('Failed to create product');
      } finally {
        setLoading(false);
      }
    });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleDelete = async (key) => {
    try {
      setLoading(true);
      await axios.delete(`koi/${key}`);
      setDataSource(dataSource.filter((item) => item.key !== key));
      message.success("Xóa sản phẩm thành công!");
    } catch (error) {
      console.error('Error deleting product:', error);
      message.error('Failed to delete product');
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    { title: "Mã sản phẩm", dataIndex: "code", key: "code" },
    { title: "Tên sản phẩm", dataIndex: "name", key: "name" },
    {
      title: "Ảnh",
      dataIndex: "image",
      key: "image",
      render: (text) => (
        <img src={text} alt="product" style={{ width: 50, height: 50 }} />
      ),
    },
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
      <Button className="custom-button yellow">
        <FontAwesomeIcon icon={faFileDownload} /> Tải từ file
      </Button>
      <Button className="custom-button purple">
        <FontAwesomeIcon icon={faPrint} /> In dữ liệu
      </Button>
      <Button className="custom-button blue">
        <FontAwesomeIcon icon={faCopy} /> Sao chép
      </Button>
      <Button className="custom-button green">
        <FontAwesomeIcon icon={faFileExcel} /> Xuất Excel
      </Button>
      <Button className="custom-button pink">
        <FontAwesomeIcon icon={faFilePdf} /> Xuất PDF
      </Button>
      <Button className="custom-button gray">
        <FontAwesomeIcon icon={faTrash} /> Xóa tất cả
      </Button>
      <Button className="custom-button pink">
        <FontAwesomeIcon icon={faSignature} /> Cá ký gửi
      </Button>
      <Table loading={loading} dataSource={dataSource} columns={columns} />

      <Modal
        title="Thêm sản phẩm"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        confirmLoading={loading}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="koiName"
            label="Tên cá Koi"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="koiSize"
            label="Size"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="koiBorn"
            label="Năm sinh"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="koiGender"
            label="Giới tính"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item 
            name="price" 
            label="Giá tiền" 
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="koiDes"
            label="Danh mục"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="koiPrize"
            label="Giải thưởng"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="koiStatus"
            label="Status"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="breederName"
            label="Trang trại"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="varietyName"
            label="Loài cá"
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
