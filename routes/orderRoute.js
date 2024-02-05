import express from 'express';
import {createOrder , getAllOrders, getOrderById, updateOrder, deleteOrder } from '../controller/orderController.js'
import { authenticateUser, isAdmin } from '../middleware/authMiddleware.js';



const router = express.Router();

router.get('/',isAdmin, getAllOrders);
router.get('/:id', getOrderById);
router.post('/:id',isAdmin,createOrder);
router.put('/:id',isAdmin,updateOrder)
router.delete('/:id',isAdmin ,deleteOrder)









export default router;