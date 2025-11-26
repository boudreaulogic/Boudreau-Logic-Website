const express = require("express");
const path = require("path");
const helmet = require("helmet");
const compression = require("compression");

const app = express();
const PORT = process.env.PORT || 3000;

// Absolute path to Front-End folder
const frontEndRoot = path.join(__dirname, "..", "Front-End");

// Security & gzip
app.use(helmet());
app.use(compression());

// Serve /Assets/* from Front-End/Assets
app.use("/Assets", express.static(path.join(frontEndRoot, "Assets")));

// Serve the main page at /
app.get("/", (req, res) => {
  res.sendFile(path.join(frontEndRoot, "Pages", "index.html"));
});

// (Optional) Catch-all: send index.html for any other route
app.get("*", (req, res) => {
  res.sendFile(path.join(frontEndRoot, "Pages", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Boudreau Logic site running on port ${PORT}`);
});
