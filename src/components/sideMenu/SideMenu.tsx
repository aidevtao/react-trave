import React, { FC } from 'react'
import styles from './SideMenu.module.css'
import { sideMenuList } from './mockup'
import { Menu } from 'antd'
import { GifOutlined } from '@ant-design/icons'

export const SideMenu: FC = () => {
  return (
    <Menu mode='vertical' className={styles['side-menu']}>
      {
        sideMenuList.map((m, index) => (
          <Menu.SubMenu
            key={`side-menu-${index}`}
            title={<span>{m.title}</span>}
          >
            {m.subMenu.map((sm, index) => (
              <Menu.SubMenu
                key={`sub-menu-${index}`}
                title={sm.title}
              >
                {sm.subMenu.map((sms, index) => (
                  <Menu.Item
                    key={`sub-sub-menu-${index}`}
                  >
                    <span><GifOutlined />{sms}</span>
                  </Menu.Item>
                ))}
              </Menu.SubMenu>
            ))}
          </Menu.SubMenu>
        ))
      }
    </Menu>
  )
}