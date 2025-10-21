import chalk from "chalk";
import figlet from "figlet";
import lodash from "lodash";
import axios from "axios";
import express from "express";
import bodyParser from "body-parser";
import { configDotenv } from "dotenv";
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

let students = [];
const users = [];

app.get("/", async (request, response) => {
  const res = await axios.get("https://gogo.mn/cache/news-shinemedee?size=15");

  response.send(res.data);
});
//Post
app.post("/students", (request, response) => {
  const prevStudents = students.filter((student) => {
    student.phoneNumber === request.body.phoneNumber;
  });
  console.log(prevStudents);
  if (prevStudents.length === 0) {
    students.push(request.body);
    return response.status(200).send(students).end();
  } else {
    return response.status(409).send({ message: "student is duplicated" });
  }
});
// Get
app.get("/students", (request, response) => {
  const { gender, age } = request.query;
  if (gender) {
    const filteredStudents = students.filter((student) => {
      if (student.gender === gender && student.age < age) {
        return true;
      }
    });
    return response.status(200).send(filteredStudents).end();
  }
  return response.status(200).send(students).end();
});
// Put
app.put("/students", (request, response) => {
  const updatedStudents = students.map((student) => {
    if (student.id === request.body.id) {
      student.phoneNumber = request.body.phoneNumber;
    }
    return student;
  });
  students = updatedStudents;

  return response.send(updatedStudents).end();
});
// Patch
app.patch("/students", (request, response) => {
  const updatedStudents = students.map((student) => {
    if (student.id === request.body.id) {
      student.phoneNumber = request.body.phoneNumber;
    }
    return student;
  });
  students = updatedStudents;

  return response.send(updatedStudents).end();
});
// Delete
app.delete("/students/:id", (request, response) => {
  const updatedStudents = students.map((student) => {
    if (student.id === request.body.id) {
      student.phoneNumber === request.body.phoneNumber;
    }
    return student;
  });
  students = updatedStudents;

  return response.send(updatedStudents).end();
});

app.post("/login", (request, response) => {
  const prevStudents = users.filter(
    (user) => user.userName === request.body.userName
  );
  if (prevStudents.length === 0) {
    users.push(request.body);
    return response.status(200).send(users).end();
  } else {
    return response.status(409).send({ messages: "username is already taken" });
  }
});

app.get("/login", (request, response) => {
  return response.status(200).send(users).end();
});

app.listen(port, () => {
  log(chalk.italic.cyan(`Server is running on http://localhost:${port}`));
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
      `Server is running on http://localhost:${port}/students?gender=female&age=12`
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
