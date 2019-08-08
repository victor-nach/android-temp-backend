import DAO from '../models/dao';

class Controllers {
  /**
   *@static
   * @name insertUser
   * @description inserts user data into the database
   * @param { Object } req
   * @param { Object } res
   * @returns res
   * @memberof Controllers
   */
  static async insertUser(req, res) {
    const {
      name, address, email, userID, fingerPrint,
      fingerPrintToSend, fingerPosition, gender, dateCreated,
    } = req.body;
    try {
      const result = await DAO.insertUser(
        name, address, email, userID, fingerPrint,
        fingerPrintToSend, fingerPosition, gender, dateCreated,
      );
      return res.status(200).json({
        status: 'success',
        data: {
          ...result,
        },
      });
    } catch (error) {
      return res.status(500).json({
        status: 'error',
        message: 'server error',
      });
    }
  }

  /**
   *@static
   * @name getAllUsers
   * @description inserts user data into the database
   * @param { Object } req
   * @param { Object } res
   * @returns res
   * @memberof Controllers
   */
  static async getAllUsers(req, res) {
    try {
      const result = await DAO.getAllUsers();
      return res.status(200).json({
        status: 'success',
        data: result,
      });
    } catch (error) {
      return res.status(500).json({
        status: 'error',
        message: 'server error',
      });
    }
  }
}

export default Controllers;
