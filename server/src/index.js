// server/src/index.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
// v0.0.23-- used to trigger circleci for debug/testing

dotenv.config();

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
