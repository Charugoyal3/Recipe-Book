const express = require('express')
const router = express.Router()
const {
    getAllCategory,
    getCategory,
    postCategory,
    updateCategory,
    deleteCategory
} = require('../controllers/categoryController')

router.get('/category', getAllCategory);
router.get('/:categoryId', getCategory);
router.post('/category', postCategory);
router.put('/:categordId', updateCategory);
router.delete('/:categoryId', deleteCategory);

module.exports = router