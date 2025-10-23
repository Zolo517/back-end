import chalk from "chalk";
import express from "express";
import bodyParser from "body-parser";
import { configDotenv } from "dotenv";
import { connectDB } from "./database/db.js";
import { StudentsRouter } from "./routers/studentRoute.js";
import { UserRouter } from "./routers/userRoute.js";

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

app.use("/user", UserRouter);
app.use("/student", StudentsRouter);

app.listen(port, () => {
  connectDB();
  log(
    chalk.italic.cyanBright(
      `Server is running on http://localhost:${port}/students`
    )
  );
  log(
    chalk.italic.cyanBright(
      `Server is running on http://localhost:${port}/user`
    )
  );
});

// log(
//   chalk.italic.cyanBright(
//     `Server is running on http://localhost:${port}/login`
//   )
// );
//   log(
//   chalk.italic.cyanBright(
//     `Server is running on http://localhost:${port}/students?gender=female&age=12&phoneNumber=91223073`
//   )
// );
// log(
//   chalk.italic.cyanBright(
//     `Server is running on http://localhost:${port}/students?gender=male&age=12&phoneNumber=91223073`
//   )
// );
// log(
//   await figlet.text("Boo!", {
//     font: "Ghost",
//     horizontalLayout: "default",
//     verticalLayout: "default",
//     width: 80,
//     whitespaceBreak: true,
//   })
// );
