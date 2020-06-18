const express = require('express')
const router = express.Router()
const {
    getAllCategory,
    getCategory,
    postCategory,
    updateCategory,
    deleteCategory
} = require('../controllers/categoryController')

router.get('/', getAllCategory);
router.get('/:categoryId', getCategory);
router.post('/', postCategory);
router.put('/:categorydId', updateCategory);
router.delete('/:categoryId', deleteCategory);

module.exports = router