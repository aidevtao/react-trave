import React, { FC } from 'react'
import { Row, Col, Typography } from "antd";
import { SideMenu, Carousel, ProductCollection } from "../../components";
import { MainLayout } from '../../layouts/mainLayout'
import { productList1, productList2, productList3 } from './mockups'
import { sideImage1, sideImage2, sideImage3 } from '../../assets/images'

export const HomePage: FC = () => {
  return (
    <MainLayout>
      <Row>
        <Col span={6}><SideMenu /></Col>
        <Col span={18}><Carousel /></Col>
      </Row>
      <ProductCollection
        title={
          <Typography.Title level={3} type="warning">
            爆款推荐
          </Typography.Title>
        }
        sideImage={sideImage1}
        products={productList1}
      />
      <ProductCollection
        title={
          <Typography.Title level={3} type="danger">
            新品上市
          </Typography.Title>
        }
        sideImage={sideImage2}
        products={productList2}
      />
      <ProductCollection
        title={
          <Typography.Title level={3} type="success">
            国内游推荐
          </Typography.Title>
        }
        sideImage={sideImage3}
        products={productList3}
      />
    </MainLayout>
  )
}