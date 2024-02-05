import express from 'express';
import {createProduct , getAllProducts, getProductById, updateProduct, deleteProduct } from '../controller/productController.js'


const router = express.Router();

router.get('/',getAllProducts);
router.get('/:id',getProductById);
router.post('/:id',createProduct);
router.put('/:id',updateProduct)
router.delete('/:id',deleteProduct)









export default router;