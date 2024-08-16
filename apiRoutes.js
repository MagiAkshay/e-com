
const jwtAuth = require("../middleware/jwtToken");
const express = require('express');
const Product= require("../modules/product");

const router = express.Router();

router.get("/products",  async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
        
    } catch (e) {
        res.status(500).json({ message: 'Internal server error' });
    }
});

// router.get("/products/:id", async (req, res) => {
//     const { id } = req.params;

//     try {
//         // Find the product by ID
//         const selectedProduct = await Product.findById(id);

//         if (!selectedProduct) {
//             return res.status(404).json({ message: 'Product not found' });
//         }

        
//         const remainingProducts = await Product.find({ _id: { $ne: id } });

        
//         res.json({
//             selectedProduct,
//             remainingProducts
//         });
        
//     } catch (e) {
//         res.status(500).json({ message: 'Internal server error' });
//     }
// });
router.get("/products/:id", async (req, res) => {
    const { id } = req.params;

    try {
        
        const selectedProduct = await Product.findById(id);
        console.log(selectedProduct);
        

        if (!selectedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        
        const remainingProducts = await Product.find({ _id: { $ne: id } });

        
        res.json({
            selectedProduct,
            remainingProducts
        });
        
    } catch (error) {
        console.error('Internal server error:', error); // Log the error for debugging
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.get("/view/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const selectedProduct = await Product.findById(id);
        console.log(selectedProduct);
        
        if (!selectedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json({
            selectedProduct
        });
        
    } catch (error) {
        console.error('Internal server error:', error); // Log the error for debugging
        res.status(500).json({ message: 'Internal server error' });
    }
});


module.exports = router;