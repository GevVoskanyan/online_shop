import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Menu from './Menu';
import { useLocation } from 'react-router-dom';
import MetaHeaders from './MetaHeaders';

function Wrapper(props) {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div>
      <MetaHeaders />
      <Header />
      <Menu />
      {props.children}
      <Footer />
    </div>
  );
}

export default Wrapper;
