const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/favicon.ico', (req, res) => res.status(204));

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

// /admin/products => GET
router.get('/products', adminController.getProducts);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

router.get('/edit-product/:productId', adminController.getEditProduct);

router.post('/edit-product');

module.exports = router;