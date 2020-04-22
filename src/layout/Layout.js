import React, { Fragment } from 'react';
import Logo from '../components/Logo/Logo';

import './Layout.css';

const Layout = (props) => {
  const { children } = props || {};
  return (
    <Fragment>
      <header>
        <Logo />
      </header>

      <main className="main-container">{children}</main>
    </Fragment>
  );
};

export default Layout;
