// Fetch all facility management services
app.get('/facility/services', async (req, res) => {
    try {
      const { rows } = await pool.query('SELECT * FROM facility_services');
      res.json(rows);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Add a new facility management service
  app.post('/facility/services', async (req, res) => {
    const { name, description, propertyId } = req.body;
    try {
      const query = 'INSERT INTO facility_services (name, description, property_id) VALUES ($1, $2, $3) RETURNING *';
      const values = [name, description, propertyId];
      const { rows } = await pool.query(query, values);
      res.json(rows[0]);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Request a facility management service
  app.post('/facility/request', async (req, res) => {
    const { userId, serviceId } = req.body;
    try {
      const query = 'INSERT INTO facility_requests (user_id, service_id) VALUES ($1, $2) RETURNING *';
      const values = [userId, serviceId];
      const { rows } = await pool.query(query, values);
      res.json(rows[0]);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  