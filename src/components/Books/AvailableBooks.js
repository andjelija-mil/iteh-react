import Card from '../UI/Card';
import BookItem from './BookItem/BookItem';
import classes from './AvailableBooks.module.css';

const DUMMY_BOOKS = [
  {
    id: 'm1',
    name: 'Pride and Prejudice',
    author: 'Jane Austin',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'One Hundred Years of Solitude',
    author: 'Gabriel García Márquez',
    price: 18.99,
  },
];

const AvailableBooks = () => {
  const booksList = DUMMY_BOOKS.map((book) => (
    <BookItem
      key={book.id}
      id={book.id}
      name={book.name}
      author={book.author}
      price={book.price}
    />
  ));

  return (
    <section className={classes.books}>
      <Card>
        <ul>{booksList}</ul>
      </Card>
    </section>
  );
};

export default AvailableBooks;
