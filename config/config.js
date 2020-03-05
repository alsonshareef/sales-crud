module.exports = {
  development: {
    username: 'sales-crud-dbuser',
    password: '1234',
    database: 'sales-crud-db',
    host: '127.0.0.1',
    dialect: 'postgres',
    port: 5432
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql'
  }
};
