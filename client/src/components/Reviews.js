import React from 'react';
import StarRating from './StarRating';

const Reviews = (props) => {
  return (
    <div className='col'>
      <div className="card text-bg-primary mb-3">
        <div className="card-header d-flex justify-content-between">
          <span>{props.review.name}</span>
          <span>
            <StarRating rating={props.review.rating}/>
          </span>
        </div>
        <div className="card-body">
          <p className="card-text">{props.review.text}</p>
        </div>
      </div>
    </div>
  )
}

export default Reviews