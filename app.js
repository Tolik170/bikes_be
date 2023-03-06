const mongoose = require('mongoose')
const dotenv = require('dotenv')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const errorMiddleware = require('./middlewares/errorHandling')
const { createNotFoundError } = require('./utils/errorHellpers')

const router = require('./routes/route')
const { MONGODB_URL, CONNECT_OPTIONS, CLIENT_URL } = require('./configs/config')

dotenv.config({ path: './env.local' })
mongoose.connect(MONGODB_URL, CONNECT_OPTIONS).then(() => console.log('DB connection successful'))

const app = express()
const port = process.env.PORT || 4000

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}
app.use(express.json())
app.use(
  cors({
    origin: CLIENT_URL,
    credentials: true,
    methods: 'GET, POST, PATCH, DELETE',
    allowedHeaders: 'Content-Type, Authorization'
  })
)
app.use(express.static(`${__dirname}/public`))
app.use('/', router)
app.use((_req, _res, next) => {
  next(createNotFoundError())
})
app.use(errorMiddleware)

app.listen(port, () => {
  console.log(`running on port ${port}`)
})
