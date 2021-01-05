
import {Link, Route} from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';

function App() 
{
   const opensidebar = () =>{

    document.querySelector('.sidebar').classList.add('open');
   }
   const closesidebar = () =>
   {
     document.querySelector('.sidebar').classList.remove('open');
   }

  return (
    <>
    <header className='header'>
      <button className='sidebar-button' onClick={opensidebar}>
      &#9776;
      </button>
      <Link to="/"  className='brand'>
        shopEt
      </Link>
      <a href='#' className='cart'>
        Cart
      </a>
      <Link to="/signin" className='signin'>
        SignIn
      </Link>
    </header>
    <div className='sidebar'>
      <button className='sidebar-close-button' onClick={closesidebar}>
      &#8592;
      </button>

    </div>

    <main className='main'>
    <Route path="/" exact={true} component={HomeScreen} />
    <Route path="/signin" component={SignInScreen} />
    <Route path="/signup" component={SignUpScreen} />


    </main>

    <footer className='footer'>
      All Rights Reserved.
    </footer>
    
    </>
    
  );
}

export default App;
