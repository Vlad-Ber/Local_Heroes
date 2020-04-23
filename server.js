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
        console.log("inside getErrandsArea");
	      let findResult = await errands.find({"areaID": areaID}).toArray();
        console.log(findResult);
	      return findResult;
    };
    async function getErrandsEmail(email){
	      let findResult = await errands.find({"user": email}).toArray();
	      return findResult;
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
            //TODO: Maybe dont need
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
	          "user": requester,    //TODO: koppla requester till userID
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
    /*app.get('/api/greeting', (req, res) => {
	      res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
        });*/

    app.post('/getErrandsArea', async function(req, res) {
        console.log("Inside apppost gettErrandsAReas")
        let areaID = req.body.data1;
        
        let errands = await getErrandsArea(areaID);
        
        console.log(errands);
        
        res.send({"errands": errands});
    });
      
});
client.close();
