const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config({
  path: "../.env",
});

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
const contactRoutes = require("./routes/contactRoutes");
app.use("/api", contactRoutes);

// MongoDB Connection
async function DbConnect() {
  try {
    const DbConnect = await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to DB");
  } catch (error) {
    console.log("FAILED TO CONNECT DATABASE", error);
  }
}
DbConnect();

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
