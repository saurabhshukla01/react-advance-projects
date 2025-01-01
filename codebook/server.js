const jsonServer = require('json-server');
const auth = require('json-server-auth');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'data', 'db.json'));
const middlewares = jsonServer.defaults();

// Bind the auth middleware
server.db = router.db; // Required for json-server-auth to work
server.use(middlewares);
server.use(auth);
server.use(router);

const PORT = 4000;
server.listen(PORT, () => {
    console.log(`JSON Server with Auth is running on http://localhost:${PORT}`);
});
