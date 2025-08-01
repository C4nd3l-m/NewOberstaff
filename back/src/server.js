const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

const contactRoutes = require('./routes/contactRoutes'); 
app.use('/api', contactRoutes); 

app.get('/', (req, res) => {
  res.send('API funcionando');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Error interno del servidor" });
});


module.exports = app;
