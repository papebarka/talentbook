var mongoose = require("mongoose")

let db = null;

async function connect(){
    try{
        db = await mongoose.connect("mongodb://localhost/talentbook");
    }
    catch(err){
        console.error(err);
    }
    finally{
        console.log("Connection iniated");
    }
}

//connect();

mongoose.connection.on('error', err => {
    console.error(err);
  });

  mongoose.connection.on('connected', () => {
    console.log("Connected to the database");
    console.log(mongoose.connection.host);
  });

module.exports = connect;