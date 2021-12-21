require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const Person = require("./models/person");
const app = express();

// const content = `<p>Phonebook has info for ${persons.length} people </p>
// <p>${new Date()}</p>`;

app.use(cors());
app.use(express.static("build"));
app.use(express.json());

// Don't do this.. just for demo purposes
// This middleware uses morgan to log the data sent with POST request
morgan.token("body", (req, res) =>
  Object.keys(req.body).length ? JSON.stringify(req.body) : null
);
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :body")
);
//

// app.get("/info", (req, res) => {
//   res.send(content);
// });

app.get("/api/persons", (req, res) => {
  Person.find({}).then((people) => res.json(people));
});

app.get("/api/persons/:id", (req, res, next) => {
  Person.findById(req.params.id)
    .then((person) => {
      if (person) {
        res.json(person);
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => next(err));
});

app.post("/api/persons", (req, res) => {
  const body = req.body;
  if (!body.name || !body.number) {
    return res.status(400).json({
      error: "some content is missing",
    });
  }
  // else {
  //   let person = persons.find((person) => person.name === body.name);
  //   if (person) {
  //     return res.status(400).json({
  //       error: "name must be unique",
  //     });
  //   }
  // }
  const person = new Person({
    name: body.name,
    number: body.number,
  });
  person.save().then((savedPerson) => {
    res.json(savedPerson);
  });
});

app.delete("/api/persons/:id", (req, res, next) => {
  Person.findByIdAndRemove(req.params.id)
    .then((result) => {
      res.status(204).end();
    })
    .catch((error) => next(error));
});

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: "unknown endpoint" });
};

app.use(unknownEndpoint);

const errorHandler = (err, req, res, next) => {
  console.error(err);
  if (err.name === "CastError") {
    return res.status(404).send({ error: "malformatted id" });
  }
  next(err);
};

app.use(errorHandler);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
