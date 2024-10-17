/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { Card, Col, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import api from '../../config/axios';

const CardProduct = ({product}) => {
  const navigate = useNavigate(); // Khởi tạo useNavigate
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

  const handleCardClick = () => {
    navigate(`/v/detail/${product.koiId}`); // Chuyển hướng đến trang chi tiết sản phẩm
  };

  return (
    <Col key={product.koiId}>
      <Card 
        className='img'
        hoverable
        onClick={handleCardClick}
        cover={<img alt={product.koiName} src={product.url} />}
        styles={{ body: { backgroundColor: 'white', padding: '16px' } }} // Updated here
      >
        <Card.Meta title={product.koiName} description={product.price} />
        <Card.Meta description={"Trang trại: " + product.breeder} />
        <Card.Meta description={"Giới tính: " + product.koiGender} />
        <Card.Meta description={"Năm sinh: " + product.koiBorn} />
        <Card.Meta description={"Size: " + product.koiSize} />
        <Card.Meta description={"Giống: " + product.species} />
        
        <Button type="primary" style={{ marginTop: 16 }}>Mua ngay</Button>
      </Card>
    </Col>
  );
}

CardProduct.propTypes = {
  product: PropTypes.shape({
    koiId: PropTypes.number,
    koiName: PropTypes.string,
    url: PropTypes.string,
    price: PropTypes.string,
    breeder: PropTypes.string,
    koiGender: PropTypes.string,
    koiBorn: PropTypes.string,
    koiSize: PropTypes.string,
    species: PropTypes.string,
  }).isRequired,
};

export default CardProduct
