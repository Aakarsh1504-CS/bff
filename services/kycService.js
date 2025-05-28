const axios = require("axios");
require("dotenv").config();
const { publish } = require("../kafka")
const getUserKyc = async () => {
  const response = await axios.get(`${process.env.KYC_SERVICE_URL}/getUserKyc`, {
    headers: {
      "x-internal-key": process.env.INTERNAL_API_KEY,
    },
  });
  return response.data?.data;
};

const createUserKyc = async (data) => {
  const response = await axios.post(`${process.env.KYC_SERVICE_URL}/createUserKyc`, data, {
    headers: {
      "x-internal-key": process.env.INTERNAL_API_KEY,
    },
  });
  // Publish to Kafka topic
  // await publish('user.kyc.created', {
  //   timestamp: Date.now(),
  //   data
  // });
  return "";
};

module.exports = {
  getUserKyc,
  createUserKyc,
};