import express from 'express';

const app = express();

app.get('/users', (reqiest, response) => {
  console.log('Listagem de usuários');

  response.json([
    'João',
    'Diego',
    'Mayk'
  ]);
});

app.listen(3334);