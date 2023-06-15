import React from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '../components/Wrapper';

function Home() {
  return (
    <Wrapper>
      <div className="shop">
        <Link className="shop_link" to="/shop">
          Shop
        </Link>
      </div>
    </Wrapper>
  );
}
export default Home;
