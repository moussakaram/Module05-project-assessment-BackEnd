import express from 'express';
import {createProduct , getAllProducts, getProductById, updateProduct, deleteProduct } from '../controller/productController.js'
import { authenticateUser, isAdmin } from '../middleware/authMiddleware.js';


const router = express.Router();

router.get('/',getAllProducts);
router.get('/:id',getProductById);
router.post('/',createProduct);
router.put('/:id',updateProduct)
router.delete('/:id',deleteProduct)









export default router;