import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Spin, Row, Col, DatePicker } from 'antd'
import { Header, Footer } from '../../components'
import styles from './Detail.module.css'

type MatchParams = {
  touristRouteId: string
}

export const DetailPage: FC = () => {
  const { touristRouteId } = useParams<MatchParams>()
  const [loading, setLoading] = useState<boolean>(true)
  const [product, setProduct] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  const RangePicker: any = DatePicker.RangePicker

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const data = await axios.get('https://094ea775-6e94-4bbe-a815-156e5348b9c5.mock.pstmn.io/search')
        setProduct(data)
        setLoading(false)

      } catch (error: any) {
        setError(error.message)
      }
    }
    fetchData()
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
            <Col span={13}></Col>
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