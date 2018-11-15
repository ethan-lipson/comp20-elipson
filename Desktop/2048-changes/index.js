var express = require('express');
var bodyParser = require('body-parser'); // Required if we need to use HTTP post parameters
var cors = require('cors');
// See documentation at https://github.com/chriso/validator.js
var app = express();
const path = require('path')
// See https://stackoverflow.com/questions/5710358/how-to-get-post-query-in-express-node-js
app.use(bodyParser.json());
// See https://stackoverflow.com/questions/25471856/express-throws-error-as-body-parser-deprecated-undefined-extended
app.use(bodyParser.urlencoded({ extended: true })); // Required if we need to use HTTP post parameters
app.use(cors());
// Mongo initialization and connect to database
// process.env.MONGODB_URI is the default environment variable on Heroku for the MongoLab add-on
// If environment variables not found, fall back to mongodb://localhost/nodemongoexample
// nodemongoexample is the name of the local database
var mongoUri = process.env.MONGODB_URI || 'mongodb://localhost/nodemongoexample';
var MongoClient = require('mongodb').MongoClient, format = require('util').format;
var db = MongoClient.connect(mongoUri, function(error, databaseConnection) {
  db = databaseConnection;
});

// Serve static content in folder named "public"
app.use(express.static(path.join(__dirname, 'public')));


app.post('/submit', function(request, response) {
  var username = request.body.username;
  var score = request.body.score;
  var grid = request.body.grid;
  var created_at = new Date();
  
  var toInsert = {
    "username": username,
    "score": score,
    "grid": grid,
    "created_at": created_at
  };

  db.collection('scores', function(error, coll) {
    coll.insert(toInsert, function(error, saved) {
      if (error) {
        response.send(500);
      }
      else {
          response.send();
      }
      });
  });
});

app.get('/', function(request, response) {
  response.set('Content-Type', 'text/html');
  var indexPage = '';

  // Line 50: equivalent to `db.fooditems` in MongoDB client shell
  db.collection('scores', function(er, collection) {

    // Line 53: equivalent to `db.fooditems.find()` in MongoDB client shell
    collection.find().toArray(function(err, results) {

      // All results of db.fooditems.find() will go into...
      // ...`results`.  `results` will be an array (or list)
      if (!err) {
        indexPage += "<!DOCTYPE HTML><html><head><title>2048 Scores</title></head><body><h1>2048 Scores</h1><table><tr><th><h3>User</h3></th><th>"+' '+'<h3>Score</h3></th><th>'+' '+'<h3>Timestamp</h3></th></tr>';
        for (var count = 0; count < results.length; count++) {
          console.log(results[count].username, results[count].score)
          indexPage += "<tr><th><p>"+results[count].username+"</p></th><th><p>"+results[count].score+"</p></th><th><p>"+results[count].created_at+"</p></th></tr>";
        }
        indexPage += "</body></html>"
        response.send(indexPage);
      } else {
        response.send('<!DOCTYPE HTML><html><head><title>2048 Scores</title></head><body><h1>Whoops, something went terribly wrong!</h1></body></html>');
      }
    });
  });
});

app.get('/scores.json', function(request, response) {
  response.set('Content-Type', 'application/json');
  var user_query = request.query.username;
  if ((user_query == ' ')||(user_query == null)){
    response.send([]);
  }

  // Line 50: equivalent to `db.fooditems` in MongoDB client shell
  db.collection('scores', function(er, collection) {

    // Line 53: equivalent to `db.fooditems.find()` in MongoDB client shell
    collection.find({'username':user_query}).toArray(function(err, results) {

      // All results of db.fooditems.find() will go into...
      // ...`results`.  `results` will be an array (or list)
      if (!err) {
        response.send(results);
      } else {
        response.send([]);
      }
    });
  });
});

app.listen(process.env.PORT || 3000);