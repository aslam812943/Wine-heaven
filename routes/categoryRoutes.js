const express = require('express');
const categoryController = require('../controller/adminController/categoryController');
const { upload } = require('../config/cloudinaryConfig')
const isAdmin = require('../middlware/admin')
const router = express.Router();


router.get('/', isAdmin, categoryController.listCategories);
router.get('/add', isAdmin, categoryController.renderAddpage)
router.post('/add', isAdmin, upload, categoryController.addCategory)
router.get('/edit/:id', isAdmin, categoryController.renderEditpage)
router.post('/edit/:id', isAdmin, upload, categoryController.editCategory)
router.post('/delete/:id', isAdmin, categoryController.deleteCategory);
router.post('/block/:id', isAdmin, categoryController.blockCategory);
router.post('/unblock/:id', isAdmin, categoryController.unblockCategory);

module.exports = router;
