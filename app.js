const express = require("express");
const app = express();
const queries = require("./queries");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cors());


app.get("/players", (request, response) => {
    queries.list().then(players => {
        response.json({players});
    }).catch(console.error);
});

app.get("/players/:id", (request, response) => {
    queries.read(request.params.id).then(intermediate => {
        intermediate
            ? response.json({intermediate})
            : response.sendStatus(404)
    }).catch(console.error);
});

app.post("/players", (request, response) => {
    queries.create(request.body).then(intermediate => {
        response.status(201).json({intermediate: intermediate});
    }).catch(console.error);
});

app.delete("/players/:id", (request, response) => {
    queries.delete(request.params.id).then(() => {
        response.sendStatus(204);
    }).catch(console.error);
});

app.put("/players/:id", (request, response) => {
    queries.update(request.params.id, request.body).then(intermediate => {
        response.json({intermediate: intermediate[0]});
    }).catch(console.error);
});


app.use((request, response) => {
  response.send(404);
});

module.exports = app;
