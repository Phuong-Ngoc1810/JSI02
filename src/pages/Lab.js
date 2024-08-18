import React from 'react'
import  { useState } from 'react'
import { MenuOutlined } from '@ant-design/icons';
import { Button, Divider, Flex, Radio, Space, Tooltip } from 'antd';
function Lab() {
    
  return (
    <div class="navbar">

        <div class="navbar-container">
        <input type="checkbox"></input>


            <div class="lines">
                <span class="line line1"></span>

                <span class="line line2"></span>

                <span class="line line3"></span>

            </div>
            <h1 class="logo">OFFICAL SHOP</h1>
            <ul class="menu">

                <li><a href="#">Home</a></li>

                <li><a href="#">Products</a></li>

                <li><a href="#">➜ </a></li>


            </ul>


        </div>

    </div>

  )
}

export default Lab