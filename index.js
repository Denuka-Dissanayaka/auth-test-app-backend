const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const db = require("./config/db");

const AuthRoutes = require("./routes/AuthRoutes");
const ProductRoutes = require("./routes/ProductRoute");

const app = express();

require("dotenv").config();

// (async () => {
//   await db.sync();
// })();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  cors({
    origin: ["https://auth-test-app-frontend.netlify.app/"],
    //origin: "http://localhost:5173",
    //methods: ["POST", "GET"],
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/v1", AuthRoutes);
app.use("/api/v1", ProductRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started at port ${port}`));
