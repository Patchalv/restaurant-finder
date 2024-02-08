import React, {useContext, useEffect} from 'react';
import { useNavigate } from "react-router-dom";

import restaurantsApi from '../apis/restaurantsApi';
import { RestaurantContext } from '../context/RestaurantContext';
import StarRating from './StarRating';

const RestaurantList = () => {

  const { restaurants, setRestaurants } = useContext(RestaurantContext);
  let navigate = useNavigate();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await restaurantsApi.get("/");
        setRestaurants(response.data);
      } catch (err) {}
    };

    fetchData();
  }, []);

  const handleDelete = async (e, id) => {
    e.stopPropagation();
    try {
      await restaurantsApi.delete(`/${id}`);
      setRestaurants(restaurants.filter(restaurant => {
        return restaurant.id !== id;
      }));
    } catch (error) {
      console.error(error);
    }
  }

  const handleUpdate = (e, id) => {
    e.stopPropagation();
    navigate(`/restaurants/${id}/update`);
  }

  const handleRestaurantSelect = (id) => {
    navigate(`/restaurants/${id}`);
  }

  const renderRating = (restaurant) => {
    if (restaurant.count) {
      return (
        <>
      <StarRating rating={restaurant.average_rating} />
      <span className='text-warning ml-1'>({restaurant.count})</span>
      </>
      )
    } else {
      return (
        <>
      <span className='text-warning ml-1'>0 reviews</span>
      </>
      )
    }
  }


  return (
    <div>
      <table className="table table-dark table-hover align-middle text-center">
        <thead className='table-light align-middle'>
          <tr>
            <th scope="col">Restaurant</th>
            <th scope="col">Location</th>
            <th scope="col">Price Range</th>
            <th scope="col">Ratings</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
            {restaurants && restaurants.map((restaurant) => {
              return (
                <tr key={restaurant.id} onClick={() => handleRestaurantSelect(restaurant.id)}>
                  <td>{restaurant.name}</td>
                  <td>{restaurant.location}</td>
                  <td>{"$".repeat(restaurant.price_range)}</td>
                  <td>{renderRating(restaurant)}</td>
                  <td>
                    <button 
                      type="button" 
                      className="btn btn-warning btn-sm" 
                      onClick={(e) => handleUpdate(e, restaurant.id)}
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button type="button" className="btn btn-danger btn-sm" onClick={(e) => handleDelete(e, restaurant.id)}>Delete</button>
                  </td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default RestaurantList