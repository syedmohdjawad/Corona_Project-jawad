const mongoose = require("mongoose");

// Creating a schema (coronaSchema is an object)
const vaccineSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            required : true
        },
        mobile : {
            type : Number,
            required: true,
            unique : true
        },
        aadhar : {
            type: String,
            required: true,
            unique : true,
        },
        address: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        pincode: {
            type: Number,
            required: true
        },
        gender: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        dose: {
            type: Number,
            required: true
        },
        vaccine : {
            type : String,
            required: true
        },
        slot : {
            type : String,
            required: true
        },
        message : String,
        registration_date : {
            type : Date,
            default : Date.now
        }
    }
)

// collection creation
const Vaccine = new mongoose.model("Vaccine",vaccineSchema);

module.exports = Vaccine;