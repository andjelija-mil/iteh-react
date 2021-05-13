import { useContext } from 'react';
import BookItemForm from './BookItemForm';
import classes from './BookItem.module.css';
import CartContext from '../../../store/cart-context';


const BookItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;
 
  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    });
  };


  return (
    <li Style="border-bottom: 1px solid gray; padding-bottom: 10px" className={classes.Book}>
      <div Style="display:inline-block; width:50%">
        <h3>{props.name}</h3>
        <div className={classes.author}>{props.author}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div Style="display:inline-block; width:50%">
        <BookItemForm id={props.id} onAddToCart={addToCartHandler}/>
      </div>
    </li>
  );
};

export default BookItem;
