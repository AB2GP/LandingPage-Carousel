const express = require('express');
const { resolve } = require('path');

const DIST_DIR = resolve(__dirname, '..', 'client', 'dist');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(DIST_DIR));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`);
});
