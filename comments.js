// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
// Create a new express application named 'app'
const app = express();
// The port the express app will listen on
const port = process.env.PORT || 8081;
// Use CORS
app.use(cors());
// Use bodyParser to parse application/json content-type
app.use(bodyParser.json());
// Use morgan to log request in dev mode
app.use(morgan('combined'));
// Require Comments routes
const commentsRoutes = require('./src/routes/comments.routes');
// using as middleware
app.use('/api/v1/comments', commentsRoutes);
// Start server listening on port 8081
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});