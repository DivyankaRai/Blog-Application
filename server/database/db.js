import mongoose from "mongoose"


export const Connection = async (username, password)=>{
    const  URL = `mongodb://${username}:${password}@ac-jpmdpct-shard-00-00.chebgvb.mongodb.net:27017,ac-jpmdpct-shard-00-01.chebgvb.mongodb.net:27017,ac-jpmdpct-shard-00-02.chebgvb.mongodb.net:27017/?ssl=true&replicaSet=atlas-11lrb1-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {    
        await mongoose.connect(URL, {useNewUrlParser: true});
        console.log("database connected")
    } catch (error) {
        console.log("error while connecting")
    }
}

export default Connection