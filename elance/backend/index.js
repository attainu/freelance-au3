const express = require('express');
var User = require('./model/user');
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express();
const PORT = 3600;
app.use(cors());
app.use(bodyParser.json());

//For Sign-In
app.post('/loginit',(req, res) => {
      console.log("Inside post");

        var email = req.body.email;
        var password = req.body.password;

        console.log(""+email +""+password)
           
     User.findOne({ where: { email:email,password:password } }).then(function (user) {
            // if (!user) {
              
            //     res.redirect('/login');
            // }
            //  else if (!user.validPassword(password)) {
            //     res.redirect('/login');
            // }
            //  else 
             {
                //localStorage.setItem('user',user)
                //req.session.user = user.dataValues;
                console.log(user.password)
                res.json({
                    result:user
                });

            }
        });
    });


    // For Register 

    app.post('/signupit',(req, res) => {
        console.log("Inside Register");
       console.log(req.body)
        User.create({
              firstname: req.body.firstname,
              email: req.body.email,
              password: req.body.password,
              lastname:req.body.lastname,
              category:req.body.category
          }).then(user => {
            //req.session.user = user.dataValues;
                console.log("registered")
            return res.status(200).json({ regSucceess: true })
            }).catch(err => res.status(401).send({ regSucceess: false, errMsg: err }))
        });
        


app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});
