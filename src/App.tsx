import React, { useState } from 'react';
import { Input, Layout, Typography, Dropdown, Button } from 'antd'
import type { MenuProps } from 'antd';
import { GlobalOutlined } from "@ant-design/icons";
import logo from './logo.svg';
import styles from './App.module.css';


function App() {
  const [languagePlaceHold, setLanguagePlaceHold] = useState('语言')

  const languageItems: MenuProps['items'] = [
    { label: '中文', key: 'cn', icon: <GlobalOutlined /> },
    { label: 'English', key: 'english' },
  ]
  const languageClick: MenuProps['onClick'] = ({ key, keyPath, domEvent }) => {
    console.log(keyPath, domEvent);

    setLanguagePlaceHold(key === 'cn' ? '中文' : 'english')
  }
  return (
    <div className={styles.App}>
      <div className={styles['app-header']}>
        <div className={styles['top-header']}>
          <div>
            <Typography.Text>
              让旅游更幸福
            </Typography.Text>
            <Dropdown menu={{ items: languageItems, onClick: languageClick }} >
              <a>{languagePlaceHold}</a>
            </Dropdown>
          </div>
          <div>
            <Button.Group className={styles['button-group']}>
              <Button>登陆</Button>
              <Button>注册</Button>
            </Button.Group>
          </div>

        </div>
        <div>
          <Layout.Header className={styles['main-header']}>
            <img src={logo} className={styles['App-logo']} alt="" />
            <Typography.Title level={3} className={styles.title}>
              react 旅游网
            </Typography.Title>
            <Input.Search
              placeholder='请输入旅游目的地、主题、或关键字'
              className={styles['search-input']}
            />
          </Layout.Header>
        </div>

      </div>
    </div>
  );
}

export default App;
