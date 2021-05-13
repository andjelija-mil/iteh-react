import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './components/Layout/Header';
import Books from './components/Books/Books';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
import { Route } from 'react-router-dom'
import About from './components/About';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Route path="/home">
         <Books />
        </Route>
        <Route path = "/about">
         <About />
        </Route>
      </main>
    </CartProvider>

  );
}
 
export default App;