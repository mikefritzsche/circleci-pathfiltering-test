const express = require('express');
const cors = require('cors');
require('dotenv').config();
// v0.0.20 -- used to trigger circleci for debug/testing

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Basic route
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
