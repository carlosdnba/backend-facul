import mysql from 'mysql';

import handler from '../errors/Handler';
import logs from '../utils/ConsoleLogs';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: 'password',
  database: 'database'
});

connection.connect(function (error) {
  handler.connectionError(error);
  logs.dbConnection(connection.threadId);
});

export default connection;