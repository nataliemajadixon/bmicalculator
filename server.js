const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"))
app.get('/', (req,res) => {
    res.sendFile(__dirname +'/public/bmiCalculator.html')
})

app.post('/calculator', function(req, res) {
    var weight = parseFloat(req.body.weight)
    var height = parseFloat(req.body.height)
    
    const numer = weight * 703
    const deno = (height*12) * (height*12)
    var BMI =  ((numer) /  (deno)).toFixed(2)
   
    res.send( `<body style="background-color: rgb(247, 139, 139); font-family: 'Albert Sans', sans-serif; padding-top: 50px;
    text-align: center">
    <h1>Your BMI is ${BMI}</h1>
    </body>`)
    

})

let PORT = 3002;

app.listen(PORT, () => {
    console.log("Listening on", PORT)
})

// let reload = () => {
//     window.location.reload()
// }