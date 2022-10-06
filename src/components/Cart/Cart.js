import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = ({ onCartVisible }) => {
  const cartItems = (<ul className={classes['cart-items']}>
    {[{ id: 'c1', name: 'Shaurma', amount: 2, price: 180 }].map((item) => <li>{item.name}</li>)}
  </ul>);

  const closeHandler = () => {
    onCartVisible(false);
  };

  return (
    <Modal onCartVisible={onCartVisible}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>360</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={closeHandler}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  )
};

export default Cart;