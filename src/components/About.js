import classes from './About.module.css';

const About = () => {
    return (
    
        <section className={classes.summary}>
        <h2>About us</h2>
        <p>
          We are book lovers community. We share good books.
          Welcome to our community.
        </p>
        <p>
          If you have any questions, reach us at: mail@gmail.com
        </p>
      </section>
    )
};

export default About;