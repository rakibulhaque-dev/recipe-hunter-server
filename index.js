const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())

const chef = require('./data/chef.json')

app.get('/', (req, res) => {
    res.send('Dragon API Running')
});

app.get('/chef', (req, res) => {
    res.send(chef)
});

app.get('/chef/:id', (req, res) => {
    const { id } = req.params;
    
    const matchingChef = chef.find((c) => c.chef_id === id);
  
    if (!matchingChef) {
      return res.status(404).send('Chef not found');
    }
  
    res.send(matchingChef);
  });
  
  


app.listen(port, () => {
    console.log(`DRAGON API is running on port: ${port}`)
})





// copy of another 