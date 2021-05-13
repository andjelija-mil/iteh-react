import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import booksImage from '../../assets/books.jpeg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>BookStore</h1>
        {<HeaderCartButton onClick={props.onShowCart} />}
      </header>
      <div className={classes['main-image']}>
        <img src={booksImage} alt='A bookshelf' />
      </div>
    </Fragment>
  );
};

export default Header;