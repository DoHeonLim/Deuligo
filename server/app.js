const express = require('express');
const { swaggerUi, specs } = require('./swagger');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello jjj!');
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

