const express = require("express");
const cors = require("cors");
require("dotenv").config();

const contactRoute = require("./routes/contactRoute");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", contactRoute);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
