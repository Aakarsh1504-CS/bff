const kycService = require("../services/kycService");
// const { validationResult } = require("express-validator");
const utils = require("../helpers/util");


const getUserKyc = async (req, res, next) => {
    const { userId } = req.queryStringParameters || {};
    const docs = await kycService.getUserKyc();
    return utils.responseBody(res, 200, "SUCCESS", { docs }, true, null);
}

module.exports = {
    getUserKyc,
}

