import React from 'react';
 

function ProductScreeen(props)
{
   // const product = data.products.find(x => x._id === props.match.params.id);

   // console.log(props.match.params.id)






   
    return <div className="product_details">

        
            <img src="/images/img.png" alt="Product img" className="product_img"></img>
            
            <span className="detail">
                <div className="title">Pants</div>
                <div className="subtitle">This is the description of the product</div>
                <div className="rating">3.2 stars</div>
                <div className="numreviews">20k reviews</div>
                <div className="price">₹300</div>
                <div className="counter_addtocart">
                    <div className="counter">
                        Quantity:  &nbsp;&nbsp;
                        <select className="quantity">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>

                    </div>


                </div>

                <button className="addtocart">Add to Cart</button>
            </span>
        
        
        </div>

    
}

export default ProductScreeen;