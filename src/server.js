const express = require('express');
const Router = require('./routes');

const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());

app.get('/', (request, response) => response.json({
  message: 'Meu server Express, Typescript e ESLint!',
}));

app.use('/api', Router);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
