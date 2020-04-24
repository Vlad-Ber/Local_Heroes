const express = require('express');
var bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
/*var cors = require('cors');
app.use(cors());
app.use(cors({origin: true, credentials: true}));
*/
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

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

    //FUNC: Check if a document exists
    //ARG: Collection name in string
    //ARG: Query to search or in JSON format
    //RET: True if document_query exists in collection, else false
    async function documentExist(collection, document_query){
	const coll = db.collection(collection);
        let foundQuery = await coll.findOne(document_query).catch(error => console.error(error));
        if(foundQuery) {
            return true;
        } else {
            return false;
        }
    }
    //FUNC: Check if user email/username exists
    //ARG: Username in JSON format
    //ARG: Email in JSON-Format
    //RET: True if either usernamee/email is in Users-collection, else false
    async function checkUser(curUserName, curEmail){
        let checkUser = await documentExist("Users", {"username": curUserName});
        let checkEmail = await documentExist("Users", {"email": curEmail});
        if(checkUser == true || checkEmail == true){
            return true;
        }
        else{
            return false;
        }
    }
  
    //FUNC: Insert Area, used by insertUser
    //ARG: AreaID
    //ARG: Email to add in Area
    async function insertArea(areaID, email){
	      var data = {
	          "areaID": areaID,
	          "users": [email],
	          "errands": [],
	      };
	      await areas.insertOne(data).catch(error => console.error(error));
	      console.log("Area with ID " + areaID + " has been added!");
    }

    //FUNC: Adds user to area
    //ARG: Area to add user to
    //ARG: The email of the user to add
    async function updateArea(areaID, email){
	      var areaToFind = {"areaID": areaID};
	      areas.updateOne(areaToFind, {"$push": {"users": email } } )
    }

  
    //FUNC: Get all erands for an Area
    //ARG: Area to get errands from
    //RET: Array of errands in area
    async function getErrandsArea(areaID){
        console.log("inside getErrandsArea");
	      let findResult = await errands.find({"areaID": areaID}).toArray();
        console.log(findResult);
	      return findResult;
    };
  
    //FUNC: Get all erands for a use
    //ARG: user.email to get errands from
    //RET: Array of errands created by a user by given email
    async function getErrandsEmail(email){
	      let findResult = await errands.find({"user": email}).toArray();
	      return findResult;
    }


    async function getUser(username){
	var user =  await users.findOne({"username": username}).catch(error => console.error(error));
	console.log("User in getUser is: " + user);
        return user;
    }

    //FUNC: Adds a user to db. Adds user to given area. If area doesnt exist, create new area.
    //ARGS: data required
    async function insertUser(username, password, email, name, age, address, description, areaID, mobile, city){
	      var data = {
            "username": username,
            "password": password,
            "email": email,
            "name": name,
	          "age": age,
	          "address": address,
	          "desription": description,
	          "virtuePoints": 0,
	          "areaID": areaID,
		  "mobile": mobile,
		  "city": city,
	      };
	var queryToFind = {"email": email};
        var userNameToFind = {"username": username};

	var findEmail = await documentExist("Users", queryToFind);
        var findUser = await documentExist("Users", userNameToFind);
	if(findUser == false && findEmail == false){

	    await users.insertOne(data).catch(error => console.error(error));
	    console.log("User " + name + " has been added!");
	    var areaToFind = {"areaID": areaID};
	    var findArea = await documentExist("Areas", areaToFind);
	    if (findArea == false) {
		await insertArea(areaID, email);
	    } else {
		await updateArea(areaID, email);
	    }
	    //TODO: Maybe dont need
	    if(findUser == true){
                console.log("A user with this username already exists")
	    }
	    if(findEmail == true){
                console.log("A user with this email already exists");
	    }  
	}
    };

               
    //FUNC: Checks if password is correct for a given user
    //ARG: username to check password for
    //ARG: password to check
    //RET: True if given password matches the password stored for the given username in db
    async function loginFunction(username, password){
        let userCollection = db.collection("User");

        let curUser = await users.findOne({"username":username}).catch(error => console.log(error));
        let curUserPassword = curUser.password;

        if(curUserPassword === password){
            return true;
        } else {
            return false;
        }
    }

    async function takeErrand(errandID, helperEmail){
       
        let curErrand = await errands.findOne({"_id": new ObjectID(errandID) });
        let curHelper = await users.findOne({"email": helperEmail});

        let updateErrand = { $set: { helper: curHelper.email, status: "inProgress" } };
        await errands.updateOne(curErrand, updateErrand);
        
    }


    //FUNC: Inserts a Errand to errand collection
    //ARG: Data needed for Errand
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

    //FUNC: Deletes a errand from db
    //ARG: ErrandID to remove
    //TODO: Inte klar
    async function deleteErrands(errandId){
        let arg = {"_id": new ObjectID(errandId)};
        let findErrands = await documentExist("Errands", arg);

        if(findErrands == true){
            errands.deleteOne(arg, function(err, result) {
                if(err){
                    throw err;
                }
            });
        } else {
            console.log("Could not found the document");
        }
    };
   //--------------------------------MESSAGING FUNKTIONER-----------------------------------------------------// 
    app.use(bodyParser.json());
    var router = express.Router();

    // GETs username and checks if it unique
    app.post('/check-username', (username, res) => {
      let u = username.body;
      users.find({username: u}).catch(error => console.error(error));
    })

    // GETs and sends user data to database
    app.post('/insertUser', async (userData, res) => {
        let user = userData.body;
        insertUser(user.username, user.password, user.email, user.name, user.age, user.address,
                   user.description, user.areaId, user.mobile, user.city);
    });

    app.post('/check-user', async (data, res) => {
        let user = data.body;
        let curUserName = {"username": user.username };
        let curEmail = {"email": user.email };

        let result = await checkUser(curUserName, curEmail)

        let dataToSend = ({"uniqueUser": result});

        res.send(dataToSend);

    });

    app.post("/login-user", async (data, res) => {
        let user = data.body;
        let username = user.username;
        let userExists = await documentExist("Users", {"username": username});

        let dataToSend;

        if(userExists) {
            let correctLogin = await loginFunction(username, user.password);
            if(correctLogin) {
		let user = await getUser(username);
		console.log(user);
		dataToSend = ({ "login": userExists, "user": user});
		res.send(dataToSend);
            }
        } else {
              dataToSend = ({ "login": false });
              res.send(dataToSend);
        }


    });

    app.post('getErrands', function(req, res) {
	     var errands = getErrandsArea(req.body.areaID);
	     res.send({errands});
    });
})
client.close();
