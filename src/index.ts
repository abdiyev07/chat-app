import mongoose from 'mongoose'
import express from 'express'
const app = express()

mongoose.connect('mongodb://localhost:27017/chat', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
})

app.get('/', (_req: any, res: any) => {
  res.send('Hello World')
})

app.listen(3000, () => {
  console.log('Server is running on 3000 port')
})
