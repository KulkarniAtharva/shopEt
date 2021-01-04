import React from 'react';
import data from '../data';

function HomeScreen()
{
    return(
        <div className='products'>
            {
        data.products.map(product =>
            
            <div className='product'>
                <div className='product-img'>
                <img src={product.image} alt="a" className='img'></img>
                </div>
                <div className='product-title'>
                {product.name}
                </div>
                <div className='product-price'>
                    ₹{product.price}
                </div>
                <div className='product-rating'>
                {product.rating} Stars
                </div>
                <div className='num-reviews'>
                {product.numreviews} Reviews
                </div>

                
            </div>
           
        
            )}
            </div>
        
    
    );

}

export default HomeScreen;