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
//----------------------------MONGODB FUNKTIONER-------------------------------------------------------------
    const db = client.db("LocalHeroes");
    const areas = db.collection("Areas");
    const errands = db.collection("Errands");
    const users = db.collection("Users");

    async function document_exist(collection, document_query){
	const coll = db.collection(collection);
	var foundQuery = await coll.findOne(document_query);
	if (foundQuery == null){
	    return false;
	}
	else{
	    return true;
	}
    }
    
    async function insertUser(email, name, age, adress, description,areaID){
	var data = {
	    "email": email,
	    "name": name,
	    "age": age,
	    "adress": adress,
	    "desription": description,
	    "virtuePoints": 0,
	    "areaID": areaID,
	};
	var queryToFind = {"email": email};
	var findUser = await document_exist("Users", queryToFind);
	if( findUser == false){
	    users.insertOne(data).catch(error =>console.error(error));
	    console.log("User " + name + " has been added!");
	}
	else{
	    console.log("A user with this email already exists");
	}
    };

//-----------------------------------------------------------------------------------------------------------

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
	insertUser("olle@hotmail.com", "Olle Eriksson", 20, "Sveavägen 1", "Gillar att laga mat", 75757);
    });
});
client.close();
