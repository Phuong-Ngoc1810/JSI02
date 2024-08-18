// import React from 'react'
// import cake1 from '../images/cake1.png';
// import cake2 from '../images/cake2.png';
// import cake3 from '../images/cake3.png';
// import cake4 from '../images/cake4.png';
// import shopping from '../images/shopping.svg';
// import {HomeOutlined, LoginOutlined, ShoppingCartOutlined} from '@ant-design/icons'

// import '../styles/Bakery.css'

// const Bakery = () => {
//     let openShopping = document.querySelector('.shopping');
// let closeShopping = document.querySelector('.closeShopping');
// let list = document.querySelector('.list');
// let listCard = document.querySelector('.listCard');
// let body = document.querySelector('body');
// let total = document.querySelector('.total');
// let quantity = document.querySelector('.quantity');
// if (openShopping){
// openShopping.addEventListener('click', ()=>{
//     body.classList.add('active');
// })}
// if (closeShopping){
// closeShopping.addEventListener('click', ()=>{
//     body.classList.remove('active');
// })}

// let products = [
//     {
//         id: 1,
//         name: 'PRODUCT NAME 1',
//         image: 'cake1.png',
//         price: 120000
//     },
//     {
//         id: 2,
//         name: 'PRODUCT NAME 2',
//         image: 'cake2.png',
//         price: 120000
//     },
//     {
//         id: 3,
//         name: 'PRODUCT NAME 3',
//         image: 'cake3.png',
//         price: 220000
//     },
//     {
//         id: 4,
//         name: 'PRODUCT NAME 4',
//         image: 'cake4.png',
//         price: 123000
//     }
// ];
// let listCards  = [];
// function initApp(){
//     products.forEach((value, key) =>{
//         let newDiv = document.createElement('div');
//         newDiv.classList.add('item');
//         newDiv.innerHTML = `
//             <img src="image/${value.image}">
//             <div class="title">${value.name}</div>
//             <div class="price">${value.price.toLocaleString()}</div>
//             <button onclick="addToCard(${key})">Add To Card</button>`;
//             if (list){
//         list.appendChild(newDiv);}
//     })
// }
// initApp();
// function addToCard(key){
//     if(listCards[key] == null){
//         // copy product form list to list card
//         listCards[key] = JSON.parse(JSON.stringify(products[key]));
//         listCards[key].quantity = 1;
//     }
//     reloadCard();
// }
// function reloadCard(){
//     listCard.innerHTML = '';
//     let count = 0;
//     let totalPrice = 0;
//     listCards.forEach((value, key)=>{
//         totalPrice = totalPrice + value.price;
//         count = count + value.quantity;
//         if(value != null){
//             let newDiv = document.createElement('li');
//             newDiv.innerHTML = `
//                 <div><img src="image/${value.image}"/></div>
//                 <div>${value.name}</div>
//                 <div>${value.price.toLocaleString()}</div>
//                 <div>
//                     <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
//                     <div class="count">${value.quantity}</div>
//                     <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
//                 </div>`;
//                 if (listCard){
//                 listCard.appendChild(newDiv);}
//         }
//     })
//     total.innerText = totalPrice.toLocaleString();
//     quantity.innerText = count;
// }
// function changeQuantity(key, quantity){
//     if(quantity == 0){
//         delete listCards[key];
//     }else{
//         listCards[key].quantity = quantity;
//         listCards[key].price = quantity * products[key].price;
//     }
//     reloadCard();
// }
//     return (
//         <div className='all'>
//             <div class="container">
//                 <header>
//                     <h1>Your Shopping Cart</h1>
//                     <div class="shopping">
                    
//                         <span class="quantity">0</span>
//                     </div>
//                 </header>

//                 <div class="list">

//                 </div>
//             </div>

//             <div class="card">
//                 <h1>Card</h1>
//                 <ul class="listCard">
//                 </ul>
//                 <div class="checkOut">
//                     <div class="total">0</div>
//                     <div class="closeShopping">Close</div>
//                 </div>
//             </div>
//         </div>

//     )
// }

// export default Bakery
import React, { useState, useEffect } from 'react';
import { Carousel, Card } from 'antd';
import { useNavigate  } from "react-router-dom";
import '../styles/Bakery.css'

const Bakery = () => {
  const { Meta } = Card;
  const navigate = useNavigate()
  const [data, setData] = useState([])
  const getData = async () => {
    const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert';

    try {
      const response = await fetch(url);
      const result = await response.json();
      setData(result.meals)
      console.log(result);
    } catch (error) {
      console.error(error);
    }

  }

  const navigateToDetail = (id) =>{
    navigate(`product/${id}`)
  } 


  useEffect(() => {
    getData()
  }, [])
  return (
    <div id='contain'>
        <h1 id='title'>Tất cả sản phẩm</h1>
        <div id='pro'>
          {
            data.length > 0 && data?.map((item, index) => {
              return (
                <Card
                onClick={()=>navigateToDetail(item.idMeal)}
                  hoverable
                  style={{
                    width: 291,
                    height: 476,
                    marginTop: 32,
                    backgroundColor: '#983c51',
                    borderRadius: 50,
                    boxShadow: '0 3px 10px 0',

                  }}
                  cover={<img id='imgPr' alt="example" src={item.strMealThumb} />}
                >
                  <h3 id='proH3'>{item.strMeal}</h3>
                  <p id='proP'>{item.idMeal - 52600}.000đ</p>
                  <button id='proButton'>ORDER NOW</button>
                </Card>
              )
            })
          }
        </div>
      </div>
  )
}

export default Bakery