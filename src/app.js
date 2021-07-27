const express = require("express");
const app = express();
const path = require("path");

// require("./db/conn");
// const Vaccine = require("./models/vaccine");
const port = process.env.PORT || 80 || 443;

const static_path = path.join(__dirname, "../public");
app.use(express.static(static_path));

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/",function(req,res) {
    res.send("Server is down")
});

// VACCINE DATABASE ENTRY
// app.post('/',async(req, res) =>{
//     try
//     {
//         const name = req.body.fname + " " + req.body.lname;
//         const registerVaccine = new Vaccine({
//             name : name,
//             mobile : req.body.mobile,
//             aadhar : req.body.aadhar,
//             address : req.body.address,
//             city : req.body.city,
//             state : req.body.state,
//             pincode : req.body.pincode,
//             gender : req.body.gender,
//             age : req.body.age,
//             dose : req.body.dose,
//             vaccine : req.body.vaccine,
//             slot : req.body.slot,
//             message : req.body.message
//         })
//         res.send("<h1> Thank You </h1> <h2> Form has been successfully submitted");
//         const result = await registerVaccine.save();
//         // res.send("Details submitted successfully");
//         console.log("Successfully inserted data into the database");
//         console.log(result);
//     }
//     catch(err)
//     {
//         res.status(400).send(err);
//         console.log(err);
//     }
// })

app.listen(port, () => {
    console.log(`Server is running at port no ${port}`);
})
