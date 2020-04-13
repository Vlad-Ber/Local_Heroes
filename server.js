const express = require('express');
var bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Vlad-Ber:arneiskogen1@cluster0-76fsx.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true });
client.connect(err => {
    const db = client.db("LocalHeroes");
    const areas = db.collection("Areas");
    const errands = db.collection("Errands");
    const ObjectID = require("mongodb").ObjectID;
    // perform actions on the collection object

    //-------------------------------------------------------------------------------------//

    async function documentExist(curCollection, documentQuery){
        let findCollection = db.collection(curCollection);
        let findDocument = await findCollection.findOne(documentQuery);
        if(findDocument == null){
            return false;
        }
        else{
            return true;
        }
    };

    async function deleteErrands(errandId){
        let arg = {"_id": new ObjectID(errandId)};
        let findErrands = await documentExist("Errands", arg);
        
        if(findErrands == true){
            errands.deleteOne(arg, function(err, result) {
                if(err){
                    throw err;
                }
            });
        } else{
            console.log("Could not found the document");   
        }
    };
    
    //app.use(bodyParser.urlencoded({ extended: false })); : DETTA KANSKE BEHÖVS I FRAMTIDEN
    app.use(bodyParser.json());

    var router = express.Router();

    // console.log that your server is up and running

    
    // create a GET route
    app.get('/api/greeting', (req, res) => {
	      res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
    });

    app.post('/', function(req, res) {
	      var testData = req.body.data1;
	      var dataToSend = {"testData1":testData, "testdata2": "boll"}
	      console.log(testData);
        // errands.insertOne(dataToSend);
        let id = "5e906452b7e4ac5c969483c4";
        deleteErrands(id);
	      
    });

});
client.close();
