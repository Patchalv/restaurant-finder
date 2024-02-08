import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { RestaurantContext } from '../context/RestaurantContext'
import restaurantsApi from '../apis/restaurantsApi'
import StarRating from '../components/StarRating'
import Reviews from '../components/Reviews'
import AddReview from '../components/AddReview'


const RestaurantDetail = () => {
  const {id} = useParams()
  const { selectedRestaurant, setSelectedRestaurant } = useContext(RestaurantContext);

  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await restaurantsApi.get(`/${id}`)
        setSelectedRestaurant(response.data)
        console.log(selectedRestaurant)
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [])

  return (
    <div className='container mb-5'>
      <h1 className='font-weight-light text-center mt-3'>{selectedRestaurant && selectedRestaurant.restaurant.name}</h1>
      <div className='text-center mb-3'>
        {selectedRestaurant && <><StarRating rating={selectedRestaurant.avgRating.avg} /><span className='text-warning ml-1'>({selectedRestaurant.reviews.length})</span></>}
      </div>
      
      <div className='container'>
        <div className='row row-cols-3 mb-2'>
          {selectedRestaurant && selectedRestaurant.reviews.map((review) => {
            return (<Reviews key={review.id} review={review} />)            
          })}
        </div>
      </div>
      {selectedRestaurant && <AddReview restaurantId={selectedRestaurant.restaurant.id}/>}
    </div>
  )
}

export default RestaurantDetail