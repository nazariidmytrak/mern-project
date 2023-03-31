import { Link, useNavigate } from 'react-router-dom';
import classes from './Public.module.css';

const Public = () => {
  const navigate = useNavigate();
  const toDashHandler = () => {
    navigate('/dash');
  };
  const content = (
    <section className={classes.public}>
      <header>
        <h1>
          Welcome to <span /* className='nowrap' */>techNotes Repairs!</span>
        </h1>
      </header>
      <main className={classes.public__main}>
        <p className={classes['public__main-title']}>
          Located in the heart of Silicon Valley, techNotes provides a skilled
          team of technicians ready to assist you with your technology repair
          needs.
        </p>
        <address className={classes.public__addr}>
          <p>techNotes</p>
          <p>123 Main Street</p>
          <p> San Jose, CA 95131</p>
          <a href='tel:+14085551212'>(408) 555-1212</a>
        </address>
        <p>Owner: John Doe</p>
        <button onClick={toDashHandler}>to dashes</button>
      </main>
      <footer>
        <Link to='/login'>Employee Login</Link>
      </footer>
    </section>
  );
  return content;
};
export default Public;
