import mongoose from "mongoose"


const Connection = async (username, password)=>{
    const  URL = `mongodb://${username}:${password}@ac-li6cjfd-shard-00-00.0my1eoo.mongodb.net:27017,ac-li6cjfd-shard-00-01.0my1eoo.mongodb.net:27017,ac-li6cjfd-shard-00-02.0my1eoo.mongodb.net:27017/?ssl=true&replicaSet=atlas-vlrmkr-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {    
        await mongoose.connect(URL, {useNewUrlParser: true});
        console.log("database connected")
    } catch (error) {
        console.log("error while connecting", error)
    }
}

export default Connection