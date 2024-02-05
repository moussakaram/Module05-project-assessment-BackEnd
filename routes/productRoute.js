import express from 'express';
import {createProduct , getAllProducts, getProductById, updateProduct, deleteProduct } from '../controller/productController.js'
import { authenticateUser, isAdmin } from '../middleware/authMiddleware.js';


const router = express.Router();

router.get('/',getAllProducts);
router.get('/:id',getProductById);
router.post('/:id', isAdmin ,createProduct);
router.put('/:id', isAdmin,updateProduct)
router.delete('/:id', isAdmin,deleteProduct)









export default router;