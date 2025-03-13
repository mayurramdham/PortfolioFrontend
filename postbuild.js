const fs = require("fs");
const path = require("path");

// Define source (_redirects in src) and destination (inside dist folder)
const source = path.join(__dirname, "src", "_redirects");
const destination = path.join(__dirname, "dist", "portfolio-frontend", "browser", "_redirects");

// Ensure dist folder exists before copying
if (fs.existsSync(source)) {
  fs.copyFileSync(source, destination);
  console.log("✅ _redirects file copied successfully!");
} else {
  console.error("❌ _redirects file not found in src!");
}
