export const sqlConfig = {
    server: '10.68.102.4',
    port: 1433,
    user: 'sa',
    password: 'Admin2018@',
    database: 'ProvaPWII_2022',
    options: {
      enableArithAbort : true,
      encrypt: false,
      trustServerCertificate: true,
    },
    connectionTimeout : 15000,
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000
    },
}