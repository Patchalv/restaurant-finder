import React, { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { RestaurantContext } from '../context/RestaurantContext'
import restaurantsApi from '../apis/restaurantsApi'

const UpdateRestaurantForm = (props) => {
  const {id} = useParams()
  const { restaurants } = useContext(RestaurantContext)
  const [ name, setName ] = useState('');
  const [ location, setLocation ] = useState('');
  const [ priceRange, setPriceRange] = useState('Price Range');
  let navigate = useNavigate();

  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await restaurantsApi.get(`/${id}`)
        setName(response.data.restaurant.name)
        setLocation(response.data.restaurant.location)
        setPriceRange(response.data.restaurant.price_range)
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    await restaurantsApi.put(`/${id}`, {
      name: name,
      location: location,
      price_range: priceRange
    });
    navigate(`/`);
  }

  return (
    <div>
      <form action='' className='row gx-3 gy-2 align-items-center'>
        <div className="mb-3">
          <label htmlFor="nameInput" className="form-label">Name:</label>
          <input type="text" className='form-control' id="nameInput" placeholder='name' value={name} onChange={(e) => setName(e.target.value)}/>
        </div>

        <div className="mb-3">
          <label htmlFor="locationInput" className="form-label">Location:</label>
          <input type="text" className='form-control' id="locationInput" placeholder='location' value={location} onChange={(e) => setLocation(e.target.value)} />
        </div>

        <div className="mb-3">
          <label htmlFor="priceRangeSelect" className="form-label">Price Range:</label>
          <select className='form-select' id="priceRangeSelect" value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
            <option disabled>Price Range</option>
            <option value='1'>$</option>
            <option value='2'>$$</option>
            <option value='3'>$$$</option>
            <option value='4'>$$$$</option>
            <option value='5'>$$$$$</option>
          </select>
        </div>


        <div className="mb-3">
          <button type="submit" className='btn btn-primary me-2' onClick={handleSubmit}>Update</button> 
          <button type="submit" className='btn btn-outline-primary' onClick={() => navigate('/')}>Back</button>
        </div>
      </form>    
    </div>
  )
}

export default UpdateRestaurantForm;