import classes from './BooksSummary.module.css';

const BooksSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Your favorite books are now being delievered to your home!</h2>
      <p>
        Choose your favorite book from our broad selection of available books
        and all that from the comfort of your own home.
      </p>
      <p>
        We have wide variety of books of every genre! 
      </p>
    </section>
  );
};

export default BooksSummary;
