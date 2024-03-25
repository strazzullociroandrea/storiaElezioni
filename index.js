const express = require("express");
const http = require("http");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");

(() => {
  //gestione cors
  const corsOptions = {
    origin: "*",
    methods: "POST",
    optionsSuccessStatus: 204,
  };
  app.use(cors(corsOptions));

  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: true,
    }),
  );
  app.use("/storia", express.static(path.join(__dirname, "public")));
  app.post("/storia/getdata", async (request, response) => {
    try {
      const res = fs.readFileSync("./risultati.json");
      response.json({ result: JSON.parse(res) });
    } catch (error) {
      console.error(
        "Si è verificato un errore durante la lettura del file:",
        error,
      );
      response
        .status(500)
        .json({ error: "Errore durante la lettura del file" });
    }
  });
  app.post("/storia/getPercentuali", async (request, response) => {
    try {
      const res = fs.readFileSync("./percentuali.json");
      response.json({ result: JSON.parse(res) });
    } catch (error) {
      console.error(
        "Si è verificato un errore durante la lettura del file:",
        error,
      );
      response
        .status(500)
        .json({ error: "Errore durante la lettura del file" });
    }
  });
  const server = http.createServer(app);
  server.listen(10009, () => {
    console.log("---> server running");
  });
})();
