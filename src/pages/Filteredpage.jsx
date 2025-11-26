import React from 'react'
import { useParams } from 'react-router-dom'
import Products from '../components/Products'
import ProductCards from '../components/Productcard'
import Brands from '../components/Brands'

const Filteredpage = () => {
  const { category } = useParams()

  return (
    <main className="container">
      <div className="">
        <h1 className="text-3xl font-bold text-center mb-8">
          {category ? 
            `${category.charAt(0).toUpperCase() + category.slice(1)}` : 
            'All Products'
          }
        </h1>
        <Products selectedCategory={category} />
         <ProductCards selectedCategory={category} />
         <Brands/>
      </div>
    </main>
  )
}

export default Filteredpage