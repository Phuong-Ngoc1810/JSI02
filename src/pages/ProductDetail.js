import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Rate } from 'antd';
import '../styles/ProductDetail.css'

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState()

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(response => response.json())
      .then(data => setProduct(data.meals[0]))
      .catch(error => console.error('Error fetching product:', error));
  }, [id]);
  console.log("🚀 ~ ProductDetail ~ product:", product)

  return (
    <div className='detail-container'>
      <div className='productDetail-container'>
        <div className='product-img'>
          <img src={product?.strMealThumb}></img>
        </div>
        <div className='product-detail'>
          <h2 className='product-name'>{product?.strMeal}</h2>
          <Rate disabled defaultValue={2} />
          <h2 className='product-price'>{product?.idMeal - 52600}.000đ</h2>
          <div className='product-order'>
            <button id='proButton'>ORDER NOW</button>
          </div>
          <hr style={{
          margin: '30px 0',
          width: '400px'
        }}></hr>
<div className='product-description'>
        <h4>Mô tả sản phẩm</h4>
        <h5>Ingredients:    {product?.strMeasure1} {product?.strIngredient1}
        , {product?.strMeasure2} {product?.strIngredient2}
        , {product?.strMeasure3} {product?.strIngredient3} 
        , {product?.strMeasure4} {product?.strIngredient4}
        , {product?.strMeasure5} {product?.strIngredient5}
        , {product?.strMeasure6} {product?.strIngredient6}</h5>
        <h5>Method:    {product?.strInstructions}</h5>
      </div>
        </div>
      </div>
      
    </div>
  )
}

export default ProductDetail