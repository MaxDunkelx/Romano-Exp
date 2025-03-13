const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Path to the CSV file
const csvFilePath = path.join(__dirname, "user_data.csv");

// Ensure the CSV file exists
if (!fs.existsSync(csvFilePath)) {
  fs.writeFileSync(csvFilePath, "שם,טלפון,אימייל,שירות\n", { encoding: "utf8" });
}

// Endpoint to submit form data
app.post("/submit-form", (req, res) => {
  const { name, phone, email, service } = req.body;

  // Append data to the CSV file
  const csvRow = `${name},${phone},${email},${service}\n`;
  fs.appendFileSync(csvFilePath, csvRow, { encoding: "utf8" });

  res.status(200).json({ message: "Data saved successfully!" });
});

// Endpoint to download the CSV file (admin access)
app.get("/download-csv", (req, res) => {
  res.download(csvFilePath, "user_data.csv", (err) => {
    if (err) {
      res.status(500).json({ error: "Failed to download the file." });
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});