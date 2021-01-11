import { createStore,combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducer';
import { productDetailsReducer, productListReducer } from './reducers/ProductReducer';
import Cookie from 'js-cookie'
import { userSigninReducer } from './reducers/userReducer';

const cartItems = Cookie.getJSON("cartItems") || [];

const initialState = {addtocart:{cartItems}};

const reducer = combineReducers({
    productList: productListReducer,
    productDetails:productDetailsReducer,
    addtocart:cartReducer,
    userSignin : userSigninReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;
const store = createStore( reducer , initialState , composeEnhancer(applyMiddleware(thunk)));

export default store;

