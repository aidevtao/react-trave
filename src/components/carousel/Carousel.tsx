import React, { FC } from 'react'
import { Carousel as AntdCarousel, Image } from 'antd'
import styles from './Carousel.module.css'
import { carouselImage1, carouselImage2, carouselImage3 } from '../../assets/images'

export const Carousel: FC = () => {
  return (
    <AntdCarousel autoplay className={styles.carousel}>
      <Image src={carouselImage1} />
      <Image src={carouselImage2} />
      <Image src={carouselImage3} />
    </AntdCarousel>
  )
}