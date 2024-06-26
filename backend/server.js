const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const gameRoutes = require('./routes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api', gameRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
