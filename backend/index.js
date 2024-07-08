const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const cors = require("cors");

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());  // To parse JSON bodies
app.use(cors());  // Use cors as a function

app.get("/", async (req, res) => {
  res.send("Hello, I am here!");
});





app.post("/email-data", async (req, res) => {
  try {
    const { email, message } = req.body;
    console.log("Received data:", { email, message });


    // Perform any operations with the received data here

    let transporter = nodemailer.createTransport(({
        service: "gmail",
        "auth": {
            user: "alanwalters@bytebrit.io",
            pass: "pzpp ksat uokl fmjl"// password dalo

        },
    }));


let mailOptions = {
  from: "alanwalters@bytebrit.io",
  to: "alanwalters@bytebrit.io",
  cc: "alanwalters@bytebrit.io",
  subject: "Welcome to bytebrit",
  text: req.body.message,

};

transporter.sendMail(mailOptions, function(error, info){
  if(error){
    console.log(error);
  }
  else{
    res.send("Mail Submitted");
    console.log("email sent" + info.response);  

  }
})




    res.status(200).send({
      success: true,
      message: "Data received successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Error while getting data",
      error,
    });
  }
});




app.listen(5000, () => {
  console.log("Running port num at 5000");
});