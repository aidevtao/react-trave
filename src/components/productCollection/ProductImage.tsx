import { Image, Typography } from 'antd';
import React, { FC } from 'react'
import { Link } from 'react-router-dom';

interface PropsType {
  title: string;
  id: string | number;
  size: 'large' | 'small';
  imageSrc: string;
  price: number | string
}

export const ProductImage: FC<PropsType> = ({ title, id, size, imageSrc, price }) => {

  return (
    <Link to={`detail/${id}`}>
      {
        size === 'large'
          ? (<Image src={imageSrc} height={285} width={450} />)
          : (<Image width={220} height={120} src={imageSrc} />)
      }
      <div>
        <Typography.Text type='secondary'>{title.slice(0, 25)}</Typography.Text>
        <Typography.Text type='danger' strong>¥ {price} 起</Typography.Text>
      </div>
    </Link>
  )
}