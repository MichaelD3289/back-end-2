const express = require('express');
const cors = require('cors');
const ctrl = require('./controller')

const app = express();
const port = 4004;

app.use(cors());
app.use(express.json());

app.get('/api/houses', ctrl.getHouses);
app.post('/api/houses', ctrl.createHouse);
app.put('/api/houses/:id', ctrl.updateHouse);
app.delete('/api/houses/:id', ctrl.deleteHouse);



app.listen(port, () => console.log(`Server running on port ${port}`))

