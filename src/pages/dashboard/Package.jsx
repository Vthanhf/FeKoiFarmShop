
// path/to/Package.jsx
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

const Package = () => {
  const [datas, setDatas] = useState([]);
  const [form] = Form.useForm();
  const [showModals, setshowModals] = useState(false);
  const [loading, setLoading] = useState(false);

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


  //create update Koi pack
  const handleSubmitPack = async (values) => {
    try {
        setLoading(true);
  
        // Tạo danh sách breederRequestList từ trường nhập liệu
        const breederRequestList = values.breederRequestList.split(',').map(item => {
            const [name, phone, address] = item.split('|'); // Tách thông tin theo dấu '|'
            return {
                breederName: name.trim(),
                breederPhone: phone.trim(),
                breederAdd: address.trim(),
            };
        });
  
        // Tạo danh sách varietyRequestList từ trường nhập liệu
        const varietyRequestList = values.varietyRequestList.split(',').map(item => {
            const [name, description] = item.split('|'); // Tách thông tin theo dấu '|'
            return {
                varietyName: name.trim(),
                varietyDescription: description.trim(),
            };
        });
  
        const response = await api.post("koiPack/create", {
            ...values,
            breederRequestList: breederRequestList, // Gửi danh sách breederRequestList
            varietyRequestList: varietyRequestList, // Gửi danh sách varietyRequestList
        });
  
        console.log(response);
        toast.success("Thêm sản phẩm thành công!");
        fetchKoiPackData(); // Cập nhật dữ liệu
        form.resetFields(); // Reset form
        setshowModals(false); // Đóng modal
    } catch (e) {
        toast.error(e.response.data || "Có lỗi xảy ra!"); // Hiển thị thông báo lỗi
    } finally {
        setLoading(false);
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
    fetchKoiPackData();
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
              setshowModals(true);
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
      <Table dataSource={datas} columnss={columnss} />

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
            name="breederRequestList"
            label="Danh sách trang trại"
            rules={[{ required: true, message: 'Không được để trống!' }]}
        >
            <Input.TextArea placeholder="Nhập tên trang trại| số điện thoại| địa chỉ, cách nhau bằng dấu phẩy." />
        </Form.Item>
        <Form.Item
            name="varietyRequestList"
            label="Danh sách loại cá"
            rules={[{ required: true, message: 'Không được để trống!' }]}
        >
            <Input.TextArea placeholder="Nhập tên  mô tả loại cá, cách nhau bằng dấu phẩy." />
        </Form.Item>
        <Form.Item
            name="mediaRequestUrlList"
            label="URL hình ảnh"
        >
            <Input.TextArea placeholder="Nhập các URL hình ảnh, cách nhau bằng dấu phẩy." />
        </Form.Item>
    </Form>
</Modal>
    </>
  );
};

export default Package;
