import mongoos from "mongoose";


const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        requered: true 
    },
    password: {
        type: String,
        requered: true
    },
    rol: {
        type: String
    }
})