// path/to/Inventory.jsx
import { useState, useEffect } from "react";
import {
  Table,
  Button,
  Modal,
  Form,
  Input,
  Space,
  Popconfirm,
  AutoComplete,
  Upload,
  Image,
} from "antd";
import uploadFile from "/FE-SWP/FeKoiFarmShop/src/utils/file";
import { PlusOutlined } from "@ant-design/icons";
import "./Inventory.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import api from "../../config/axios";
import { toast } from "react-toastify";
//import uploadFile
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
  const [loading, setLoading] = useState(false);
  const options = [
    {
      value: "Dainichi farm",
    },
    {
      value: "KoiQ2",
    },
    {
      value: "KoiQ3",
    },
    {
      value: "Koi Thủ Đức",
    },
    {
      value: "Koi Farm Shop",
    },
  ];
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");

  const [fileList, setFileList] = useState([]);

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
  //create update
  const handleSubmit = async (values) => {
    if (fileList.length > 0) {
      const file = fileList[0];
      console.log(file);
      const url = await uploadFile(file.originFileObj);
      values.url = url; //value.(khai báo theo BE/ BE khai báo là url)
    }

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

  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

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

  useEffect(() => {
    fetchData();
  }, []);
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Image",
      dataIndex: "url",
      render: (url) => (
        <Image src={url} alt="product" style={{ width: 100, height: 100 }} />
      ),
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

  return (
    <>
      <Button
        className="custom-button green"
        onClick={() => setshowModal(true)}
      >
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
      <Table dataSource={datas} columns={columns} />

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
            <AutoComplete
              style={{
                width: 200,
              }}
              options={options}
              placeholder="Breeder Name"
              filterOption={(inputValue, option) =>
                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
                -1
              }
            />
          </Form.Item>
          <Form.Item
            name="varietyName"
            label="Loại cá"
            rules={[{ required: true, message: "Không được để trống!" }]}
          >
            <Input />
          </Form.Item>
          <FormItem label="image" name="image">
            <Upload
              action="http://14.225.212.6:8080/api/media/create"
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
            >
              {fileList.length >= 8 ? null : uploadButton}
            </Upload>
          </FormItem>
        </Form>
      </Modal>

      {previewImage && (
        <Image
          wrapperStyle={{ display: "none" }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(""),
          }}
          src={previewImage}
        />
      )}
    </>
  );
};

export default Inventory;
