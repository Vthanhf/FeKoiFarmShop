


// path/to/Inventory.jsx
import { useState, useEffect } from "react";
import { Table, Button, Modal, Form, Input, Space, Popconfirm } from "antd";
import "./Inventory.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import api from "../../config/axios";
import { toast } from "react-toastify";
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
import FormItem from "antd/es/form/FormItem";

const Inventory = () => {
  const [datas, setDatas] = useState([]);
  const [form] = Form.useForm();
  const [showModal, setshowModal] = useState(false);
  const [showModals, setshowModals] = useState(false);
  const [loading, setLoading] = useState(false);

  //Get
  const fetchData = async () => {
    try {
      const response = await api.get("koi/getAllKoi");
      setDatas(response.data);
      console.log("Fetched Data:", response.data);
    } catch (error) {
      console.log(error);
      //toast.error(error.response.data);
    }
  };

  //GET Koi pack
  const fetchKoiPackData = async () => {
    try {
      const response = await api.get("koiPack/getAll");
      setDatas(response.data); // Giả sử bạn muốn cập nhật dữ liệu tương tự như với Koi
      console.log("Fetched Koi Pack Data:", response.data);
    } catch (error) {
      console.log(error);
      //toast.error(error.response.data);
    }
  };

  //create update
  const handleSubmit = async (values) => {
    try {
      setLoading(true);

      if (values.koiId) {
        const response = await api.put(`koi/update/${values.koiId}`, values);
        console.log(response);
      } else {
        const response = await api.post("koi/createKoi", values);
        console.log(response);
      }

      toast.success("Thêm sản phẩm thành công!");
      fetchData();
      form.resetFields();
      setshowModal(false);
    } catch (e) {
      toast.error(e.response.data);
    } finally {
      setLoading(false);
    }
  };


  //create update Koi pack
  const handleSubmitPack = async (values) => {
    try {
      setLoading(true);

      if (values.koiPackId) {
        const response = await api.put(`koiPack/Update/${values.koiPackId}`, values);
        console.log(response);
      } else {
        const response = await api.post("koiPack/create", values);
        console.log(response);
      }

      toast.success("Thêm sản phẩm thành công!");
      fetchData();
      form.resetFields();
      setshowModal(false);
    } catch (e) {
      toast.error(e.response.data);
    } finally {
      setLoading(false);
    }
  };

  //delete
  const handleDelete = async (koiId) => {
    if (!koiId) {
      toast.error("ID sản phẩm không hợp lệ!"); // Thông báo nếu koiId không hợp lệ
      return; // Dừng hàm nếu koiId không hợp lệ
    }

    try {
      console.log("Deleting Koi with ID:", koiId); // Log ID để kiểm tra
      const response = await api.delete(`koi/${koiId}`);
      console.log(response.data);
      toast.success("Xóa sản phẩm thành công!");
      fetchData(); // Gọi lại hàm fetchData để cập nhật danh sách
    } catch (error) {
      console.error("Error deleting Koi:", error); // Log lỗi để kiểm tra
      if (error.response) {
        console.error("Error response data:", error.response.data);
        toast.error(error.response.data || "An error occurred");
      } else {
        toast.error("An error occurred");
      }
    }
  };

  //delete Koi pack
  const handleDeletePack = async (koiPackId) => {
    if (!koiPackId) {
      toast.error("ID sản phẩm không hợp lệ!"); // Thông báo nếu koiId không hợp lệ
      return; // Dừng hàm nếu koiId không hợp lệ
    }

    try {
      console.log("Deleting Koi with ID:", koiPackId); // Log ID để kiểm tra
      const response = await api.delete(`koiPack/delete/${koiPackId}`);
      console.log(response.data);
      toast.success("Xóa sản phẩm thành công!");
      fetchKoiPackData(); // Gọi lại hàm fetchData để cập nhật danh sách
    } catch (error) {
      console.error("Error deleting Koi:", error); // Log lỗi để kiểm tra
      if (error.response) {
        console.error("Error response data:", error.response.data);
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
      title: "Tên cá Koi",
      dataIndex: "koiName",
    },
    {
      title: "Size",
      dataIndex: "koiSize",
    },
    {
      title: "Năm sinh",
      dataIndex: "koiBorn",
    },
    {
      title: "Giới tính",
      dataIndex: "koiGender",
    },
    {
      title: "Giá tiền",
      dataIndex: "price",
    },
    {
      title: "Mô tả",
      dataIndex: "koiDes",
    },
    {
      title: "Giải thưởng",
      dataIndex: "koiPrize",
    },
    {
      title: "Tình trạng",
      dataIndex: "koiStatus",
    },
    {
      title: "Tên trang trại",
      dataIndex: "breederName",
    },
    {
      title: "Loại cá",
      dataIndex: "varietyName",
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
              //handleUpdate(values);
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

  useEffect(() => {
    fetchData();
  }, []);
  const columnss = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Tên gói cá Koi",
      dataIndex: "koiPackName",
    },
    {
      title: "Giới tính gói cá Koi",
      dataIndex: "koiPackGender",
    },
    {
      title: "Năm sinh gói cá Koi",
      dataIndex: "koiPackBorn",
    },
    {
      title: "Size gói cá Koi",
      dataIndex: "koiPackSize",
    },
    {
      title: "Số lượng gói cá Koi",
      dataIndex: "koiPackQuantity",
    },
    {
      title: "Tình trạng gói cá Koi",
      dataIndex: "koiPackStatus",
    },
    {
      title: "Giá tiền",
      dataIndex: "price",
    },
    {
      title: "Mô tả gói cá Koi",
      dataIndex: "koiPackDes",
    },
    {
      title: "Tên trang trại",
      dataIndex: "breederRequestList",
      render: (breederRequestList) => (
        <span>
          {breederRequestList.map((breeder) => breeder.breederName).join(", ")}
        </span>
      ),
    },
    {
      title: "Loại cá",
      dataIndex: "varietyRequestList",
      render: (varietyRequestList) => (
        <span>
          {varietyRequestList.map((variety) => variety.varietyName).join(", ")}
        </span>
      ),
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
              //handleUpdate(values);
            }}
          >
            Sửa
          </Button>

          <Popconfirm
            title="Bạn có chắc chắn muốn xóa?"
            onConfirm={() => handleDeletePack(id)}
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
        <FontAwesomeIcon icon={faPlus} /> Tạo mới sản phẩm</Button>
      <Button className="custom-button blue" onClick={() =>  setshowModals(true)}
      >
        <FontAwesomeIcon icon={faPlus} /> Thêm mới sản phẩm Koi Pack
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
      <Table dataSource={datas} columnss={columnss} />

      <Modal
        open={showModal}
        onCancel={() => setshowModal(false)}
        title="Cập nhật sản phẩm"
        onOk={() => form.submit()}
        confirmLoading={loading}
      >
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <FormItem name="koiId" hidden>
            <Input />
          </FormItem>
          <Form.Item
            name="koiName"
            label="Tên cá Koi"
            rules={[{ required: true, message: "Không được để trống!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="koiSize"
            label="Size"
            rules={[{ required: true, message: "Không được để trống!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="koiBorn"
            label="Năm sinh"
            rules={[{ required: true, message: "Không được để trống!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="koiGender"
            label="Giới tính"
            rules={[{ required: true, message: "Không được để trống!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="price"
            label="Giá tiền"
            rules={[{ required: true, message: "Không được để trống!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="koiDes" label="Mô tả">
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            name="koiPrize"
            label="Giải thưởng"
            rules={[{ required: true, message: "Không được để trống!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="koiStatus"
            label="Tình trạng"
            rules={[{ required: true, message: "Không được để trống!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="breederName"
            label="Tên trang trại"
            rules={[{ required: true, message: "Không được để trống!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="varietyName"
            label="Loại cá"
            rules={[{ required: true, message: "Không được để trống!" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        open={showModals}
        onCancel={() => setshowModals(false)}
        title="Cập nhật gói sản phẩm Koi"
      onOk={() => form.submit()}
        confirmLoading={loading}
>
    <Form form={form} layout="vertical" onFinish={handleSubmitPack}>
        <FormItem name="koiPackId" hidden>
            <Input />
        </FormItem>
        <Form.Item
            name="koiPackName"
            label="Tên gói cá Koi"
            rules={[{ required: true, message: 'Không được để trống!' }]}
        >
            <Input />
        </Form.Item>
        <Form.Item
            name="koiPackSize"
            label="Size"
            rules={[{ required: true, message: 'Không được để trống!' }]}
        >
            <Input />
        </Form.Item>
        <Form.Item
            name="koiPackBorn"
            label="Năm sinh"
            rules={[
                { required: true, message: 'Không được để trống!' },
            ]}
        >
            <Input />
        </Form.Item>
        <Form.Item
            name="koiPackGender"
            label="Giới tính"
            rules={[{ required: true, message: 'Không được để trống!' }]}
        >
            <Input />
        </Form.Item>
        <Form.Item 
            name="price" 
            label="Giá tiền" 
            rules={[
                { required: true, message: 'Không được để trống!' },
            ]}
        >
            <Input />
        </Form.Item>
        <Form.Item
            name="koiPackDes"
            label="Mô tả"
        >
            <Input.TextArea />
        </Form.Item>

        <Form.Item
            name="koiPackStatus"
            label="Tình trạng"
            rules={[{ required: true, message: 'Không được để trống!' }]}
        >
            <Input />
        </Form.Item>
        <Form.Item
            name="breederName"
            label="Danh sách trang trại"
            rules={[{ required: true, message: 'Không được để trống!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
            name="breederPhone"
            label="Số điện thoại"
            rules={[{ required: true, message: 'Không được để trống!' }]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            name="breederAdd"
            label="Địa chỉ"
            rules={[{ required: true, message: 'Không được để trống!' }]}
        >
            <Input />
        </Form.Item>    

        <Form.Item
            name="varietyName"
            label="Tên cá"
            rules={[{ required: true, message: 'Không được để trống!' }]}
        >
            <Input />
        </Form.Item>


        <Form.Item
            name="varietyDes"
            label="Mô tả"
            rules={[{ required: true, message: 'Không được để trống!' }]}
        >
            <Input />
        </Form.Item>
    </Form>
  </Modal>
    </>
  );
};

export default Inventory;
