import React from 'react' 

const ProductItem = ({product}) => {
    return (
        <div className='product-item'>
            <h1>Name: {product.name}</h1>
            <p>Product number: {product.product_number}</p>
            <p>Price: ${product.price}</p>
        </div>
    )
}

export default ProductItem