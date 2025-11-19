module.exports = {
  // HOST: "localhost",
  // USER: "root",
  // PASSWORD: "123456",
  // DB: "testdb"
  HOST: process.env.DB_HOST,
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PASSWORD,
  DB: process.env.DB_NAME
};
