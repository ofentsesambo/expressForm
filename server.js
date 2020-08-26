let express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    
    visitorInfo = [
{
    id: 1,
    name: 'Ofentse'
}
],

currentId = 1;
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.get('/visitorInfo', function(req, res) {
    res.send({ visitorInfo
    : visitorInfo
 });
});

app.get('/visitorInfo', function (req, res) {
    connection.query('select * from visitors', function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
     });
 });


app.post('/visitorInfo', function(req, res) {
    let visitorName = req.body.name;
    currentId++;
visitorInfo
.push({
        id: currentId,
        name: visitorName
    });
res.send('Visitor created');
});


app.put('/visitorInfo/:id', function(req, res) {
    let id = req.params.id,
    newName = req.body.newName,
    found = false;
    visitorInfo
.forEach(function(visitor, index) {
        if (!found && visitor.id === Number(id)) {
            visitor.name = newName;
        }
    });
    res.send('Visitor Updated');
});

app.delete('/visitorInfo/:id', function(req, res) {
    let id = req.params.id,
        found = false;
        visitorInfo

.forEach(function(visitor, index) {
        if (!found && visitor.id === Number(id)) {
            visitorInfo
        .splice(index, 1);
        }
    });

    res.send('visitor deleted');
});

let server = app.listen(3001, () => {
    let port = server.address().port;
    console.log("Listening at port " + port);
  })