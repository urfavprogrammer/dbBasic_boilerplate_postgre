const express = require('express');
const db = require('./config/db');
const userRoutes = require('./routes/users');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());


// Define a simple route for testing
app.get('/', (req, res) => {
  res.send('Hello, world!');
});


// Use the user routes
app.use('/users', userRoutes);




// Sync database and start the server
db.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Unable to sync the database:', error);
  });