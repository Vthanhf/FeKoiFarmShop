import { useState, useEffect } from "react";
import { Table, Button, Modal, Form, Input, Space, Popconfirm } from "antd";
import "./Inventory.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import api from "../../config/axios";
import { toast } from "react-toastify";
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
import FormItem from "antd/es/form/FormItem";

const Package = () => {
  const [datas, setDatas] = useState([]);
  const [form] = Form.useForm();
  const [showModal, setshowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  // Get data
  const fetchData = async () => {
    try {
      const response = await api.get("koiPack/getAllKoiPack");
      setDatas(response.data);
      console.log("Fetched Data:", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Create or update package
  const handleSubmit = async (values) => {
    try {
        setLoading(true);
    
        const breederRequestList = [];
        if (values.breederRequestList) {
          for (const item of values.breederRequestList) {
            breederRequestList.push({
              breederName: item.breederName.trim(),
              breederPhone: item.breederPhone,
              breederAdd: item.breederAdd.trim(),
            });
          }
        }
      
        const varietyRequestList = [];
        if (values.varietyRequestList) {
          for (const item of values.varietyRequestList) {
            varietyRequestList.push({
              varietyName: item.varietyName.trim(),
              varietyDes: item.varietyDes.trim(),
            });
          }
        }
    

      const response = await api.post("koiPack/create", {
        ...values,
        breederRequestList: breederRequestList,
        varietyRequestList: varietyRequestList,
      });
      console.log(response.data);
      fetchData();
      toast.success("Thêm gói sản phẩm thành công!");
      form.resetFields();
      setshowModal(false);
    } catch (e) {
      toast.error(e.response.data || "Có lỗi xảy ra!");
    } finally {
      setLoading(false);
    }
  };

  // Delete package
  const handleDelete = async (koiPackId) => {
    if (!koiPackId) {
      toast.error("ID gói sản phẩm không hợp lệ!");
      return;
    }

    try {
      const response = await api.delete(`koiPack/delete/${koiPackId}`);
      console.log(response.data);
      toast.success("Xóa gói sản phẩm thành công!");
      fetchData();
    } catch (error) {
      console.error("Error deleting Koi Pack:", error);
      if (error.response) {
        toast.error(error.response.data || "An error occurred");
      } else {
        toast.error("An error occurred");
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Tên gói sản phẩm",
      dataIndex: "koiPackName",
    },
    {
      title: "Giới tính",
      dataIndex: "koiPackGender",
    },
    {
      title: "Năm sinh",
      dataIndex: "koiPackBorn",
    },
    {
      title: "Size",
      dataIndex: "koiPackSize",
    },
    {
      title: "Số lượng",
      dataIndex: "koiPackQuantity",
    },
    {
      title: "Giá tiền",
      dataIndex: "price",
    },
    {
      title: "Mô tả",
      dataIndex: "koiPackDes",
    },
    {
      title: "Tình trạng",
      dataIndex: "koiPackStatus",
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "id",
      render: (id, values) => (
        <Space direction="horizontal">
          <Button
            type="primary"
            onClick={() => {
              setshowModal(true);
              form.setFieldsValue(values);
            }}
          >
            Sửa
          </Button>
          <Popconfirm
            title="Bạn có chắc chắn muốn xóa?"
            onConfirm={() => handleDelete(id)}
          >
            <Button type="danger">Xóa</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Button className="custom-button green" onClick={() => setshowModal(true)}>
        <FontAwesomeIcon icon={faPlus} /> Tạo mới gói sản phẩm
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
      <Table dataSource={datas} columns={columns} />

      <Modal
        open={showModal}
        onCancel={() => setshowModal(false)}
        title="Cập nhật gói sản phẩm"
        onOk={() => form.submit()}
        confirmLoading={loading}
      >
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <FormItem name="koiPackId" hidden>
            <Input />
          </FormItem>
          <Form.Item
            name="koiPackName"
            label="Tên gói sản phẩm"
            rules={[{ required: true, message: "Không được để trống!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="koiPackGender"
            label="Giới tính"
            rules={[{ required: true, message: "Không được để trống!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="koiPackBorn"
            label="Năm sinh"
            rules={[{ required: true, message: "Không được để trống!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="koiPackSize"
            label="Size"
            rules={[{ required: true, message: "Không được để trống!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="koiPackQuantity"
            label="Số lượng"
            rules={[{ required: true, message: "Không được để trống!" }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            name="price"
            label="Giá tiền"
            rules={[{ required: true, message: "Không được để trống!" }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item name="koiPackDes" label="Mô tả">
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            name="koiPackStatus"
            label="Tình trạng"
            rules={[{ required: true, message: "Không được để trống!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="breederRequestList"
            label="Danh sách người nuôi"
            rules={[{ required: true, message: "Không được để trống!" }]}
          >
            <Input.TextArea placeholder='{"breederName": "string", "breederPhone": "08840884070|0|...", "breederAdd": "string"}' />
          </Form.Item>
          <Form.Item
            name="varietyRequestList"
            label="Danh sách giống"
            rules={[{ required: true, message: "Không được để trống!" }]}
          >
            <Input.TextArea placeholder='{"varietyName": "string", "varietyDes": "string"}' />
          </Form.Item>
          <Form.Item
            name="mediaRequestUrlList"
            label="Danh sách URL media"
          >
            <Input.TextArea />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Package;