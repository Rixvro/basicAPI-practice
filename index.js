const express = require('express')
const cors = require('cors')

const app = express()
const port = 3000

const movies = 
["The Avengers", "All Dogs Go to Heaven",
 "The Aristocats", "The Brave Little Toaster",
 "The Lord of the Rings", "The Revenant",
 "Cats & Dogs", "Something with the in the title"
]

app.use(cors())

app.get('/all', (req, res) => {
  res.json(movies);
})

app.get('/find', (req, res) => {
  let result;
  if (req.query.hasOwnProperty('contains')){
    result = movies.filter(movie => movie.toLowerCase().includes(req.query.contains));
  } else {
    result = movies.filter(movie => movie.toLowerCase().startsWith(req.query.startsWith));
  }
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

