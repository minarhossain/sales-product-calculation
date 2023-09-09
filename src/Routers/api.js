const express = require('express');
const ProductController = require('../Controllers/ProductController');


const router = express.Router();




router.get('/totalRevenue', ProductController.totalRevenue);
router.get('/quantityByProduct', ProductController.quantityByProduct);
router.get('/topProducts', ProductController.topProducts);
router.get('/averagePrice', ProductController.averagePrice);
router.get('/revenueByMonth', ProductController.revenueByMonth);
router.get('/highestQuantitySold', ProductController.highestQuantitySold);

module.exports = router;