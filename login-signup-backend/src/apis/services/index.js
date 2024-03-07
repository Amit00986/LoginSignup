const LoginModel = require('../models/index');

const loginPage = async (data) => {
    try {
        console.log('+++++++++++++++', data);
        const saveDetails = await LoginModel.create(data);
        return saveDetails;
    } catch (error) {
        throw new Error('while login data save there is an error');
    };
};

module.exports = {
    loginPage
}