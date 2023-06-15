import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="notFound">
      NotFound Go to{' '}
      <Link to={'/shop'} className="homePageLink">
        Home
      </Link>
    </div>
  );
}

export default NotFound;
