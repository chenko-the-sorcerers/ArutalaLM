import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = createServer(app);

// Serve static files
const staticPath = path.resolve(__dirname, "..", "dist");
app.use(express.static(staticPath));

// API routes can be added here
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from ArutalaLM Server!" });
});

// Handle client-side routing
app.get("*", (req, res) => {
  // If it's an API request that wasn't caught, return 404
  if (req.path.startsWith('/api')) {
    return res.status(404).json({ error: 'Not Found' });
  }
  res.sendFile(path.join(staticPath, "index.html"));
});

// For local development
if (process.env.NODE_ENV !== 'production') {
  const port = process.env.PORT || 3000;
  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

// Export for Vercel
export default app;
