import db from '../db';
import utils from '../../utils';

class DAO {
  static async insertUser(
    name, address, email, userID, fingerPrint,
    fingerPrintToSend, fingerPosition, gender, dateCreated,
  ) {
    const values = [
      name, address, email, userID, fingerPrint,
      fingerPrintToSend, fingerPosition, gender, dateCreated,
    ];
    const query = `INSERT INTO users (
                                  name,
                                  address,
                                  email,
                                  user_id,
                                  finger_print,
                                  finger_print_to_send,
                                  finger_position,
                                  gender,
                                  date_created
                                  )
                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *
                    `;
    const { rows } = await db.query(query, values);
    return utils.camelCased(rows[0]);
  }

  static async getAllUsers() {
    const query = 'SELECT * FROM users';
    const { rows } = await db.query(query);
    const result = [];
    rows.forEach((elem) => {
      result.push(utils.camelCased(elem));
    });
    return result;
  }
}

export default DAO;
