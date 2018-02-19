const express = require("express");
const router = require("./routes/routes");

const app = express();

app.get("/foodDetail", router);

app.listen(3001, () => console.log("Example app listening on port 3001"));
