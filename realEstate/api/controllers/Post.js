import { prisma } from "../lib/prisma.js";

const getPosts = async (req, res) => {
  try {
    const posts = await prisma.post.findMany();

    if (!posts) {
      return res.status(404).json({ message: "No posts found" });
    }

    return res.status(200).json({
      success: true,
      data: posts,
      message: "Posts fetched successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const getPost = async (req, res) => {
  try {
    const { postId } = req.params;

    const post = await prisma.post.findUnique({
      where: {
        id: postId,
      },
    });

    if (!post) {
      return res.status(404).json({ message: "No post found" });
    }

    return res.status(200).json({
      success: true,
      data: post,
      message: "Post fetched successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const createPost = async (req, res) => {
  try {
    const {
      title,
      price,
      image,
      address,
      city,
      bedroom,
      bathroom,
      description,
      type,
      property,
      userId,
    } = req.body;

    // Validate required fields
    if (
      !title ||
      !price ||
      !address ||
      !city ||
      !bedroom ||
      !bathroom ||
      !description ||
      !type ||
      !property ||
      !userId
    ) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Validate enum values for type and property
    const validTypes = ["buy", "rent"];
    const validProperties = ["house", "apartment", "land", "commercial"];

    if (!validTypes.includes(type)) {
      return res.status(400).json({
        message: `Invalid type. Must be one of: ${validTypes.join(", ")}`,
      });
    }

    if (!validProperties.includes(property)) {
      return res.status(400).json({
        message: `Invalid property type. Must be one of: ${validProperties.join(
          ", "
        )}`,
      });
    }

    // Create the post in the database
    const newPost = await prisma.post.create({
      data: {
        title,
        price: parseInt(price, 10),
        image: image || null, // Optional field
        address,
        city,
        bedroom: parseInt(bedroom, 10),
        bathroom: parseInt(bathroom, 10),
        description,
        type,
        property,
        userId,
      },
    });

    return res.status(201).json({
      success: true,
      message: "Post created successfully",
      post: newPost,
    });
  } catch (error) {
    console.error("Error creating post:", error);

    return res.status(500).json({ message: "Internal server error" });
  }
};

const updatePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const {
      title,
      price,
      image,
      address,
      city,
      bedroom,
      bathroom,
      description,
      type,
      property,
    } = req.body;

    // Validate postId
    if (!postId) {
      return res.status(400).json({ message: "Post ID is required." });
    }

    // Validate enum values if provided
    const validTypes = ["buy", "rent"];
    const validProperties = ["house", "apartment", "land", "commercial"];

    if (type && !validTypes.includes(type)) {
      return res.status(400).json({
        message: `Invalid type. Must be one of: ${validTypes.join(", ")}`,
      });
    }

    if (property && !validProperties.includes(property)) {
      return res.status(400).json({
        message: `Invalid property type. Must be one of: ${validProperties.join(
          ", "
        )}`,
      });
    }

    // Update the post
    const updatedPost = await prisma.post.update({
      where: { id: postId },
      data: {
        title: title,
        price: parseInt(price, 10),
        image: image,
        address: address,
        city: city,
        bedroom: parseInt(bedroom, 10),
        bathroom: parseInt(bathroom, 10),
        description: description,
        type: type,
        property: property,
      },
    });

    return res.status(200).json({
      success: true,
      message: "Post updated successfully",
      post: updatedPost,
    });
  } catch (error) {
    console.error("Error updating post:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const deletePost = async (req, res) => {
  try {
    const { postId } = req.params;

    // Validate postId
    if (!postId) {
      return res.status(400).json({ message: "Post ID is required." });
    }

    // Delete the post
    await prisma.post.delete({
      where: { id: postId },
    });

    return res.status(200).json({
      success: true,
      message: "Post deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting post:", error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export { getPost, getPosts, createPost, updatePost, deletePost };
