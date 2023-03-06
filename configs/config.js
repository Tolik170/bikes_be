const dotenv = require('dotenv');
dotenv.config({ path: './.env.local' });

const config = {
  MONGODB_URL: process.env.MONGODB_URL,
  CONNECT_OPTIONS: {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  CLIENT_URL: process.env.CLIENT_URL,
};

module.exports = config;
