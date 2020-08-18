'use strict';

require('dotenv').config();

const express = require('express');

const app = express();
const PORT = process.env.PORT;







module.exports = {
  start: () => {
    app.listen(PORT, () => console.log(`Server Runnin' on Port ${PORT}`));
  },
};
