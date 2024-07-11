  // Express interest in a partnership
app.post('/investments/partnerships', async (req, res) => {
    const { userId, investmentId } = req.body;
    try {
      const query = 'INSERT INTO partnerships (user_id, investment_id, status) VALUES ($1, $2, $3) RETURNING *';
      const values = [userId, investmentId, 'interested'];
      const { rows } = await pool.query(query, values);
      res.json(rows[0]);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  