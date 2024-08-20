import React, { useEffect } from 'react';
import { Breadcrumb, Layout, Menu, theme, Input, Space } from 'antd';
import { HomeOutlined, LoginOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
const { Header, Content, Footer } = Layout;
const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);
const HeaderApp = () => {
  const isLogin = localStorage.getItem('isLogin')
  const avtUser = localStorage.getItem('avtUser')
  const navigate = useNavigate();
  const items = [
    {
      key: '',
      label: 'Home',
      icon: <HomeOutlined style={{
        fontSize: '18px',
        fontWeight: '900',
      }} />
    },
    {
      key: 'bakery',
      label: 'Bakery'
    },
    avtUser &&
    {
      disabled: true,
      icon: <img style={{ width: 32, height: 32 }} src={avtUser} />
    },
    !isLogin ?
      {
        key: 'login',
        label: 'Login'
      } : {
        key: 'logout',
        label: 'Logout',
        icon: <LoginOutlined style={{
          fontSize: '18px',
          fontWeight: '900',
        }} />
      },

    {
      key: 'card',
      icon: <ShoppingCartOutlined style={{
        fontSize: '22px',
        fontWeight: '900',
      }} />
    },
  ]
  // const item = [
  //   {
  //     key: 'card',
  //     icon:<ShoppingCartOutlined style={{
  //       fontSize: '25px',
  //       fontWeight: '800',
  //       marginLeft:'430px'
  //     }}/>
  // },
  // ]
  const onclick = (e) => {
    if (e?.key === 'logout') {
      localStorage.removeItem('isLogin')
      localStorage.removeItem('avtUser')
      return window.location.reload()
    }
    navigate(`/${e?.key}`)

  }

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();




  useEffect(() => {
    // Api()
  }, [isLogin])


  return (
    // <Layout>
    <Header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1,
        // width: '100%',
        display: 'flex',
        alignItems: 'center',
        background: '#9a314d',
        fontWeight: 500,
        // height: 84
      }}
    >
      <div className="demo-logo" />
      <Menu
        className='menu'
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={items}
        onClick={onclick}
        style={{
          flex: 1,
          minWidth: 0,
          background: '#9a314d',
          fontSize: 16,
          fontWeight: 500,
        }}
      />

      <Space direction="vertical" >
        <Search
          placeholder="Search our store"
          allowClear
          onSearch={onSearch}
          style={{
            width: 200,
            display: 'flex',
            alignItems: 'center',

          }}
        />



      </Space>
      {/* <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={item}
          onClick={onclick}
          style={{
            flex: 1,
            minWidth: 0,
            background: '#9a314d',
            
          }}
        /> */}

    </Header>
    // </Layout>
  );
};
export default HeaderApp;