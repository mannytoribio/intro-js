import mysql from "mysql"
import dotenv from "dotenv"

// we can only import mysql because we added "type: 'module' to the package.json"

dotenv.config()

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
})

const getStudents = (lastName) => {
  const query = `SELECT * 
  FROM students
  WHERE last_name LIKE "${lastName}"`

  // query or escapeQuery would work. Escape protects your query from malicious SQL injection.

  const escapeQuery = `SELECT * 
  FROM students
  WHERE last_name = ?
  OR last_name = ?`

  let escapedLastname = connection.escape(lastName)

  connection.query(escapeQuery, [lastName], (error, results) => {
    if (error) {
      console.error(error)
    }
    console.log(results)
  })
}

// getStudents("Toribio")

const addStudents = (student_id, first_name, last_name, email, phone, admission_date) => {
  const newStudentQuery = `INSERT INTO students (student_id, first_name, last_name, email, phone, admission_date)
VALUES (${student_id}, "${first_name}", "${last_name}", "${email}", "${phone}", "${admission_date}")`
  
  connection.query(newStudentQuery, (error, results) => {
  if (error) {
    console.error(error)
  }
  console.log(results)
  })
}

addStudents(4736, "Jeremiah", "Toribio", "jtoribio@bocacodu.com", '5555558765', '20210920T13:45:29')

// getStudents("Toribio")

connection.end()
// connection needs to close

// VALUES (4736, "Jeremiah", "Toribio", "jtoribio@bocacodu.com", 5555558765, '20210920T13:45:29')
// VALUES (4886, "Jaya", "Latchman", "jlatchman@bocacodu.com", 5555558965, '20210920T13:45:29')
// VALUES (4996, "Ynes", "Simpson", "ysimpson@bocacodu.com", 5555558769, '20210920T13:45:29')`