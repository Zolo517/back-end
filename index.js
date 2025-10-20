import chalk from "chalk";
import figlet from "figlet";
import lodash from "lodash";
import axios from "axios";
import express from "express";
import bodyParser from "body-parser";
//nodemon backend live server
// CRUD
// create ——> POST
// read ——> GET
// update ——> UPDATE
// delete ——> DELETE
// iim helbereer bichij baigaa bol response.status(200).send(students).end() zaaval return hiih ystoi
// post dotor bichij baigaag request

const log = console.log;

const app = express();
app.use(bodyParser.json());

const students = [];
const users = [];

app.get("/", async (request, response) => {
  const res = await axios.get("https://gogo.mn/cache/news-shinemedee?size=15");

  response.send(res.data);
});

// app.post("/")

app.post("/students", async (request, response) => {
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
app.get("/students", async (request, response) => {
  return response.status(200).send(students).end();
});

app.post("/login", async (request, response) => {
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

app.get("/login", async (request, response) => {
  return response.status(200).send(users).end();
});
// app.get("/students?gender=female", async (request, response) => {
//   const gender = students.filter((student) => student.gender === "female");
//   response.send(gender);
// });

app.listen(3000, () => {
  log(chalk.italic.cyan("server is running on http://localhost:3000"));
  log(
    chalk.italic.cyanBright(
      "server is running on http://localhost:3000/students"
    )
  );
  log(
    chalk.italic.cyanBright("server is running on http://localhost:3000/login")
  );
});

// app.get("/student-detail", async (request, response) => {
//   //   const res = await axios.get("");

//   response.send(studentsDetail);
// });

// log(chalk.blue("red") + chalk.red("blue") + chalk.magenta("hihi"));
log(
  await figlet.text("Boo!", {
    font: "Ghost",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 80,
    whitespaceBreak: true,
  })
);
// log(chalk.italic.blue("working"));

// const students3B = {
//   students: 21,
//   names: [
//     "Bolormaa",
//     "Bayarmaa",
//     "Zoloo",
//     "Ariu",
//     "Galsaa",
//     "Sarangoo",
//     "Badmaa",
//     "Subee",
//     "Amraa",
//     "BayrJavhlan",
//     "Tuvshin",
//     "Batsaihan",
//     "TserenPuntsag",
//     "Enhzul",
//     "Khusel",
//     "Urantogos",
//     "BaasanBayar",
//     "Temuujin",
//     "Temuulen",
//     "Sukhbat",
//     "Barsaa",
//   ],
// };
// const studentsDetail = [
//   {
//     name: "Zoloo",
//     age: 17,
//     gender: "female",
//   },
//   {
//     name: "Bolormaa",
//     age: 17,
//     gender: "female",
//   },
//   {
//     name: "Bayarmaa",
//     age: 17,
//     gender: "female",
//   },
//   {
//     name: "Ariuka",
//     age: 17,
//     gender: "female",
//   },
// ];
