const express = require("express");

const app = express();
const port = 3000;

const invoices = [];

// Invoices endpoints
app.get("/invoices", (req, res) => {
  res.json(invoices);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
