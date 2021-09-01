import React from 'react'
import ProductItem from './ProductItem'

const Products = ({products}) => {
    return (
        <div className='products'>
            {products.map( product => (
                <ProductItem key={product.id} product={product}/>
            ))}
        </div>
    )
}

export default Products