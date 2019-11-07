import app from './App';

const server = require('http').Server(app);

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
