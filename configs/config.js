const dotenv = require('dotenv')
dotenv.config({ path: './.env.local' })

const config = {
  MONGODB_URL: process.env.MONGODB_URL,
  CONNECT_OPTIONS: {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  },
  CLIENT_URL: process.env.CLIENT_URL,
  FONDY_MERCHANT_ID: process.env.FONDY_MERCHANT_ID,
  FONDY_SECRET_KEY: process.env.FONDY_SECRET_KEY,
  SERVER_URL: process.env.SERVER_URL,
  NOVA_POSHTA_API_LINK: process.env.NOVA_POSHTA_API_LINK,
  NOVA_POSHTA_API_KEY: process.env.NOVA_POSHTA_API_KEY
}

module.exports = config
