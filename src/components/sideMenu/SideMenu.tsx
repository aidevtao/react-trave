import React, { FC, ReactNode } from 'react'
import styles from './SideMenu.module.css'
import { sideMenuList as sideMenuListMock } from './mockup'
import { Menu, MenuProps } from 'antd'
import { GifOutlined } from '@ant-design/icons'

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: ReactNode,
  key?: React.Key | null,
  icon?: ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

let idRoot = 0
// !思考过程，已经不需要了
const data = sideMenuListMock.map((item, indexroot) => {
  return {
    label: item.title,
    key: idRoot++,
    children: [...item.subMenu.map((item, index) => {
      return {
        label: item.title,
        key: idRoot++,
        children: [
          ...item.subMenu.map((item, index) => {
            return {
              label: item,
              icon: <GifOutlined />,
              key: idRoot++
            }
          })
        ]
      }
    })]
  }
})
const menuDataHandle = (arrRouter) => {
  if (typeof arrRouter[0] === 'string') {
    return [
      ...arrRouter.map((item) => {
        return getItem(item, idRoot++, <GifOutlined />)
      })
    ]
  }
  return [...arrRouter.map(item => {
    return getItem(item.title, idRoot++, null, menuDataHandle(item.subMenu))
  })]
}
const menuData = menuDataHandle(sideMenuListMock)


export const SideMenu: FC = () => {
  return (
    <Menu mode='vertical' items={menuData} className={styles['side-menu']} />
  )
}