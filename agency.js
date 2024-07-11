const express = require('express');
const app = express();
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.get('/properties', async (req, res) => {
  const { type, location, priceRange } = req.query;
  try {
    const query = `SELECT * FROM properties WHERE type = $1 AND location = $2 AND price BETWEEN $3 AND $4`;
    const values = [type, location, priceRange.min, priceRange.max];
    const { rows } = await pool.query(query, values);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
