var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var todos = require('./routes/todos');
var spotify = require('./routes/spotify');

var app = express();

app.use(express.static(path.join(__dirname,'client/dist')));
app.use(bodyParser.json());


app.use('/api/v1',todos);
app.use('/api/spotify',spotify);
app.use('/',index);

app.listen(3000,function(){
    console.log('Server Start on port 3000 ...');
});
