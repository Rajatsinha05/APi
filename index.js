const express = require("express");

const app = express();

let arr = [
  { name: "John", age: 34, id: 1 },
  { name: "John", age: 34, id: 2 },
  { name: "John", age: 34, id: 3 },
  { name: "John", age: 34, id: 4 },
  { name: "John", age: 34, id: 5 },
];

app.use(express.json());
app.get("/", (req, res) => {
  res.send(arr);
});

app.post("/add", (req, res) => {
  console.log(req.body);
  arr.push(req.body);

  res.status(200).send(arr);
});

app.delete("/delete/:id", (req, res) => {
  let { id } = req.params;

  console.log(id);

  let data = arr.filter((item) => item.id != id);

  res.status(200).send(data);
});

app.patch("/update/:id", (req, res) => {
  let { id } = req.params;

  let { name } = req.body;
  console.log(name);

  let data = arr.map((item) => {
    if (item.id == id) {
      item.name = name;
      res.send(item);
    }
  });

  res.send(data);
});

app.listen(8081, () => {
  console.log("server is runnning on port 8080");
});
