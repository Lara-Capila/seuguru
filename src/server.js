const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (request, response) => response.json({
  message: 'Meu server Express, Typescript e ESLint!',
}));

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
