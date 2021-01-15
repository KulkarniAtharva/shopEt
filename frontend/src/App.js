import { BrowserRouter, Link, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductScreeen from "./screens/ProductScreen";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";

function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const userSignup = useSelector((state) => state.userSignup);
  const { newuserInfo } = userSignup;
  const opensidebar = () => {
    document.querySelector(".sidebar").classList.add("open");
  };
  const closesidebar = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };

  return (
    <BrowserRouter>
      <header className="header">
        <button className="sidebar-button" onClick={opensidebar}>
          &#9776;
        </button>
        <Link to="/" className="brand">
          shopEt
        </Link>
        <a href="#" className="cart">
          Cart
        </a>
        {userInfo ? (
          <Link to="/profile" className='signin'>{userInfo.name}</Link>
        ) :newuserInfo? (
          <Link to="/profile" className='signin'>{newuserInfo.name}</Link>):
          (<Link to="/signin" className='signin'>Sign In</Link>
        )}
      </header>
      <div className="sidebar">
        <button className="sidebar-close-button" onClick={closesidebar}>
          &#8592;
        </button>
      </div>

      <main className="main">
        <Route path="/" exact={true} component={HomeScreen} />
        <Route path="/signin" component={SignInScreen} />
        <Route path="/signup" component={SignUpScreen} />
        <Route path="/products/:id" component={ProductScreeen} />
        <Route path="/cart/:id?" component={CartScreen} />
      </main>

      <footer className="footer">All Rights Reserved.</footer>
    </BrowserRouter>
  );
}

export default App;
