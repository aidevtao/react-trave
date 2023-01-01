import { Col, Row } from 'antd'
import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import { CheckOutCard } from '../../components/checkOutCard'
import { PaymentForm } from '../../components/paymentForm'
import { MainLayout } from '../../layouts/mainLayout'
import { useSelector } from '../../redux/hooks'
import { placeOrder } from '../../redux/order/slice'

export const PlaceOrderPage: FC = () => {
  const dispatch = useDispatch()
  const jwt = useSelector((s) => s.user.token) as string
  const loading = useSelector((s) => s.order.loading)
  const order = useSelector((s) => s.order.currentOrder)
  return (
    <MainLayout>
      <Row>
        <Col span={12}>
          <PaymentForm />
        </Col>
        <Col span={12}>
          <CheckOutCard
            loading={loading}
            order={order}
            onCheckout={() => {
              dispatch(placeOrder({ jwt, orderId: order.id }))
            }}
          />
        </Col>
      </Row>
    </MainLayout>
  )
}
