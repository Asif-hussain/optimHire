// Import the app
const server = require('./../index.js')
const supertest = require('supertest')
const requestWithSupertest = supertest(server)

describe('Students Endpoint', () => {
  // This is the case when we have all the students
  it('GET /getStudents should show all students', async () => {
    const res = await requestWithSupertest.get('/getStudents')
    expect(res.status).toEqual(200)
    expect(res.type).toEqual(expect.stringContaining('json'))
    expect(res.body).toHaveProperty('students')
  })

  it('POST /updateScore should show all students', async () => {
    const student = {
      _id: '61f7bb0b63992694dd621486',
      name: 'Asif',
      math: 65,
      computer: 36,
    }
    const res = await requestWithSupertest.post('/updateScore', student)
    expect(res.status).toEqual(200)
    expect(res.type).toEqual(expect.stringContaining('json'))
    expect(res.body).toHaveProperty('student')
  })
})
