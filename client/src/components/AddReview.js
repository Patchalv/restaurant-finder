import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom'

import restaurantsApi from '../apis/restaurantsApi';
import { RestaurantContext } from '../context/RestaurantContext';

const AddReview = () => {
  const {id} = useParams()
  const { addReviews } = useContext(RestaurantContext); 
  const [name, setName] = useState('');
  const [rating, setRating] = useState('Rating');
  const [reviewText, setReviewText] = useState('');
  
  const handleSubmitReview = async (e) => {
    e.preventDefault();
    try {
      const response = await restaurantsApi.post(`/${id}/addReview`, {
        name: name,
        rating: rating,
        text: reviewText
      });
      addReviews(response.data)

    } catch (error) {
      console.error(error)
    }
    window.location.reload(false);
  }


  return (


    <form action="">
      <div className="row g-3 mt-2">
        <div className="col">
          <label htmlFor="name">Name</label>
          <input id="name" placeholder='Name' type='text' className='form-control' value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="col">
        <label htmlFor="rating">Rating</label>
            <select id="rating" className='form-select' value={rating} onChange={(e) => setRating(e.target.value)} >
              <option disabled>Rating</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </select>
        </div>
      </div>
      <div className="row g-3 mt-2">
        <div className="col">
          <label htmlFor="review">Review</label>
          <textarea id="review" className='form-control' value={reviewText} onChange={(e) => setReviewText(e.target.value)} />
        </div>
      </div>
      <div className="row g-3 mt-2">
        <div className="col">
          <button className='btn btn-primary' onClick={handleSubmitReview}>
            Submit
          </button>
        </div>
      </div>
    </form>
  )
}

export default AddReview