const express = require("express");
const router = express.Router();
const {
  getAllCategory,
  getCategory,
  postCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryController");

router.get("/", getAllCategory);
router.post("/", postCategory);

router.get("/:categoryId", getCategory);
router.put("/:categordId", updateCategory);
router.delete("/:categoryId", deleteCategory);

module.exports = router;
