/* eslint-disable no-unused-vars */
import React from 'react'
import { Card, Col, Button } from 'antd';

const CardProduct = ({product}) => {
  return (
  <>
   <Col  key={product?.id}>
      <Card className='img'
        hoverable
        cover={<img alt={product?.name} src={product?.image} />}
      >
        <Card.Meta title={product?.name} description={product?.price} />
        <Card.Meta description={"Trang trại: " + product?.breeder} />
        <Card.Meta description={"Giới tính: " + product?.sex} />
        <Card.Meta description={"Năm sinh: " + product?.born} />
        <Card.Meta description={"Size: " + product?.size} />
        <Card.Meta description={"Giống: " + product?.species} />
        <Button type="primary" style={{ marginTop: 16 }}>Mua ngay</Button>
      </Card>
    </Col>
  
  </>

  )
}

export default CardProduct