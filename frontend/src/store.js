import { createStore,combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducer';
import { productDetailsReducer, productListReducer,productSaveReducer,productDeleteReducer } from './reducers/ProductReducer';
import Cookie from 'js-cookie'
import { userSigninReducer, userSignupReducer } from './reducers/userReducer';

const cartItems = Cookie.getJSON("cartItems") || [];
const userInfo = Cookie.getJSON("userInfo") || null;
const newuserInfo = Cookie.getJSON("newuserInfo") || null;

 
const initialState = {addtocart:{cartItems},userSignin:{userInfo},userSignup:{newuserInfo}};

const reducer = combineReducers({
    productList: productListReducer,
    productDetails:productDetailsReducer,
    addtocart:cartReducer,
    userSignin : userSigninReducer,
    productSave: productSaveReducer,
    userSignup : userSignupReducer,
    productDelete: productDeleteReducer
});



const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;
const store = createStore( reducer , initialState , composeEnhancer(applyMiddleware(thunk)));

export default store;



