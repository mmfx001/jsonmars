const express = require('express');
const app = express();
const port = 5001;

app.use(express.json());

let trends = []; // Ma'lumotlar bazasi sifatida oddiy massiv

// Ma'lumotlarni olish uchun GET so'rovi
app.get('/data', (req, res) => {
  res.json({ trends });
});

// Ma'lumotlarni yangilash uchun POST so'rovi
app.post('/data', (req, res) => {
  const newTrends = req.body.trends;
  if (Array.isArray(newTrends)) {
    trends = newTrends;
    res.status(200).send('Data updated successfully');
  } else {
    res.status(400).send('Invalid data format');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
