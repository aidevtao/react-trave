import React, { FC, useEffect } from 'react'
import { RouteProps, useParams } from 'react-router-dom'
// import axios from 'axios'
import { Spin, Row, Col, DatePicker } from 'antd'
import { Header, Footer } from '../../components'
import styles from './DetailPage.module.css'
import { useSelector } from '../../redux/hooks'
import { useDispatch } from 'react-redux'
import { getProductDetail } from '../../redux/productDetail/slice'

type MatchParams = {
  touristRouteId: string
}

export const DetailPage: FC<RouteProps> = () => {
  const { touristRouteId } = useParams<MatchParams>()
  const loading = useSelector(state => state.productDetail.loading)
  const error = useSelector(state => state.productDetail.error)
  const product = useSelector(state => state.productDetail.data)
  const RangePicker: any = DatePicker.RangePicker
  const dispatch = useDispatch()

  useEffect(() => {
    // const fetchData = async () => {
    //   // dispatch(productDetailSlice.actions.fetchStart())
    //   // try {
    //   //   const { data } = await axios.get('https://4c15ac23-f59b-4392-9db2-b9b3193aee9a.mock.pstmn.io')
    //   //   dispatch(productDetailSlice.actions.fetchSuccess(data))
    //   // } catch (error: any) {
    //   //   dispatch(productDetailSlice.actions.fetchFail(error))
    //   // }
    // }
    // fetchData()
    dispatch(getProductDetail(touristRouteId))
  }, [])

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
    <div>
      <Header />
      <div className={styles['page-content']}>
        {/* 产品简介 */}
        <div className={styles['product-intro-container']}>
          <Row>
            <Col span={13}>
              name :{product.name}
            </Col>
            <Col span={11}>
              <RangePicker open />
            </Col>
          </Row>
        </div>
        {/* 锚点菜单 */}
        <div className={styles['product-detail-anchor']}></div>
        {/* 产品特色 */}
        <div className={styles['product-detail-container']}></div>
      </div>
      <Footer />
    </div>
  )
}