import { ADD_ITEM_CART, REMOVE_ITEM_CART } from "../constants/CartConstants";

const cartReducer = (state={ cartItems: [] },action) =>
{
    switch(action.type)
    {
        case ADD_ITEM_CART:
        const item = action.payload;
        const product = state.cartItems.find(x => x.product === item.product);
        if(product)
        {
            return{
                cartItems:
                state.cartItems.map(x=>x.product===product.product?item:x)
            }
           
        }
        return{
            cartItems:[...state.cartItems, item]
        };
        case REMOVE_ITEM_CART:
            {
                const productId = action.payload;
                return{
                    cartItems:state.cartItems.filter(x=> x.product !== productId)
                }
                
            }

        default:
        {
        return state;
        }

       

            
    }
    
}

export { cartReducer };