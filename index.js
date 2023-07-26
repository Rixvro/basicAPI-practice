const express = require('express')
const cors = require('cors')

const app = express()
const port = 3000

app.use(cors())

app.get('/all', (req, res) => {
  res.json(movies);
})

app.get('/find', (req, res) => {
  const result = movies.filter(movie => movie.toLowerCase() === req);
  res.json(result);
})

app.delete('/all', (req, res) => {
  while (movies.length > 0){
    movies.pop();
  }
  res.sendStatus(200);
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const movies = 
["The Avengers", "All Dogs Go to Heaven",
 "The Aristocats", "The Brave Little Toaster",
 "The Lord of the Rings", "The Revenant",
 "Cats & Dogs"
]
