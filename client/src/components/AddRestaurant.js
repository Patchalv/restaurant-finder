import React, { useContext, useState } from 'react';
import restaurantsApi from '../apis/restaurantsApi';
import { RestaurantContext } from '../context/RestaurantContext';

const AddRestaurant = () => {
  const { addRestaurants } = useContext(RestaurantContext); 
  const [ name, setName ] = useState('');
  const [ location, setLocation ] = useState('');
  const [ priceRange, setPriceRange] = useState('Price Range');

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await restaurantsApi.post("/", {
        name: name,
        location: location,
        price_range: priceRange
      });
      addRestaurants(response.data)
      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className=' mb-4 d-flex justify-content-center'>
      <form action='' className='row gx-3 gy-2 align-items-center'>
          <div className='col-auto'>
            <input type="text" className='form-control' placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className='col-auto'>
            <input type="text" className='form-control' placeholder='location' value={location} onChange={(e) => setLocation(e.target.value)} />
          </div>
          <div className='col-auto'>
            <select className='form-select' placeholder={priceRange} value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
              <option disabled>Price Range</option>
              <option value='1'>$</option>
              <option value='2'>$$</option>
              <option value='3'>$$$</option>
              <option value='4'>$$$$</option>
              <option value='5'>$$$$$</option>
            </select>
          </div>
          <div className='col-auto'>
            <button onClick={handleSubmit} className='btn btn-primary'>Add</button>
          </div>
      </form>
    </div>
  )
}

export default AddRestaurant