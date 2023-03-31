import { Link } from 'react-router-dom';

import classes from './Welcome.module.css';

const Welcome = () => {
  const date = new Date();
  const today = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'full',
    timeStyle: 'short',
  }).format(date);

  const content = (
    <section className={classes.welcome}>
      <p>{today}</p>
      <h1>Welcome!</h1>
      <p>
        <Link to='/dash/notes'>View techNotes</Link>
      </p>
      <p>
        <Link to='/dash/users'>View User Settings</Link>
      </p>
    </section>
  );

  return content;
};

export default Welcome;
