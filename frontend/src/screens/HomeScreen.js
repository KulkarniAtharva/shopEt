import React,{ useState,useEffect } from 'react';
import axios from 'axios';

function HomeScreen()
{

    const [products,setProducts] = useState([]);

    useEffect(() => {
        
        const fetchData = async() => {
            const { data } = await axios.get("/api/products");
            setProducts(data);
        }

        fetchData();


        return () => {
            //
        }
    }, [])



    return(
        <div className='products'>
            {
            
        products.map(product =>
            <li key={product._id} className="li_list">
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
            </li>
           
        
            )}
           
            </div>
        
    
    );

}

export default HomeScreen;