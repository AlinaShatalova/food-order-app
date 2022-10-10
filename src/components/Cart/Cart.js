import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = ({ onCartHide }) => {
  const cartItems = (<ul className={classes['cart-items']}>
    {[{ id: 'c1', name: 'Shaurma', amount: 2, price: 180 }].map((item) => <li>{item.name}</li>)}
  </ul>);

  return (
    <Modal onCartHide={onCartHide}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>360</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={onCartHide}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  )
};

export default Cart;