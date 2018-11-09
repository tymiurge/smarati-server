1. use https://getstream.io/blog/building-a-node-js-powered-api-with-express-mongoose-mongodb/ to structure the project
2. use package.json to indicate api version: 
```
const pkg = require('./package.json')
app.get('/api/version', (req, res) => res.status(200).send(pkg.version));

```
3. use the way of connecting to DB from https://getstream.io/blog/building-a-node-js-powered-api-with-express-mongoose-mongodb/
