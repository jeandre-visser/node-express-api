import express from 'express';
import bodyParser from 'body-parser';

// our entire application lays within this app variable
const app = express();
const PORT = 8080;

// Initialize bodyParser middleware
app.use(bodyParser.json());

// Listen to requests on our port which runs a callback function
app.listen(PORT, () => console.log(`Server is running on: http://localhost:${PORT}`));
