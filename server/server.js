require("dotenv").config();
const express = require("express");
const app = express();
const cors = require('cors')
const morgan = require("morgan");





const port = process.env.PORT || 3006;
const db = require('./db/index');

// MIDDLEWARE
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Allow specific origin(s)
app.use(cors({
  origin: 'https://restaurant-finder-frontend-tan.vercel.app/'
}));

// ROUTING
app.get('/api/v1/restaurants', async (req, res) => {
  try {
    const results = await db.query('SELECT * FROM restaurants');

    const restaurantRatingData = await db.query('SELECT * FROM restaurants LEFT JOIN (SELECT restaurant_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating FROM reviews GROUP BY restaurant_id) reviews on restaurants.id = reviews.restaurant_id ORDER BY name ASC;');

    console.log(restaurantRatingData.rows)

    res.status(200).send(restaurantRatingData.rows);
  } catch (error) {
    console.error(error);
  }  
})

app.get('/api/v1/restaurants/:restaurantId', async (req, res) => {
  try {
    const { restaurantId } = req.params;
    const restaurant = await db.query('SELECT * FROM restaurants WHERE id = $1', [restaurantId]);
    
    const reviews = await db.query('SELECT * FROM reviews WHERE restaurant_id = $1', [restaurantId]);

    const averageRating = await db.query('SELECT AVG(rating) FROM reviews WHERE restaurant_id = $1', [restaurantId]);

    res.status(200).send({
      restaurant: restaurant.rows[0],
      reviews: reviews.rows,
      avgRating: averageRating.rows[0]
    });
  } catch (error) {
    console.error(error);
  }
})

app.post('/api/v1/restaurants', async (req, res) => {
  try {
    const { name, location, price_range } = req.body;
    const results = await db.query('INSERT INTO restaurants (name, location, price_range) VALUES ($1, $2, $3) RETURNING *', [name, location, price_range]);
    res.status(201).send(results.rows[0]);
  } catch (error) {
    console.error(error);
  }
})


app.put('/api/v1/restaurants/:restaurantId', async (req, res) => {
  try {
    const { restaurantId } = req.params;
    const { name, location, price_range } = req.body;
    const results = await db.query('UPDATE restaurants SET name = $1, location = $2, price_range = $3 WHERE id = $4 RETURNING *', [name, location, price_range, restaurantId]);
    res.status(200).send(results.rows);
    
  } catch (error) {
    console.error(error);
  }
})

app.delete('/api/v1/restaurants/:restaurantId', async (req, res) => {
  try {
    const { restaurantId } = req.params;
    const results = await db.query('DELETE FROM restaurants WHERE id = $1 RETURNING *', [restaurantId]);
    res.status(200).send(results.rows);

  } catch (error) {
    console.error(error);
  }
})

app.post('/api/v1/restaurants/:restaurantId/addReview', async (req, res) => {
  try {
    const { restaurantId } = req.params;
    const { name, rating, text } = req.body;
    
    const results = await db.query('INSERT INTO "reviews" ("restaurant_id", "name", "rating", "text") VALUES ($1, $2, $3, $4) RETURNING *', [restaurantId, name, rating, text]);
    res.status(201).send(results.rows);
  } catch (error) {
    console.error(error);
  }
});

app.listen(port, () => {
  console.log(`server is up and listening on port ${port}`);
});