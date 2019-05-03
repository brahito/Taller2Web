const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
app.get('/tienda/:categoria',function(request,response){
    console.log(request.params.categoria);

    var query ={};
    if(request.params.categoria){
        query.categoria = request.params.categoria;
    }

    var collection = db.collection('productos');

    collection.find(query).toArray(function(err,docs){
        assert.equal(err,null);

        var contexto ={
            productos: docs
        };
        response.render('tienda', contexto);
    });
});

client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  client.close();
});