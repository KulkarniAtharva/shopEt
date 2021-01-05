import { PRODUCT_LIST_FAILURE, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/ProductConstants"
import axios from 'axios';
const listProducts = () => async (dispatch) => {

    try{
        dispatch({type:PRODUCT_LIST_REQUEST});
        const {data} = await axios.get("/api/products");
        dispatch({ type:PRODUCT_LIST_SUCCESS,payload:data});

    }
    catch(error)
    {
        dispatch({type:PRODUCT_LIST_FAILURE,payload:error.message});
    }
   
}

export {listProducts}