import { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App() {
  const [isCartShown, setIsCartShown] = useState(false);

  const visibilityCartHandler = (isVisible) => {
    setIsCartShown(isVisible);
  };

  return (
    <>
      {isCartShown && <Cart onCartVisible={visibilityCartHandler} />}
      <Header onCartVisible={visibilityCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
