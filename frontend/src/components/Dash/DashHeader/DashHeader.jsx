import { Link } from 'react-router-dom';
import classes from './DashHeader.module.css';

const DashHeader = () => {
  const content = (
    <header className={classes['dash-header']}>
      <div className={classes['dash-header__container']}>
        <Link to='/dash'>
          <h1 className={classes['dash-header__title']}>techNotes</h1>
        </Link>
        <nav className={classes['dash-header__nav']}>
          {/* add nav buttons later */}
        </nav>
      </div>
    </header>
  );

  return content;
};

export default DashHeader;
