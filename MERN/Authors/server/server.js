const express = require('express');
const cors = require('cors');
const port = 8000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));   

require('./config/mongoose.config');
require('./routes/author.routes.js')(app);


app.listen(port, () => console.log(`The server is all fired up on port ${port}`));
