const express = require('express');

const router = express.Router();

const LoginController = require('../../../controllers/index')

router.post('/loginPage', async (req, res) => {
    try {
        const data = await LoginController.loginPage(req, res);
    } catch (error) {
        throw new Error('error in creating login');
    }
});

router.get('/user/deatisl/:id', async (req, res) => {
    try {
        const data = await LoginController.getUserDetails(req, res);
    } catch (error) {
        throw new Error('error in getting Details');
    }
});

module.exports = router;