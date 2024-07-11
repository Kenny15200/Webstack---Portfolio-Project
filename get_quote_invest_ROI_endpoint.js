// Calculate investment return quotes
app.post('/quotes/investment', async (req, res) => {
    const { propertyId, investmentAmount, duration } = req.body;
    try {
      const query = 'SELECT roi FROM properties WHERE id = $1';
      const { rows } = await pool.query(query, [propertyId]);
      const roi = rows[0].roi;
      const returnAmount = (investmentAmount * roi / 100) * duration;
      res.json({ propertyId, investmentAmount, duration, returnAmount });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  