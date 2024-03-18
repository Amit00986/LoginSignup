const LoginModel = require('../models/index');

const loginPage = async (data) => {
    try {
        console.log('+++++++++++++++', data);
        const { name, password, email } = data;
        const findData = await LoginModel.findOne({
            name: name, password: password, email: email
        });
        if (findData) {
            return ('Data is Already present');
        }
        const saveDetails = await LoginModel.create(data);
        return saveDetails;
    } catch (error) {
        throw new Error('while login data save there is an error');
    };
};

const getUserDetails = async (userId) => {
    try {
        const data = await LoginModel.findById(userId);
        return data;
    } catch (error) {
        throw new Error('while getting data save there is an error');
    }
};


module.exports = {
    loginPage,
    getUserDetails
}