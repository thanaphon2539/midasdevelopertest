// const express = require('express')
// const bodyParser = require('body-parser');

// const app = express();
// app.use(bodyParser.json({ limit: '50mb', extended: false }));
// app.use(bodyParser.urlencoded({ extended: false }));
// const testapi = require('./routes/testapi');
// app.use(testapi);

const port = 8000;
app.listen(port, () => {
  console.log(`Example on port ${port}!`)
});