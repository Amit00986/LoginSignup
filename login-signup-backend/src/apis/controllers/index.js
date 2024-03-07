
const Loginservice = require('../services/index')

const loginPage = async (req, res) => {
    try {

        const data = req.body;
        
        const datas = await Loginservice.loginPage(data);

        if (datas) {
            res.status(200).json({
                success: true,
                data: datas
            });
        } else {
            res.status(404).json({
                success: false,
                error: "Error while uploading Address"
            });
        };
    } catch (error) {
        console.error('Error uploading Address:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
};

module.exports = {
    loginPage
}