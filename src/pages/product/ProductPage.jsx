/* eslint-disable no-unused-vars */
// const products = [
//   { id: 1, name: 'Koi 1', price: '2,000,000đ', image: 'https://i.imgur.com/A1hsD3s.png' },
//   { id: 2, name: 'Koi 2', price: '3,000,000đ', image: 'https://i.imgur.com/VKPuhhi.png' },
//   { id: 3, name: 'Koi 3', price: '1,500,000đ', image: 'https://i.imgur.com/Q4n0Zlp.png' },
//   { id: 4, name: 'Koi 4', price: '2,500,000đ', image: 'link_to_image_4' },
//   { id: 5, name: 'Koi 5', price: '4,000,000đ', image: 'link_to_image_5' },
//   { id: 6, name: 'Koi 6', price: '3,500,000đ', image: 'link_to_image_6' },
// ];

// path/to/ProductPage.jsx
import React from 'react';
import { Layout, Menu, Card, Row, Col, Input, Button, Typography } from 'antd';
import { UserOutlined, PhoneOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import './productPage.css';
import CardProduct from '../../components/Card/CardProduct';

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

const products = [
  { id: 1, name: 'Goshiki – koi #w0729n005-w0203n009', price: '2,000,000đ', breeder: "Sài gòn Koi", sex: "Male", born: "2023", size: "13.00 inch/ 34.5 cm", species: "Goshiki", image: 'https://i.imgur.com/A1hsD3s.png' },
  { id: 2, name: 'Goshiki – koi #w0729n005-w0203n009', price: '2,000,000đ', breeder: "Sài gòn Koi", sex: "Male", born: "2023", size: "13.00 inch/ 34.5 cm", species: "Goshiki", image: 'https://i.imgur.com/A1hsD3s.png' },
  { id: 3, name: 'Goshiki – koi #w0729n005-w0203n009', price: '2,000,000đ', breeder: "Sài gòn Koi", sex: "Male", born: "2023", size: "13.00 inch/ 34.5 cm", species: "Goshiki", image: 'https://i.imgur.com/A1hsD3s.png' },
  { id: 4, name: 'Goshiki – koi #w0729n005-w0203n009', price: '2,000,000đ', breeder: "Sài gòn Koi", sex: "Male", born: "2023", size: "13.00 inch/ 34.5 cm", species: "Goshiki", image: 'https://i.imgur.com/A1hsD3s.png' },
  { id: 5, name: 'Goshiki – koi #w0729n005-w0203n009', price: '2,000,000đ', breeder: "Sài gòn Koi", sex: "Male", born: "2023", size: "13.00 inch/ 34.5 cm", species: "Goshiki", image: 'https://i.imgur.com/A1hsD3s.png' },
  { id: 6, name: 'Goshiki – koi #w0729n005-w0203n009', price: '2,000,000đ', breeder: "Sài gòn Koi", sex: "Male", born: "2023", size: "13.00 inch/ 34.5 cm", species: "Goshiki", image: 'https://i.imgur.com/A1hsD3s.png' },
  { id: 7, name: 'Goshiki – koi #w0729n005-w0203n009', price: '2,000,000đ', breeder: "Sài gòn Koi", sex: "Male", born: "2023", size: "13.00 inch/ 34.5 cm", species: "Goshiki", image: 'https://i.imgur.com/A1hsD3s.png' },
  { id: 8, name: 'Goshiki – koi #w0729n005-w0203n009', price: '2,000,000đ', breeder: "Sài gòn Koi", sex: "Male", born: "2023", size: "13.00 inch/ 34.5 cm", species: "Goshiki", image: 'https://i.imgur.com/A1hsD3s.png' },
];

const ProductPage = () => {
  return (
    <Layout>
      <Layout className='main-page'>
        <Sider width={200} className="site-layout-background">
          <Menu mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">Danh mục</Menu.Item>
            <Menu.SubMenu key="sub1" title="Loại Cá">
              <Menu.Item key="2">Kujyaku</Menu.Item>
              <Menu.Item key="3">Kin Showa</Menu.Item>
              <Menu.Item key="4">Kujyaku</Menu.Item>
              <Menu.Item key="5">Shiro Utsuri</Menu.Item>
              <Menu.Item key="6">Beni Kikokuryu</Menu.Item>
              <Menu.Item key="7">Asagi</Menu.Item>
              <Menu.Item key="8">Goshiki</Menu.Item>
              <Menu.Item key="9">Ginrin</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="sub2" title="Khoảng Giá">
              <Menu.Item key="10">Dưới 1 triệu</Menu.Item>
              <Menu.Item key="11">1 triệu - 2 triệu</Menu.Item>
              <Menu.Item key="12">Trên 2 triệu</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="sub3" title="Size Cá">
              <Menu.Item key="13">&lt; 10.00 inch</Menu.Item>
              <Menu.Item key="14">10.00 - 20.00 inch</Menu.Item>
              <Menu.Item key="15">&gt; 20cm</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="sub4" title="Cân Nặng Cá">
              <Menu.Item key="16">&lt; 6 kg</Menu.Item>
              <Menu.Item key="17">6 - 8 kg</Menu.Item>
              <Menu.Item key="18">&gt; 8 kg</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="sub5" title="Tuổi">
              <Menu.Item key="19">&lt; 25 năm</Menu.Item>
              <Menu.Item key="20">25 - 35 năm</Menu.Item>
              <Menu.Item key="21">&gt; 35 năm</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="sub6" title="Combo">
              <Menu.Item key="22">Combo 10 con</Menu.Item>
              <Menu.Item key="23">Combo 20 con</Menu.Item>
              <Menu.Item key="24">Combo tùy chọn</Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ padding: '24px' }}>
            <div style={{ marginBottom: 16 }}>
              <Title level={4}>Hàng Mới Về (999+ sản phẩm)</Title>
              <div>
                <Button type="primary" style={{ marginRight: 8 }}>Mới nhất</Button>
                <Button style={{ marginRight: 8 }}>Bán chạy</Button>
                <Button style={{ marginRight: 8 }}>Giá thấp đến cao</Button>
                <Button style={{ marginRight: 8 }}>Giá cao đến thấp</Button>
                <Button type="link" style={{ color: 'red' }}>Cá đắt giá</Button>
              </div>
            </div>
            <Row gutter={16} className='product'>
            {products.map((product) => (
                <CardProduct key={product.id} product={product}/>
              ))}
            </Row>
          </Content>
          
        </Layout>
      </Layout>
    </Layout>
  );
};

export default ProductPage;