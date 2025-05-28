const kycService = require("../services/kycService");
// const { validationResult } = require("express-validator");
const utils = require("../helpers/util");


const getUserKyc = async (req, res, next) => {
    const { userId } = req.queryStringParameters || {};
    const docs = await kycService.getUserKyc();
    return utils.responseBody(res, 200, "SUCCESS", docs, true, null);
}

const addUserKyc = async (req, res, next) => {
    const { userId } = req.body;
    if (!userId) {
        return utils.responseBody(res, 400, "UserId is required", null, false, null);
    }
    const data = {
        userId,
        ...req.body,
    };
    const response = await kycService.createUserKyc(data);
    return utils.responseBody(res, 200, "SUCCESS", { response }, true, null);
}

module.exports = {
    getUserKyc,
    addUserKyc,
}

