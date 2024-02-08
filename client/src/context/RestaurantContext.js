import React, { useState, createContext } from 'react';

export const RestaurantContext = createContext();

export const RestaurantContextProvider = props => {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null)
  const [reviews, setReviews] = useState([]);

  const addRestaurants = (restaurant) => {
    setRestaurants([...restaurants, restaurant]);
  };

  const addReviews = (review) => {
    setReviews([...reviews, review]);
  }

  return (
    <RestaurantContext.Provider 
    value={{
      restaurants, 
      setRestaurants, 
      addRestaurants,
      selectedRestaurant,
      setSelectedRestaurant,
      reviews,
      setReviews,
      addReviews
    }}>
      {props.children}
    </RestaurantContext.Provider>
  );
};