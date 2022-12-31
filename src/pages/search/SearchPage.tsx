import React, { FC, useEffect } from 'react'
import styles from './SearchPage.module.css'
import { FilterArea } from '../../components/'
import { ProductList } from '../../components/'
import { useParams, useLocation } from 'react-router-dom'
import { Spin } from 'antd'
import { searchProduct } from '../../redux/productSearch/slice'
import { useSelector } from '../../redux/hooks'
import { useDispatch } from 'react-redux'
import { MainLayout } from '../../layouts/mainLayout'


type MetchParams = {
  keywords: string | undefined;
}
export const SearchPage: FC = () => {
  const { keywords } = useParams<MetchParams>()

  const loading = useSelector(s => s.productSearch.loading)
  const error = useSelector(s => s.productSearch.error)
  const pagination = useSelector(s => s.productSearch.pagination)
  const productList = useSelector(s => s.productSearch.data)

  const dispatch = useDispatch()
  const location = useLocation()

  useEffect(() => {
    dispatch(searchProduct({ nextPage: 1, pageSize: 10, keywords }))
  }, [location, dispatch, keywords])

  const onPageChange = (nextPage, pageSize) => {
    dispatch(searchProduct({ nextPage, pageSize, keywords }))
  }

  if (loading) {
    return (
      <Spin
        size="large"
        style={{
          marginTop: 200,
          marginBottom: 200,
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
        }}
      />
    );
  }
  if (error) {
    return <div>网站出错：{error}</div>;
  }

  return (
    <MainLayout>
      <div className={styles['page-content']}>
        <div className={styles['product-list-container']}>
          <FilterArea />
        </div>
        <div className={styles['product-list-container']}>
          <ProductList
            data={productList}
            paging={pagination}
            onPageChange={onPageChange}
          />
        </div>
      </div>
    </MainLayout>
  )
}