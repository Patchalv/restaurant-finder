import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import UpdateRestaurant from './routes/UpdateRestaurant';
import RestaurantDetail from './routes/RestaurantDetail';
import { RestaurantContextProvider } from './context/RestaurantContext';


const App = () => {

  return (
    <RestaurantContextProvider>
      <div className='container'>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/restaurants/:id/update" element={<UpdateRestaurant />} />
            <Route path="/restaurants/:id" element={<RestaurantDetail />} />
          </Routes>
        </Router>
      </div>
    </RestaurantContextProvider>
  )
}

export default App