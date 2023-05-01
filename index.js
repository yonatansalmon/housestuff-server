const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const supermarketRouter = require('./routes/supermarketRoutes');

const app = express();
const PORT = 8080;

app.use(cors({ origin: ['http://localhost:3000','https://housestuff.netlify.app'], credentials: true }));
app.use(express.json());
app.use('/api', supermarketRouter);

mongoose.connect('mongodb+srv://admin:admin@countriescluster.tf1qxxo.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
