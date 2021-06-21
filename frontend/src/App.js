import { BrowserRouter, Link, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import ProductsScreen from "./screens/ProductsScreen";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import Cookie from "js-cookie";

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
  const logoutHandler = () => {
    if (userInfo) {
      Cookie.remove("userInfo");
      window.location.reload();
    } else {
      Cookie.remove("newuserInfo");
      window.location.reload();
    }
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
        <Link to="/usercart" className="cart">
          Cart
        </Link>
        {userInfo ? (
          userInfo.isAdmin ? (
            <div className="profile">
              <button className="signin">Admin</button>
              <div className="profilelinks">
                <button className="profilebutton">
                  <Link to="/profile" className="profilelink">
                    Profile
                  </Link>
                </button>
                <button className="profilebutton">
                  <Link to="/products" className="profilelink">
                    Products
                  </Link>
                </button>
                <button className="logoutbutton" onClick={logoutHandler}>
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="profile">
              <button className="signin">{userInfo.name}</button>
              <div className="profilelinks">
                <button className="profilebutton">
                  <Link to="/profile" className="profilelink">
                    Profile
                  </Link>
                </button>
                <button className="logoutbutton" onClick={logoutHandler}>
                  Logout
                </button>
              </div>
            </div>
          )
        ) : newuserInfo ? (
          <div className="profile">
            <button className="signin">{newuserInfo.name}</button>
            <div className="profilelinks">
              <button className="profilebutton">
                <Link to="/profile" className="profilelink">
                  Profile
                </Link>
              </button>
              <button className="logoutbutton" onClick={logoutHandler}>
                Logout
              </button>
            </div>
          </div>
        ) : (
          <Link to="/signin" className="signin">
            Sign In
          </Link>
        )}
      </header>
      <div className="sidebar">
        <h3>Shopping Categories</h3>
        <button className="sidebar-close-button" onClick={closesidebar}>
          &#8592;
        </button>
        <ul className="categories">
          <li>
            <Link to="/category/Pants">Pants</Link>
          </li>

          <li>
            <Link to="/category/Shirts">Shirts</Link>
          </li>
        </ul>
      </div>

      <main className="main">
        <Route exact path="/products" component={ProductsScreen} />
        <Route exact path="/usercart" component={CartScreen} />
        <Route path="/signin" component={SignInScreen} />
        <Route path="/signup" component={SignUpScreen} />
        <Route path="/products/:id" component={ProductScreen} />

        <Route exact path="/cart/:id?" component={CartScreen} />
        <Route path="/" exact={true} component={HomeScreen} />
      </main>

      <footer className="footer">All Rights Reserved.</footer>
    </BrowserRouter>
  );
}

export default App;
