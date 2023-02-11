// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

console.log(new Date('1970-01-01T00:00:00.123Z'));
console.log(new Date('2000-01-01T00:00:00.123Z'));
console.log(Number(new Date('2500-01-01T00:00:00.123Z')));
console.log(new Date('250-01-01T00:00:00.123Z') === 'Invalid Date');

// date
app.get('/api/:date?', function (req, res) {
  const { date } = req.params;
  if (new Date(date) != 'Invalid Date') {
    res.json({
      unix: Number(date),
      utc: date
    })
  }
  // if date is empty
  else if (!date) {
    const currentDate = new Date();
    res.json({
      unix: currentDate.getTime(),
      utc: currentDate
    })
  }
  res.json({
    date
  })
})

// listen for requests :)
// process.env.PORT replaced by 5000
var listener = app.listen(5000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
