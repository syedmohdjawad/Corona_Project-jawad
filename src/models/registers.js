const mongoose = require("mongoose");

// Creating a schema (coronaSchema is an object)
const coronaSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            required : true
        },
        email : {
            type: String,
            required: true,
            unique : true,
        },
        mobile : {
            type : Number,
            required: true,
            unique : true
        },
        symptom : {
            type : String
        },
        message : String,
        date : {
            type : Date,
            default : Date.now
        }
    }
)

// collection creation
const Table = new mongoose.model("Table",coronaSchema);

module.exports = Table;