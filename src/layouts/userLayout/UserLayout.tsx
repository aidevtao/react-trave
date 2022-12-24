import React, { useState } from "react";
import styles from "./UserLayout.module.css";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { GlobalOutlined } from "@ant-design/icons";
import { Layout, Dropdown, MenuProps } from "antd";
const { Header, Footer, Content } = Layout;

export const UserLayout: React.FC = (props) => {
  const [languagePlaceHold, setLanguagePlaceHold] = useState('中文')
  const languageItems: MenuProps['items'] = [
    { label: '中文', key: 'cn' },
    { label: 'English', key: 'english' },
  ]
  const languageClick: MenuProps['onClick'] = ({ key, keyPath, domEvent }) => {
    setLanguagePlaceHold(key === 'cn' ? '中文' : 'english')
  }

  return (
    <Layout className={styles["user-layout-container"]}>
      <Header className={styles["header"]}>
        <div className={styles["lang"]}>
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
      </Header>
      <Content className={styles["content"]}>
        <div className={styles["top"]}>
          <div className={styles["content-header"]}>
            <Link to="/">
              <img alt="logo" className={styles["logo"]} src={logo} />
              <span className={styles["title"]}>React 旅游网</span>
            </Link>
          </div>
          <div className={styles["desc"]}>
            慕课网 是我朝最具影响力的 线上课程学习网站
          </div>
          {props.children}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>Footer就不写了，太累了</Footer>
    </Layout>
  );
};
