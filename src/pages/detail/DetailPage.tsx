import React, { FC, useEffect } from 'react'
import { RouteProps, useParams } from 'react-router-dom'
// import axios from 'axios'
import { Spin, Row, Col, DatePicker, Button } from 'antd'
import styles from './DetailPage.module.css'
import { useSelector } from '../../redux/hooks'
import { useDispatch } from 'react-redux'
import { getProductDetail } from '../../redux/productDetail/slice'
import { MainLayout } from '../../layouts/mainLayout'
import { addShoppingCartItem } from '../../redux/shoppingCart/slice'

type MatchParams = {
  touristRouteId: string
}

export const DetailPage: FC<RouteProps> = () => {
  const dispatch = useDispatch()

  const { touristRouteId } = useParams<MatchParams>()

  const loading = useSelector(state => state.productDetail.loading)
  const error = useSelector(state => state.productDetail.error)
  const product = useSelector(state => state.productDetail.data)

  const RangePicker: any = DatePicker.RangePicker

  const jwt = useSelector((s) => s.user.token) as string
  const shoppingCartLoading = useSelector((s) => s.shoppingCart.loading)

  useEffect(() => {
    dispatch(getProductDetail(touristRouteId))
  }, [dispatch, touristRouteId])

  if (loading) {
    return (
      <Spin
        size='large'
        style={
          {
            marginTop: 200,
            marginBottom: 200,
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '100%'
          }
        }
      />
    )
  }
  if (error) {
    return (
      <div>网站报错：{error}</div>
    )
  }

  return (
    <MainLayout>
      {/* 产品简介 */}
      <div className={styles['product-intro-container']}>
        <Row>
          <Col span={13}>
            name :{product.name}
          </Col>
          <Col span={11}>
            <Button
              onClick={() => { dispatch(addShoppingCartItem({ jwt, touristRouteId: product.id })) }}
            >添加购物车</Button>
            {/* <RangePicker open /> */}
          </Col>
        </Row>
      </div>
      {/* 锚点菜单 */}
      <div className={styles['product-detail-anchor']}></div>
      {/* 产品特色 */}
      <div className={styles['product-detail-container']}></div>
    </MainLayout>
  )
}