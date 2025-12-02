import React from 'react'
import './ProductPage.css'
import { Link } from 'react-router-dom'
import ProductCard from './productCard'
import { Products } from './Data/Products'

const ProductPage = () => {
  return (
    <div className='products-container'>
      <h2 className='section-title'>Special Footwear with offer</h2>
      <p className='section-subtitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <div className='products-grid'>
        {Products.map((item) => (
          <Link key={item.id} to={`/products/${item.id}`} 
          style={{textDecoration:"none"}}>
            <ProductCard product={item} />
          </Link>
        ))}

      </div>
    </div>
  )
}

export default ProductPage 