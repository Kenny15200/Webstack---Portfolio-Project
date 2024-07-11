// Calculate joint venture agreement quotes
app.post('/quotes/joint-venture', async (req, res) => {
    const { propertyId, partnershipAmount, duration } = req.body;
    try {
      const query = 'SELECT expected_roi FROM properties WHERE id = $1';
      const { rows } = await pool.query(query, [propertyId]);
      const expectedRoi = rows[0].expected_roi;
      const partnershipReturn = (partnershipAmount * expectedRoi / 100) * duration;
      res.json({ propertyId, partnershipAmount, duration, partnershipReturn });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  