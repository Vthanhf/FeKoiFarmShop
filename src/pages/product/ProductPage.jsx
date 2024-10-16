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
import React, { useState, useEffect } from 'react';
import { Layout, Menu, Card, Row, Col, Button, Typography } from 'antd';
import api from '../../config/axios';
import CardProduct from '../../components/Card/CardProduct';

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await api.get('koi/getAllKoi');

        // Convert price to string format
        const formattedProducts = response.data.map(product => ({
          ...product,
          price: `${product.price.toLocaleString()}đ` // Format price as string
        }));

        setProducts(Array.isArray(formattedProducts) ? formattedProducts : []);
      } catch (err) {
        setError('Failed to fetch products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const menuItems = [
    { key: "1", label: "Danh mục" },
    {
      key: "sub1",
      label: "Loại Cá",
      children: [
        { key: "2", label: "Kujyaku" },
        { key: "3", label: "Kin Showa" },
        { key: "4", label: "Kujyaku" },
        { key: "5", label: "Shiro Utsuri" },
        { key: "6", label: "Beni Kikokuryu" },
        { key: "7", label: "Asagi" },
        { key: "8", label: "Goshiki" },
        { key: "9", label: "Ginrin" },
      ],
    },
    // Add other submenus similarly
  ];

  return (
    <Layout>
      <Layout className='main-page'>
        <Sider width={200} className="site-layout-background">
          <Menu mode="inline" defaultSelectedKeys={['1']} items={menuItems} />
        </Sider>
        <Layout>
          <Content style={{ padding: '24px' }}>
            <div style={{ marginBottom: 16 }}>
              <Title level={4}>Hàng Mới Về</Title>
              <div>
                <Button type="primary" style={{ marginRight: 8 }}>Mới nhất</Button>
                <Button style={{ marginRight: 8 }}>Bán chạy</Button>
                <Button style={{ marginRight: 8 }}>Giá thấp đến cao</Button>
                <Button style={{ marginRight: 8 }}>Giá cao đến thấp</Button>
                <Button type="link" style={{ color: 'red' }}>Cá đắt giá</Button>
              </div>
            </div>
            <Row gutter={16} className='product'>
              {loading ? (
                <Col span={24}><div>Loading...</div></Col>
              ) : error ? (
                <Col span={24}><div>{error}</div></Col>
              ) : Array.isArray(products) && products.length > 0 ? (
                products.map((product) => (
                  <CardProduct key={product.id} product={product} />
                ))
              ) : (
                <Col span={24}><div>No products found.</div></Col>
              )}
            </Row>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default ProductPage;
