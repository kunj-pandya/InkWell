import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI,{
        dbName: "MERN_STACK_BLOGGING_APP"
    }).then(() => {
        console.log("connected to database!");
    }).catch(err => {
        console.log(`some error occured while connecting to database: ${err}`);
    });
};