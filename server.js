const express = require('express')

const app = express()
app.use('/home', (req, res) => {
  res.send('home')
})
app.use((req, res) => {
  res.send('any')
})
app.listen(process.env.PORT || 3000, () => {
  console.log('server started ')
})

