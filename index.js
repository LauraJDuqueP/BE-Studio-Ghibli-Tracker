require("dotenv").config();
const express = require("express");
const db = require("mongoose");
const morgan = require("morgan");
const moviesMocks = require("./mocks/moviesMocks");
const router = require("./network/routes");

const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);

const handleError = (err, res) => {
  const { statusCode = 500, message } = err;
  res.status(statusCode).json({
    status: "error",
    statusCode,
    message,
  });
};

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

// Database mongoDb
db.connect(
  `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_URL}`
)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
    return process.exit(1);
  });

// Routes
router(app);

app.use((err, req, res, next) => {
  handleError(err, res);
});

app.listen(process.env.PORT || 3000, () =>
  console.log(`server running on http://localhost:3000`)
);
