const express = require('express')
const app = express()
const cors=require('cors')
require('dotenv').config();
const bodyParser=require('body-parser')
require('./models/db')
const UserRoute=require('./routes/UserRoute')
const BlogRoute=require('./routes/BlogRoute')
const Contactroute=require('./routes/ContactRoute')
const OfferRoute=require('./routes/OfferRoute')
// const cron = require('node-cron');
// const Offer = require('./models/OfferModel');
const MockUpRoute=require('./routes/MockupRoute')
const port = process.env.PORT || 8080


app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

app.use('/api',UserRoute)
app.use('/api/blog',BlogRoute)
app.use('/api/contact',Contactroute)
app.use('/api/offer',OfferRoute)
app.use('/api/mockUp',MockUpRoute)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})