import { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = ({ onCartShow }) => {
	const { items } = useContext(CartContext);

	const numberOfCartItems = items.reduceRight((acc, item) => {
		acc += item.amount;
		return acc;
	}, 0);
	return (
		<button className={classes.button} onClick={onCartShow}>
			<span className={classes.icon}><CartIcon /></span>
			<span>Your Cart</span>
			<span className={classes.badge}>{numberOfCartItems}</span>
		</button>
	)
};

export default HeaderCartButton;