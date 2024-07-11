const express = require('express');
const app = express();
const { Pool } = require('pg');
const bodyParser = require('body-parser');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.use(bodyParser.json());

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
