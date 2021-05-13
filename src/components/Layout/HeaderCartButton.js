import CartIcon from '../Cart/CartIcon';
//import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
    

    return (
        <button className={classes.buttonn} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
            4
        </span>
        </button>
    );
};

export default HeaderCartButton;
