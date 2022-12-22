import React, { FC, useState } from 'react'
import styles from './Header.module.css'

import {
  Input,
  Layout,
  Typography,
  Dropdown,
  Button,
  Menu,
} from 'antd'
import type { MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom'
import { GlobalOutlined } from "@ant-design/icons";
import logo from '../../assets/logo.svg';

export const Header: FC = () => {
  // const language = useSelector((state: LanguageState) => state.language)
  // const languageList = useSelector((state: LanguageState) => state.languageList)
  // const state = {
  //   language,
  //   languageList,
  // }
  const navigate = useNavigate()
  const [languagePlaceHold, setLanguagePlaceHold] = useState('中文')

  const menuItems = [
    { label: '菜单项一', key: 'item-1' }, // 菜单项务必填写 key
    { label: '菜单项二', key: 'item-2' },
  ]
  const languageItems: MenuProps['items'] = [
    { label: '中文', key: 'cn' },
    { label: 'English', key: 'english' },
  ]
  const languageClick: MenuProps['onClick'] = ({ key, keyPath, domEvent }) => {
    setLanguagePlaceHold(key === 'cn' ? '中文' : 'english')
  }
  return (
    <div className={styles['app-header']}>
      <div className={styles['top-header']}>
        <div className={styles['top-header-logo']}>
          <Typography.Text className={styles['top-header-logo-purpose']}>
            让旅游更幸福
          </Typography.Text>
          <Dropdown.Button
            // open={dropdownIsOpen}
            menu={{
              items: languageItems,
              onClick: languageClick
            }}
            icon={<GlobalOutlined />}
            className={styles['top-header-logo-language']}
          >
            <span className={styles['top-header-language-placehold']}>{languagePlaceHold}</span>
          </Dropdown.Button>
        </div>
        <div className={styles['top-header-user']}>
          <Button.Group className={styles['button-group']}>
            <Button onClick={() => navigate('signIn')}>登陆</Button>
            <Button onClick={() => navigate('register')}>注册</Button>
          </Button.Group>
        </div>
      </div>
      <Layout.Header className={styles['main-header']}>
        <span onClick={() => navigate('/')}>
          <img src={logo} className={styles['App-logo']} alt="" />
          <Typography.Title level={3} className={styles.title}>
            react 旅游网
          </Typography.Title>
        </span>
        <Input.Search
          placeholder='请输入旅游目的地、主题、或关键字'
          className={styles['search-input']}
          onSearch={(keywords) => navigate('/search/' + keywords)}
        />
      </Layout.Header>
      <Menu items={menuItems} mode='horizontal' className={styles['main-menu']} />
    </div>)
}