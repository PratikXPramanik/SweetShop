const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");          // ✅ ADD
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const sweetRoutes = require("./routes/sweetRoutes");

const app = express();

app.use(cors());                       // ✅ ADD THIS LINE
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Atlas connected ✅"))
  .catch(err => console.error(err));

app.use("/api/auth", authRoutes);
app.use("/api/sweets", sweetRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
