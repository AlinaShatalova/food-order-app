import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals.jpeg';
import classes from './Header.module.css';

const Header = ({ onCartShow }) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onCartShow={onCartShow} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table with yummy food' />
      </div>
    </>
  )
};

export default Header;