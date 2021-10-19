import express from "express";
import path from "path";

const app = express();
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "./client/build")));
app.use(express.json());

app.get("/api/sample", (req, res) => {
  res.send("A message from CS361");
  console.log("sent test");
});

app.post("/REST-API/post", (req, res) => {
  console.log(req.body);
  const key = Object.keys(req.body)[0];
  console.log('key: ', key)
  res.send(`posted: ${key}: ${req.body[key]}`);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(`${__dirname}client/build/index.html`));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on port " + port);
