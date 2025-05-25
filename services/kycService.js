const axios = require("axios");
require("dotenv").config();

const getUserKyc = async () => {
  const response = await axios.get(`${process.env.KYC_SERVICE_URL}/getUserKyc`, {
    headers: {
      "x-internal-key": process.env.INTERNAL_API_KEY,
    },
  });
  return response.data?.data;
};

module.exports = {
  getUserKyc,
};