import Order from "../models/orederModel.js";

//create new order 
export const createOrder = async (req, res) => {
    try {
      const userId = req.user._id;
      const { products } = req.body;
  
      const order = await Order.create({
        user: userId,
        products,
      });
  
      res.status(201).json(order);
    } catch (error) {
      res.status(500).json(error);
    }
  };

//get all order 
 export const getAllOrders = async (req, res) => {
    try {
      const orders = await Order.find().populate('user', 'email'); 
  
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json(error);
    }
  };


  //get order by order id 
  export const getOrderById = async (req, res) => {
    try {
      const orderId = req.params.id;
  
      const order = await Order.findById(orderId).populate('user', 'email'); // Populate user details
  
      if (!order) {
        return res.status(404).json({ message: 'Order not found' });
      }
  
      res.status(200).json(order);
    } catch (error) {
      res.status(500).json(error);
    }
  };


  //update order 
 export  const updateOrder = async (req, res) => {
    try {
      const orderId = req.params.id;
      const { products } = req.body;
  
      const order = await Order.findByIdAndUpdate(
        orderId,
        { products },
        { new: true, runValidators: true }
      );
  
      if (!order) {
        return res.status(404).json({ message: 'Order not found' });
      }
  
      res.status(200).json(order);
    } catch (error) {
      res.status(500).json(error);
    }
  };


  //delete order 
 export const deleteOrder = async (req, res) => {
    try {
      const orderId = req.params.id;
  
      const order = await Order.findByIdAndDelete(orderId);
  
      if (!order) {
        return res.status(404).json({ message: 'Order not found' });
      }
  
      res.status(200).json({ message: 'Order deleted successfully' });
    } catch (error) {
      res.status(500).json(error);
    }
  };
  







