app.post('/caretaker/request', async (req, res) => {
    const { userId, propertyId, duration } = req.body;
    try {
      const query = 'INSERT INTO caretaker_services (user_id, property_id, duration) VALUES ($1, $2, $3) RETURNING *';
      const values = [userId, propertyId, duration];
      const { rows } = await pool.query(query, values);
      res.json(rows[0]);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Fetch caretaker services
  app.get('/caretaker/services', async (req, res) => {
    try {
      const { rows } = await pool.query('SELECT * FROM caretaker_services');
      res.json(rows);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  