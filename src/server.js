const express = require("express");
const router = require("./routes");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use("/api", router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor iniciado na URL: http://localhost:${PORT}`));
