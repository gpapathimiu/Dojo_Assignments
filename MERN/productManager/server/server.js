const express = require("express");
const app = express();
const port = 8001;
const cors = require('cors');
        
app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));

require('./config/mongoose.config');  
require('./routes/product.routes')(app);

app.listen(port, () => console.log(`The server is all fired up on port ${port}`));
