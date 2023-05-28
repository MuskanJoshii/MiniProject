const Model = require('../models/componentModel');
const {Router} = require('express');
const router = Router();

router.post('/add', (req,res) => {
    console.log(req.body);
   // res.send(response from userRouter);

    new Model(req.body).save()
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.error(err);
        res.status(500).json(err);
    });

});

router.get('/getall',(req,res) => {
    Model.find({})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
});

// colon(:) shows that it is a parameter
router.get("/getbyemail/:email", (req, res) => {
    const email = req.params.email
    console.log(email)
    Model.findOne({ email: req.params.email })
      .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        console.error(err)
        res.status(500).json(err)
      })
  })
  
  router.get("/getbyid/:id", (req, res) => {
    Model.findById(req.params.id)
      .populate("user")
      .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        console.error(err)
        res.status(500).json(err)
      })
  })
  
  router.delete("/delete/:id", (req, res) => {
    Model.findByIdAndDelete(req.params.id)
      .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        console.error(err)
        res.status(500).json(err)
      })
  })
  
  router.put("/update/:id", (req, res) => {
    Model.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        console.error(err)
        res.status(500).json(err)
      })
  })
  
  router.post("/authenticate", (req, res) => {
    const formdata = req.body
    Model.findOne({ email: formdata.email, password: formdata.password })
      .then((result) => {
        console.log(result)
  
        // if condition will be true if user is not null
        if (result) {
          console.log("login success")
          res.json(result)
        } else {
          console.log("login failed")
          res.status(400).json({ status: "login failed" })
        }
      })
      .catch((err) => {
        console.error(err)
        res.status(500).json(err)
      })
  })

module.exports = router;