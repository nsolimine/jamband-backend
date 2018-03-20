const express = require("express");
const app = express();
const playersQueries = require("./playersQueries");
const sessionQueries = require("./sessionQueries");
const purgatoryQueries = require("./purgatoryQueries");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cors());


//Players//
app.get("/players", (request, response) => {
    playersQueries.list().then(players => {
        response.json({players});
    }).catch(console.error);
});

app.get("/players/:id", (request, response) => {
    playersQueries.read(request.params.id).then(players => {
        players
            ? response.json({players})
            : response.sendStatus(404)
    }).catch(console.error);
});

app.post("/players", (request, response) => {
    playersQueries.create(request.body).then(players => {
        response.status(201).json({players: players});
    }).catch(console.error);
});

app.delete("/players/:id", (request, response) => {
    playersQueries.delete(request.params.id).then(() => {
        response.sendStatus(204);
    }).catch(console.error);
});

app.put("/players/:id", (request, response) => {
    playersQueries.update(request.params.id, request.body).then(players => {
        response.json({players: players[0]});
    }).catch(console.error);
});


//Session//
app.get("/session", (request, response) => {
    sessionQueries.list().then(session => {
        response.json({session});
    }).catch(console.error);
});

app.get("/session/:id", (request, response) => {
    sessionQueries.read(request.params.id).then(session => {
        session
            ? response.json({session})
            : response.sendStatus(404)
    }).catch(console.error);
});

app.post("/session", (request, response) => {
    sessionQueries.create(request.body).then(session => {
        response.status(201).json({session: session});
    }).catch(console.error);
});

app.delete("/session/:id", (request, response) => {
    sessionQueries.delete(request.params.id).then(() => {
        response.sendStatus(204);
    }).catch(console.error);
});

app.put("/session/:id", (request, response) => {
    sessionQueries.update(request.params.id, request.body).then(session => {
        response.json({session: session[0]});
    }).catch(console.error);
});


app.use((request, response) => {
  response.send(404);
});

module.exports = app;
