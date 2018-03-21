'use strict';

// REVIEW: There is a package here called body-parser, which is used by the provided POST route. Be sure to install that and save it as a dependency after you create your package.json.
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

//Defining which directory we are serving files from.
app.use(express.static('./public'));

//Assigning route for new HTML to form.
app.get('/form', (request, response) => {
  response.sendFile('public/new.html', {root: '.'});
  console.log( 'hello');
});

const bodyParser = require('body-parser').urlencoded({extended: true});

app.post('/articles', bodyParser, function(request, response) {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.send('Record posted to server!!');
});

// Thsi is event listener to listen on a specific port.
app.listen(PORT, () =>
  console.log(`listening on  port ${PORT}`)
);
