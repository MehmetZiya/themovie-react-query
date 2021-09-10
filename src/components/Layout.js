import { Fragment } from 'react';

import classes from '../css/Layout.module.css';
import Navbar from './Navbar';

const Layout = (props) => {
  return (
    <Fragment>
      <Navbar />
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
