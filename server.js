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

    //Generell function to check if a document exist
    async function documentExist(collection, document_query){
	      const coll = db.collection(collection);
	      let foundQuery = await coll.findOne(document_query);
	      if (foundQuery == null){
	          return false;
	      }
	      else{
	          return true;
	      }
    }

<<<<<<< HEAD
    async function insertArea(areaID, email){
	var data = {
	    "areaID": areaID,
	    "users": [email],
	    "errands": [],
	};
	await areas.insertOne(data).catch(error =>console.error(error));
	console.log("Area with ID " + areaID + " has been added!");
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
	    await users.insertOne(data).catch(error =>console.error(error));
	    console.log("User " + name + " has been added!");
	    var areaToFind = {"areaId": areaID}
	    var findArea = await document_exist("Areas", areaToFind);
	    if (findArea == false){
		await insertArea(areaID, email);
	    }
	    else{
		//UpdateArea
	    }
	}
	else{
	    console.log("A user with this email already exists");
	}
	
    };

    async function insertErrand(title, description, requester,  type, adress, contact, areaID){
	var date = new Date();
	var dateString= date.toISOString().slice(0,10);
	var data = {
	    "createdAt": dateString, //Future improvement, show hours ago created
	    "closedAt": "",
	    "status": "Waiting",
	    "title": title,
	    "description": description,
	    "adress": adress,
	    "contact": contact,
	    "helper": "",
	    "requester": requester,    //TODO: koppla requester till userID
	    "areaID": areaID,
	};
	await errands.insertOne(data).catch(error =>console.error(error));
	console.log("Errand has been created by " + requester);
    }
	    

//-----------------------------------------------------------------------------------------------------------
=======
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
	      var findUser = await documentExist("Users", queryToFind);
	      if( findUser == false){
	          users.insertOne(data).catch(error =>console.error(error));
	          console.log("User " + name + " has been added!");
	      }
	      else{
	          console.log("A user with this email already exists");
	      }
    };

    const ObjectID = require("mongodb").ObjectID;
    // perform actions on the collection object
>>>>>>> f0296b34560a977b2740e5965d739196312787d7

    //-------------------------------------------------------------------------------------//

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
    
    // create a GET route
    app.get('/api/greeting', (req, res) => {
	      res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
    });

    app.post('/', function(req, res) {
<<<<<<< HEAD
	var testData = req.body.data1;
	var dataToSend = {"testData1":testData, "testdata2": "boll"}
	insertUser("olle@hotmail.com", "Olle Eriksson", 20, "Sveavägen 1", "Gillar att laga mat", 75757);
	//insertErrand("Laga mat", "Handla mjölk på Ica", "Anna", "Shopping", "Ringvägen 2", "07567467", 75757);
	
=======
	      var testData = req.body.data1;
	      var dataToSend = {"testData1":testData, "testdata2": "boll"}
	      insertUser("olle@hotmail.com", "Olle Eriksson", 20, "Sveavägen 1", "Gillar att laga mat", 75757);

	      var testData = req.body.data1;
	      var dataToSend = {"testData1":testData, "testdata2": "boll"}
	      console.log(testData);
        // errands.insertOne(dataToSend);
        let id = "5e906452b7e4ac5c969483c4";
        deleteErrands(id);
	      
>>>>>>> f0296b34560a977b2740e5965d739196312787d7
    });

});

client.close();
