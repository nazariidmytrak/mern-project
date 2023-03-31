import { Outlet } from 'react-router-dom';
import DashFooter from '../DashFooter/DashFooter';
import DashHeader from '../DashHeader/DashHeader';

import classes from './DashLayout.module.css';

const DashLayout = () => {
  return (
    <>
      <DashHeader />
      <div className={classes['dash-container']}>
        <Outlet />
      </div>
      <DashFooter />
    </>
  );
};

export default DashLayout;
