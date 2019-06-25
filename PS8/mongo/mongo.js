//This code is from https://stackoverflow.com/questions/24621940/how-to-properly-reuse-connection-to-mongodb-across-nodejs-application-and-module
//install mongodb by npm separately
const mongoClient = require('mongodb').MongoClient;
const mongoURL = 'mongodb://localhost:27017/test';

let _db;

module.exports = {

    connect: function( callback ) {
        mongoClient.connect( mongoURL,  { useNewUrlParser: true }, function( err, client ) {
            _db  = client.db('passport');
            return callback( err );
        } );
    },
    getDB: () => { return _db; }


}
