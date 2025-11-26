const express = require("express");
const path = require("path");
const helmet = require("helmet");
const compression = require("compression");

const app = express();
const PORT = process.env.PORT || 3000;

// Security headers + gzip
app.use(helmet());
app.use(compression());

// Serve static front-end
const frontEndRoot = path.join(__dirname, "..", "Front-End");

app.use(express.static(frontEndRoot));

// Always serve the main page for unknown routes (optional)
app.get("*", (req, res) => {
  res.sendFile(path.join(frontEndRoot, "Pages", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Boudreau Logic site running on port ${PORT}`);
});

