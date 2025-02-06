const express = require("express");
const cors = require("cors");
const fs = require("fs-extra");
const path = require("path");
const multer = require("multer");

const app = express();
const PORT = 5000; // Change if needed

app.use(cors());
app.use(express.json());

// JSON file path
const DATA_FILE = path.join(__dirname, "blogPosts.json");

// Ensure JSON file exists
if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, "[]");
}

// Image Upload Setup
const upload = multer({ dest: path.join(__dirname, "../../public/uploads/") });

// 📌 Get all blog posts
app.get("/api/posts", async (req, res) => {
  const posts = await fs.readJson(DATA_FILE);
  res.json(posts);
});

// 📌 Create a new blog post
app.post("/api/posts", upload.single("image"), async (req, res) => {
  const { title, description, password } = req.body;
  const posts = await fs.readJson(DATA_FILE);

  // Simple password check (Change "admin123" to your own password)
  if (password !== "rEd@pple25") {
    return res.status(403).json({ message: "Unauthorized" });
  }

  // Image handling
  let imageUrl = null;
  if (req.file) {
    imageUrl = `/uploads/${req.file.filename}`;
  }

  const newPost = {
    id: Date.now(),
    title,
    description,
    image: imageUrl,
  };

  posts.push(newPost);
  await fs.writeJson(DATA_FILE, posts, { spaces: 2 });

  res.json(newPost);
});

// 📌 Delete a blog post
app.delete("/api/posts/:id", async (req, res) => {
  const { id } = req.params;
  const posts = await fs.readJson(DATA_FILE);
  const updatedPosts = posts.filter((post) => post.id != id);

  await fs.writeJson(DATA_FILE, updatedPosts, { spaces: 2 });

  res.json({ message: "Post deleted" });
});

app.get("/", (req, res) => {
    res.send("Backend is running! Access blog posts at /api/posts");
  });
  

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
