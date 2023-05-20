let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router()
const multer = require('multer');
// Student Model
let userSchema = require('../Models/Student')
const Papa = require("papaparse");
const csv = require('csvtojson');
const Student = require('../Models/Student');


const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, './uploads/');
  },
  filename(req, file, callback) {
    callback(null, `tmp.csv`);
  },
});

const upload = multer({ storage }).single('csv');


// CREATE User
router.route('/create-student').post((req, res, next) => {
  userSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log("data", data)
      res.json(data)
    }
  })
})

//Uploading CSV
router.route('/read-file').post((req, res) => {
  upload(req, res, function (err) {
    if (err) {
      return res.status(500).send({
        message: err.message
      })
    }
    const csvFilePath = './uploads/tmp.csv';
    csv()
      .fromFile(csvFilePath)
      .then(async (jsonObj) => {
        for (let i = 0; i < jsonObj.length; i++) {
          const item = jsonObj[i]
          const student = new userSchema()
          student.RUT = item.RUT
          student.DV = item.DV
          student.NOMBRE = item.NOMBRE
          student.DIRECCION = item.DIRECCION
          student.COMUNA = item.COMUNA
          student.REGION = item.REGION
          student.SALUD = item.SALUD
          student.Fec_Nac = item.Fec_Nac
          student.CORREO = item.CORREO
          student.CELULAR = item.CELULAR
          await student.save()
        }
        res.send('Success')
      });


  })
})


router.route('/temp/').post((req, res) => {
  userSchema.find({ NOMBRE: req.body.name })
    .then((data) => {
      res.json(data)
    })
})
router.route('/temp_Email/').post((req, res) => {
  userSchema.find({ CORREO: req.body.Email })
    .then((data) => {
      res.json(data)
    })
})

router.route('/temp_telephone/').post((req, res) => {
  userSchema.find({ CELULAR: req.body.telephone })
    .then((data) => {
      res.json(data)
    })
})

router.route('/temp_RUT/').post((req, res) => {
  userSchema.find({ RUT: req.body.RUT })
    .then((data) => {
      res.json(data)
    })
})

router.route('/temp_RUT_Position/').post((req, res) => {
  userSchema.find({ RUT: req.body.RUT, COMUNA: req.body.Common })
    .then((data) => {
      res.json(data)
    })
})

router.route('/temp_RUT_regeion/').post((req, res) => {
  userSchema.find({ RUT: req.body.RUT, REGION: req.body.Regeion })
    .then((data) => {
      res.json(data)
    })
})

router.route('/temp_RUT_Position_Regeion/').post((req, res) => {
  userSchema.find({ RUT: req.body.RUT, REGION: req.body.Regeion, COMUNA: req.body.Common })
    .then((data) => {
      res.json(data)
    })
})

router.route('/temp1/').post((req, res) => {
  userSchema.find({ NOMBRE: req.body.name, DIRECCION: req.body.Address })
    .then((data) => {
      res.json(data)
    })
})
router.route('/temp2/').post((req, res) => {
  userSchema.find({ NOMBRE: req.body.name, COMUNA: req.body.Common })
    .then((data) => {
      res.json(data)
    })
})

router.route('/temp3/').post((req, res) => {
  userSchema.find({ NOMBRE: req.body.name, REGION: req.body.Regeion })
    .then((data) => {
      res.json(data)
    })
})

router.route('/temp4/').post((req, res) => {
  userSchema.find({ NOMBRE: req.body.name, SALUD: req.body.Salud })
    .then((data) => {
      res.json(data)
    })
})

router.route('/temp5/').post((req, res) => {
  userSchema.find({ NOMBRE: req.body.name, Fec_Nac: req.body.Fec_Nac })
    .then((data) => {
      res.json(data)
    })
})

router.route('/temp6/').post((req, res) => {
  userSchema.find({ NOMBRE: req.body.name, DV: req.body.DV })
    .then((data) => {
      res.json(data)
    })
})

router.route('/temp12/').post((req, res) => {
  userSchema.find({ NOMBRE: req.body.name, DIRECCION: req.body.Address, COMUNA : req.body.Common })
    .then((data) => {
      res.json(data)
    })
})

router.route('/temp13/').post((req, res) => {
  userSchema.find({ NOMBRE: req.body.name, DIRECCION: req.body.Address, REGION : req.body.Regeion })
    .then((data) => {
      res.json(data)
    })
})

router.route('/temp14/').post((req, res) => {
  userSchema.find({ NOMBRE: req.body.name, DIRECCION: req.body.Address, SALUD : req.body.Salud })
    .then((data) => {
      res.json(data)
    })
})

router.route('/temp15/').post((req, res) => {
  userSchema.find({ NOMBRE: req.body.name, DIRECCION: req.body.Address, Fec_Nac : req.body.Fec_Nac })
    .then((data) => {
      res.json(data)
    })
})

router.route('/temp16/').post((req, res) => {
  userSchema.find({ NOMBRE: req.body.name, DIRECCION: req.body.Address, DV : req.body.DV })
    .then((data) => {
      res.json(data)
    })
})

router.route('/temp23/').post((req, res) => {
  userSchema.find({ NOMBRE: req.body.name, COMUNA: req.body.Common, REGION : req.body.Regeion })
    .then((data) => {
      res.json(data)
    })
})

router.route('/temp24/').post((req, res) => {
  userSchema.find({ NOMBRE: req.body.name, COMUNA: req.body.Common, SALUD : req.body.Salud })
    .then((data) => {
      res.json(data)
    })
})

router.route('/temp25/').post((req, res) => {
  userSchema.find({ NOMBRE: req.body.name, COMUNA: req.body.Common, Fec_Nac : req.body.Fec_Nac })
    .then((data) => {
      res.json(data)
    })
})

router.route('/temp26/').post((req, res) => {
  userSchema.find({ NOMBRE: req.body.name, COMUNA: req.body.Common, DV : req.body.DV })
    .then((data) => {
      res.json(data)
    })
})

router.route('/temp34/').post((req, res) => {
  userSchema.find({ NOMBRE: req.body.name, REGION: req.body.Regeion, SALUD : req.body.Salud })
    .then((data) => {
      res.json(data)
    })
})

router.route('/temp35/').post((req, res) => {
  userSchema.find({ NOMBRE: req.body.name, REGION: req.body.Regeion, Fec_Nac : req.body.Fec_Nac })
    .then((data) => {
      res.json(data)
    })
})

router.route('/temp36/').post((req, res) => {
  userSchema.find({ NOMBRE: req.body.name, REGION: req.body.Regeion, DV : req.body.DV })
    .then((data) => {
      res.json(data)
    })
})

router.route('/temp45/').post((req, res) => {
  userSchema.find({ NOMBRE: req.body.name, SALUD: req.body.Salud, Fec_Nac : req.body.Fec_Nac })
    .then((data) => {
      res.json(data)
    })
})

router.route('/temp46/').post((req, res) => {
  userSchema.find({ NOMBRE: req.body.name, SALUD: req.body.Salud, DV : req.body.DV })
    .then((data) => {
      res.json(data)
    })
})

router.route('/temp56/').post((req, res) => {
  userSchema.find({ NOMBRE: req.body.name, Fec_Nac: req.body.Fec_Nac, DV : req.body.DV })
    .then((data) => {
      res.json(data)
    })
})
module.exports = router
