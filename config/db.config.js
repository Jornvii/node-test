
const sql = require("mssql");

const dbConfig = {
    user: "localhost",
  password: "12345678",
  server: "",
  database: "shop_list1",
  options: {
    trustServerCertificate: true,
    trustedConnection: true,
    encrypt: false,
  },
};

const poolPromise = new sql.ConnectionPool(dbConfig)
  .connect()
  .then(pool => {
    console.log('Connected to MSSQL');
    return pool;
  })
  .catch(err => {
    console.error('Database Connection Failed!', err.stack);
    throw err;
  });

module.exports = {
  sql, 
  poolPromise
};

