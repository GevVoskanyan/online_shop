import React, { useEffect } from 'react';
import ReactStars from 'react-rating-stars-component';
import { useSearchParams } from 'react-router-dom';

function RatingFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const ratingChanged = (newRating) => {
    searchParams.set('rating', newRating);
    setSearchParams(searchParams, { replace: true });
  };
  return (
    <div>
      <div className="sidebar__item sidebar__item__color--option">
        <h4>Rating</h4>
        <div className="sidebar__item__color sidebar__item__color--white">
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
          />
        </div>
      </div>
    </div>
  );
}

export default RatingFilter;
