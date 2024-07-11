// Calculate ROI for a specific investment
app.get('/investments/roi/:investmentId', async (req, res) => {
    const { investmentId } = req.params;
    try {
      const query = 'SELECT amount, roi, tenure FROM investments WHERE id = $1';
      const { rows } = await pool.query(query, [investmentId]);
      const investment = rows[0];
      const roiAmount = (investment.amount * investment.roi / 100) * investment.tenure;
      res.json({ investment, roiAmount });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  