const students = require('./models/Students')

const express = require('express')
const router = express.Router()

// Define routes
router.get('/api/v1', function (req, res, next) {
  res.json({
    Hello: 'World',
  })
})

// Define routes
router.get('/getStudents', (req, res) => {
  students.find({}, (error, results) => {
    if (error) {
      res.json({ error: results })
    } else {
      res.json({ students: results })
    }
  })
})

router.post('/updateScore', async (req, res) => {
  let studentScore = req.body

  students.findByIdAndUpdate(
    studentScore._id,
    studentScore,
    { new: true },
    async (error, results) => {
      if (error) {
        res.json({ error: results })
      } else {
        res.json({ student: results })
      }
    },
  )
})

module.exports = router
