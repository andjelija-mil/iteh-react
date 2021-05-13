import { useContext } from 'react';

import classes from './BookItem.module.css';

const BookItem = (props) => {
  

  const price = `$${props.price.toFixed(2)}`;



  return (
    <li className={classes.Book}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.author}>{props.author}</div>
        <div className={classes.price}>{price}</div>
      </div>
    </li>
  );
};

export default BookItem;
