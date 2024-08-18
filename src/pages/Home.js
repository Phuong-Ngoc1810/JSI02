import React, { useState, useEffect } from 'react';
import { Carousel, Card } from 'antd';
import cake1 from '../images/cake1.png';
import cake2 from '../images/cake2.png';
import cake3 from '../images/cake3.png';
import home1 from '../images/home1.png';
import home2 from '../images/home2.png';
import home3 from '../images/home3.png';
import cake4 from '../images/cake4.png';
import { useNavigate  } from "react-router-dom";



const contentStyle = {
  height: '100%',
  width: '100%',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  // marginTop: '23px',
  // marginLeft: '132px',
  margin:' 0 0',
  background: '#eddfc1'
};


const Home = () => {
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

  console.log("🚀 ~ Home ~ data:", data)

  return (

    <body style={{
      background: '#eddfc1'

    }}>
      <div id='caro' >
        <Carousel autoplay >
          <div>
            <img style={contentStyle} src={home1}></img>
          </div>
          <div>
            <img style={contentStyle} src={home2}></img>
          </div>
          <div>
            <img style={contentStyle} src={home3}></img>
          </div>


        </Carousel>
      </div>

      <div id='post'>
        <div id='postImg'>
          <img id='imgPost' src={cake4}></img>
        </div>

        <div id='postContent'>
          <h1 id='postH1'>ARTISAN PRODUCER OF BREADS</h1>
          <p id='postP'>To be the premier provides of Bakery, Pasty, Catering services, French Bistro and Parisian Café concept, delighting our customers with exceptional taste, quality, and innovation. We aim to exeed expectations in every aspect of our operations, form production to distribution while fostering a culture of creativity, sustainability, and customer-centricity.</p>
        </div>
      </div>

      <div id='contain'>
        <h1 id='title'>NEW PRODUCTS</h1>
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


    </body>
  )
}


export default Home;