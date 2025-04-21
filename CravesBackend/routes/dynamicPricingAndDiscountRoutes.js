const express = require('express');
const router = express.Router();
const PricingRule = require('../models/PricingRule');
const Discount = require('../models/discountModel');


// Create a new pricing rule
router.post('/create-pricing-rules', async (req, res) => {
    try {
        const pricingRule = new PricingRule(req.body);
        await pricingRule.save();
        res.status(201).json(pricingRule);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create pricing rule' });
    }
});

// Get all pricing rules
router.get('/pricing-rules', async (req, res) => {
    try {
        const pricingRules = await PricingRule.find();
        res.status(200).json(pricingRules);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get pricing rules' });
    }
});



//Update a pricing rule
router.put('/pricing-rules/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const pricingRule = await PricingRule.findByIdAndUpdate(id, req.body, { new: true });
        if (!pricingRule) {
            res.status(404).json({ error: 'Pricing rule not found' });
        } else {
            res.status(200).json(pricingRule);
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to update pricing rule' });
    }
});

// Delete a pricing rule
router.delete('/pricing-rules/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await PricingRule.findByIdAndDelete(id);
        res.status(204).json({ message: 'Pricing rule deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete pricing rule' });
    }
});


// Create a new discount
router.post('/create-discounts', async (req, res) => {
    try {
        const discount = new Discount(req.body);
        await discount.save();
        res.status(201).json(discount);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create discount' });
    }
});

// Update a discount
router.put('/discounts/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const discount = await Discount.findByIdAndUpdate(id, req.body, { new: true });
        if (!discount) {
            res.status(404).json({ error: 'Discount not found' });
        } else {
            res.status(200).json(discount);
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to update discount' });
    }
});

// Get all discounts
router.get('/discounts', async (req, res) => {
    try {
        const discounts = await Discount.find();
        res.status(200).json(discounts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get discounts' });
    }
});


// Delete a discount
router.delete('/discounts/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await Discount.findByIdAndDelete(id);
        res.status(204).json({ message: 'Discount deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete discount' });
    }
});


module.exports = router;
