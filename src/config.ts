require('dotenv').config();

export default {
  mongoUrl: process.env.MONGO_URL ?? '',
}
