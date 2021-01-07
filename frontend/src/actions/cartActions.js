import axios from "axios"
import { ADD_ITEM_CART, REMOVE_ITEM_CART } from "../constants/CartConstants";

const AddToCart = (productId,qty) => async (dispatch) =>
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

    }
    catch(error)
    {
    
    }
    
}

const RemovefromCart = (productId) => async (dispatch) =>
{
    try{
        dispatch({type:REMOVE_ITEM_CART,payload:productId});
    }
    catch(error)
    {

    }
    
}

export {AddToCart,RemovefromCart};