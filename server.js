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

    async function insertArea(areaID, email){
	var data = {
	    "areaID": areaID,
	    "users": [email],
	    "errands": [],
	};
	await areas.insertOne(data).catch(error =>console.error(error));
	console.log("Area with ID " + areaID + " has been added!");
    }

    async function updateArea(areaID, email){
	var areaToFind = {"areaID": areaID};
	areas.updateOne(areaToFind, {"$push": {"users": email } } )
    }

    async function getErrandsArea(areaID){
	errands.find({"areaID": areaID}).toArray(function(err, result) {
	    if (err) throw err;
	    return result;
	});
    }

    async function getErrandsEmail(email){

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
	var findUser = await documentExist("Users", queryToFind);
	if( findUser == false){
	    await users.insertOne(data).catch(error =>console.error(error));
	    console.log("User " + name + " has been added!");
	    var areaToFind = {"areaID": areaID};
	    var findArea = await documentExist("Areas", areaToFind);
	    if (findArea == false){
		await insertArea(areaID, email);
	    }
	    else{
		await updateArea(areaID, email);
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
	var insert = await errands.insertOne(data).catch(error =>console.error(error));
	var insertedId = insert.insertedId;
	var areaToUpdate = {"areaID": areaID};
	areas.updateOne(areaToUpdate, {"$push": {"errands": insertedId } } )


	console.log("Errand has been created by " + requester);
    }


    const ObjectID = require("mongodb").ObjectID;

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

    // GETs username and checks if it unique
    app.post('/check-username', (username, res) => {
      let u = username.body;
      users.find({username: u}).catch(error => console.error(error));
    })

    // GETs and sends user data to database
    app.get('/addUserToDB', (userData, res) => {
      let user = userData.body;
      console.log(user)
      //users.insertOne(user).catch(error => console.error(error));
    })

    app.post('/', function(req, res) {
	var testData = req.body.data1;
	var dataToSend = {"testData1":testData, "testdata2": "boll"}
	//insertUser("markus@gmail.com", "Markus Ollesson", 20, "Kungsvägen 1", "Lyfter tungt", 75565);
	//insertUser("olle@gmail.com", "Olle Ollesson", 20, "Sveavägen 1", "Lagar mat", 75757);
	//insertErrand("Laga mat", "Handla mjölk på Ica", "Anna", "Shopping", "Ringvägen 2", "07567467", 56788);
  })
})

client.close();
