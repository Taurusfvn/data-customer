const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080; //  chose port from here like 8080, 3001

server.use(middlewares);
server.use((req, res, next) => {
  if (req.method === 'POST') {
    res.status(403).send('POST method is not allowed')
  }else if (req.method === 'PATCH') {
    res.status(403).send('POST method is not allowed')
  }else if (req.method === 'DELETE') {
    res.status(403).send('POST method is not allowed')
  }else if (req.method === 'OPTIONS') {
    res.status(403).send('POST method is not allowed')
  } else {
    next()
  }
})

server.use(router);

server.listen(port);
