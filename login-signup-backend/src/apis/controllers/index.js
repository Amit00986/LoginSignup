
const Loginservice = require('../services/index')

const HttpResponseHandler = require('../../common/ResponseHandler/index')

const loginPage = async (req, res) => {
    try {

        const data = req.body;

        const datas = await Loginservice.loginPage(data);

        if (datas) {
            return HttpResponseHandler.success(req, res, datas, 200);
        } else {
            return HttpResponseHandler.success(req, res, datas, 404);
        };

    } catch (error) {
        console.error('Error uploading Address:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
};


const getUserDetails = async (req, res) => {
    try {
        const userId = req.params.id;

        const data = await Loginservice.getUserDetails(userId);

        if (data) {
            return HttpResponseHandler.success(req, res, data, 200);
        } else {
            return HttpResponseHandler.success(req, res, data, 404);
        };

    } catch (error) {
        console.error('Error getting details:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
};

module.exports = {
    loginPage,
    getUserDetails
}