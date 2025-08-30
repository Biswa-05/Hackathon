import cloudinary from "../configs/cloudinary.js";
import Blog from "../models/blog.js";

export const addBlog = async (req, res) => {
  try {
    const { title, subTitle, description, category, isPublished } = req.body;

    if (!title || !description || !category || !req.file) {
      return res.json({ success: false, message: "Missing required fields" });
    }

    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "blogs",
      transformation: [
        { width: 1280, crop: "limit" },
        { fetch_format: "webp", quality: "auto" }
      ]
    });

    // Save blog to DB
    const blog = new Blog({
      title,
      subTitle,
      description,
      category,
      isPublished,
      imageUrl: result.secure_url,
    });

    await blog.save();

    res.json({ success: true, blog });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
