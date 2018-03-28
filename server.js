//express is install and now a requirement in the code
const express = require('express')
// app will be out express routing object to use its crud method
const app = express()
// require handlebars
const handlebars = require('express-handlebars')

app.engine('handlebars', handlebars({defaultLayout: 'main-layout'}));

//app will listen on port 500 to resolve any conflicts since most are done by 3000 the || sets it up for heroku

require('.controllers/non-crud.js')(app)

app.listen(process.env.PORT||5000, () => {
  console.log('App listening on port 3000!')
})
