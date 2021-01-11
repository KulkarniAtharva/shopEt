import axios from "axios"
import Cookie from "js-cookie"
import { ADD_ITEM_CART, REMOVE_ITEM_CART } from "../constants/CartConstants";

const AddToCart = (productId,qty) => async (dispatch,getState) =>
{
    try{
        const {data} = await axios.get("/api/products/" + productId);
    dispatch({type:ADD_ITEM_CART, 
        payload:{
            product:data._id,
            name:data.name,
            price:data.price,
            rating:data.rating,
            numreviews:data.numreviews,
            image:data.image,
            countInStock:data.countInStock,
            Quantity:qty
        }
    });
    const {addtocart:{cartItems}}=getState();
    Cookie.set("cartItems",JSON.stringify(cartItems));

    }
    catch(error)
    {
    
    }
    
}

const RemovefromCart = (productId) => async (dispatch,getState) =>
{
    try{
        dispatch({type:REMOVE_ITEM_CART,payload:productId});
        const {addtocart:{cartItems}}=getState();
    Cookie.set("cartItems",JSON.stringify(cartItems));

    }
    catch(error)
    {

    }
    
}

export {AddToCart,RemovefromCart};