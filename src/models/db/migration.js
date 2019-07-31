import db from './index';

const migrate = async () => {
  const text = `
        DROP TABLE IF EXISTS users CASCADE;
        CREATE TABLE users (
            id SERIAL NOT NULL PRIMARY KEY,
            name VARCHAR(255),
            address VARCHAR(255),
            email VARCHAR(255),
            user_id VARCHAR(255),
            finger_print VARCHAR(255),
            gender VARCHAR(255),
            date_created TIMESTAMP,
            date_moved TIMESTAMP DEFAULT (NOW())
        );
    `;
  await db.query(text);
};

migrate();
