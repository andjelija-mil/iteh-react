import { Fragment } from 'react';
import {Link} from 'react-router-dom'

import HeaderCartButton from './HeaderCartButton';
import booksImage from '../../assets/books.jpeg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
      <Link Style="text-decoration:none; color:white" to="/home"><h1>BookStore</h1></Link>
        <div Style="display:flex; flex-direction: row">
          <Link Style="margin-right:30px; text-decoration:none; color:white" to="/home"><h3>Homepage</h3></Link>
          <Link Style="text-decoration:none; color:white" to="/about"><h3>About</h3></Link>
        </div>
        {<HeaderCartButton onClick={props.onShowCart} />}
      </header>
      <div className={classes['main-image']}>
        <img src={booksImage} alt='A bookshelf' />
      </div>
    </Fragment>
  );
};

export default Header;