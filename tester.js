const connectDB = require('./model/database')
const Talent = require('./model/talent');

connectDB();

const talentOne = new Talent({
    firstName: "Ousmane",
    lastName: "Sow",
    email: "ousmane.sow@gmail.com",
    profile: "Network Engineer"});

const talentTwo = new Talent({
    firstName: "John",
    lastName: "Robinson",
    email: "jb@jooohnrobinson.com",
    profile: "FrontendEngineer"});


async function saveToDB(model){
    try{
        const talent = await model.save();
        console.log("Data saved");
        console.log(talent);
    }
    catch(err){
        console.error(err);
    }
}
saveToDB(talentOne);
saveToDB(talentTwo);