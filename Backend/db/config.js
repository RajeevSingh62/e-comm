const mongoose= require('mongoose');

exports.connectDB = async()=>{
    await mongoose.connect("mongodb+srv://rajeevsingh43754:lqm54VYzcPmYbLHK@cluster0.3j5ie.mongodb.net/E-Comm");
    console.log("database created")
}