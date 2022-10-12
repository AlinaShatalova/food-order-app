import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = ({ onCartHide }) => {
  const { items, totalAmount } = useContext(CartContext);

  const addToCartHandler = (item) => {

  };

  const removeFromCartHandler = (id) => {

  };

  const cartItems = (<ul className={classes['cart-items']}>
    {items.map((item) => <CartItem
      name={item.name}
      price={item.price}
      amount={item.amount}
      onAdd={addToCartHandler.bind(null, item)}
      onRemove={removeFromCartHandler.bind(null, item.id)}
    />)}
  </ul>);

  const totalAmountFormatted = `$${totalAmount.toFixed(2)}`;
  const hasItems = items.length > 0;

  return (
    <Modal onCartHide={onCartHide}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmountFormatted}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={onCartHide}>Close</button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  )
};

export default Cart;