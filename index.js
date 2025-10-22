import chalk from "chalk";
import figlet from "figlet";
import lodash from "lodash";
import axios from "axios";
import express from "express";
import bodyParser from "body-parser";
import { configDotenv } from "dotenv";
import { connectDB } from "./db.js";
import { createUser, deleteUSer, getUserById, getUsers, updateUser, updateUserInfo } from "./src/controllers/user.js";
//nodemon backend live server
// CRUD
// create ——> POST
// read ——> GET
// update ——> PUT, PATCH
// PUT ——> DELETE CREATE
// PATCH ——> READ CHANGE
// delete ——> DELETE
// iim helbereer bichij baigaa bol response.status(200).send(students).end() zaaval return hiih ystoi
// post dotor bichij baigaag request

const log = console.log;

configDotenv();

log(process.env.PORT, "port");
const port = process.env.PORT;

const app = express();
app.use(bodyParser.json());

app.post("/students", createUser);
app.get("/students/:id", getUserById);
app.put("/students", updateUser);
app.patch("/students/:id", updateUserInfo);
app.delete("/students/:id", deleteUSer);


// app.get("/students", getUsers);

// let students = [];
// const users = [];
// // datag ni huuleh shaardlagatai uchraas async await hiij baigaa
// app.get("/", async (request, response) => {
//   const res = await axios.get("https://gogo.mn/cache/news-shinemedee?size=15");

//   response.send(res.data);
// });
// //Post
// app.post("/students", (request, response) => {
//   const { id, phoneNumber } = request.body;
//   const prevStudents = students.filter((student) => {
//     if (student.id === id || student.phoneNumber === phoneNumber) {
//       return true;
//     }
//   });
//   console.log(prevStudents, "prev");
//   if (prevStudents.length === 0) {
//     students.push(request.body);
//     return response.status(200).send(students).end();
//   } else {
//     return response.status(409).send({ message: "student is duplicated" });
//   }
// });

// // Get
// app.get("/students", (request, response) => {
//   const { gender, age, phoneNumber } = request.query;
//   if (gender) {
//     const filteredStudentsByGender = students.filter((student) => {
//       if (student.gender === gender) {
//         return true;
//       }
//     });
//     return response.status(200).send(filteredStudentsByGender).end();
//   }
//   if (age) {
//     const filteredStudentsByAge = students.filter((student) => {
//       if (student.age > age) {
//         return true;
//       }
//     });
//     return response.status(200).send(filteredStudentsByAge).end();
//   }
//   if (phoneNumber) {
//     const filteredStudentsByPhoneNumber = students.filter((student) => {
//       if (student.phoneNumber === phoneNumber) {
//         return true;
//       }
//     });
//     return response.status(200).send(filteredStudentsByPhoneNumber).end();
//   }
//   return response.status(200).send(students).end();
// });

// // app.get("/students/:id", (req, res) => {
// //   const { id } = req.params;
// //   const studentDetail = students.filter((student) => {
// //     if (student.id === id) {
// //       return student;
// //     }
// //   });
// //   log(studentDetail);

// //   return res.send(studentDetail).end();
// // });

// // Put
// app.put("/students", (request, response) => {
//   const updatedStudents = students.map((student) => {
//     if (student.id === request.body.id) {
//       student.username = request.body.username;
//     }
//     return student;
//   });
//   students = updatedStudents;

//   return response.send(updatedStudents).end();
// });
// // Patch
// app.patch("/students", (request, response) => {
//   const { id } = req.params;
//   const newStudent = req.body;
//   const updatedStudents = students.map((student) => {
//     if (student.id === id) {
//     }
//   });
//   students = updatedStudents;

//   return response.send(updatedStudents).end();
// });
// // Delete
// app.delete("/students/:id", (request, response) => {
//   const { id } = request.params;
//   students = students.filter((student) => {
//     return student.id != id;
//   });
//   return response.send(students).end();
// });

// app.post("/login", (request, response) => {
//   const prevStudents = users.filter(
//     (user) => user.userName === request.body.userName
//   );
//   if (prevStudents.length === 0) {
//     users.push(request.body);
//     return response.status(200).send(users).end();
//   } else {
//     return response.status(409).send({ messages: "username is already taken" });
//   }
// });

// app.get("/login", (request, response) => {
//   return response.status(200).send(users).end();
// });

app.listen(port, () => {
  connectDB();
  log(chalk.italic.cyanBright(`Server is running on http://localhost:${port}`));
  log(
    chalk.italic.cyanBright(
      `Server is running on http://localhost:${port}/students`
    )
  );
  log(
    chalk.italic.cyanBright(
      `Server is running on http://localhost:${port}/login`
    )
  );
  log(
    chalk.italic.cyanBright(
      `Server is running on http://localhost:${port}/students?gender=female&age=12&phoneNumber=91223073`
    )
  );
  log(
    chalk.italic.cyanBright(
      `Server is running on http://localhost:${port}/students?gender=male&age=12&phoneNumber=91223073`
    )
  );
});

log(
  await figlet.text("Boo!", {
    font: "Ghost",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 80,
    whitespaceBreak: true,
  })
);
