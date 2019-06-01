import HttpStatus from 'http-status-codes';
import passwordHash from 'password-hash';

import * as userService from '../services/userService';

// eslint-disable-next-line require-jsdoc
class UserController {
  /**
   * Get all users.
   *
   * @param {Object} req
   * @param {Object} res
   * @param {Function} next
   */
  static fetchAllUsers(req, res, next) {
    userService
      .getAllUsers()
      .then(data => res.json({ data }))
      .catch(err => next(err));
  }

  /**
   * Get all users.
   *
   * @param {Object} req
   * @param {Object} res
   * @param {Function} next
   */
  static async fetchAll(req, res, next) {
    try {
      const users = await userService.getAllUsers();

      res.json({
        success: true,
        data: users
      });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  }

  /**
   * Get a user by its id.
   *
   * @param {Object} req
   * @param {Object} res
   * @param {Function} next
   */
  static fetchById(req, res, next) {
    userService
      .getUser(req.params.id)
      .then(data => res.json({ data }))
      .catch(err => next(err));
  }

  /**
   * Get a user by its email.
   *
   * @param {Object} req
   * @param {Object} res
   * @param {Function} next
   */
  static async fetchByEmail(req, res, next) {
    try {
      const user = await userService.getUserByEmail(req.body);

      console.log(passwordHash.generate('admin'));
        console.log(user);
      if (user) {
        if (passwordHash.verify(req.body.password, user.get('password'))) {
          res.json({
            success: true,
            data: user
          });
        } else {
          res.json({
            success: false
          });
        }
      } else {
        res.json({
          success: false
        });
      }
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  }

    static async fetchByEmailAndUserType(req, res, next) {
    try {
      const user = await userService.getUserByEmailAndUserType(req.email,req.userType);

      if (user) {
        if (passwordHash.verify(req.body.password, user.get('password'))) {
          res.json({
            success: true,
            data: user
          });
        } else {
          res.json({
            success: false
          });
        }
      } else {
        res.json({
          success: false
        });
      }
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  }

  static async fetchByEmailAndUserTypeAndOrgId(req, res, next) {
    try {
      const user = await userService.
      getUserByEmailAndUserTypeAndOrgId(req.email,req.userType,req.org_id);

      if (user) {
        if (passwordHash.verify(req.body.password, user.get('password'))) {
          res.json({
            success: true,
            data: user
          });
        } else {
          res.json({
            success: false
          });
        }
      } else {
        res.json({
          success: false
        });
      }
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  }

  static async fetchByUsername(req, res, next) {
    try {
      const user = await userService.getUserByUsername(req.body);

      if (user) {
        if (passwordHash.verify(req.body.password, user.get('password'))) {
          res.json({
            success: true,
            data: user
          });
        } else {
          res.json({
            success: false
          });
        }
      } else {
        res.json({
          success: false
        });
      }
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  }

    static async fetchByUsernameAndUserType(req, res, next) {
    try {
      const user = await userService.getUserByUsernameAndUserType(req.body);

      if (user) {
        if (passwordHash.verify(req.body.password, user.get('password'))) {
          res.json({
            success: true,
            data: user
          });
        } else {
          res.json({
            success: false
          });
        }
      } else {
        res.json({
          success: false
        });
      }
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  }

  static async fetchByUsernameAndUserTypeAndOrgId(req, res, next) {
    try {
      const user = await userService.getUserByUsernameAndUserTypeAndOrgId(req.body);

      if (user) {
        if (passwordHash.verify(req.body.password, user.get('password'))) {
          res.json({
            success: true,
            data: user
          });
        } else {
          res.json({
            success: false
          });
        }
      } else {
        res.json({
          success: false
        });
      }
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  }

  /**
   * Create a new user.
   *
   * @param {Object} req
   * @param {Object} res
   * @param {Function} next
   */
  static async create(req, res, next) {
    try {
      const user = await userService.createUser(req.body);

      res.status(HttpStatus.CREATED).json({
        data: user
      });
    } catch (err) {
      res.json({
        success: false,
        err: err.message
      });
    }
  }

    static async createCustomer(req, res, next) {
    try {
      const user = await userService.createCustomer(req.body);

      res.status(HttpStatus.CREATED).json({
        data: user
      });
    } catch (err) {
      res.json({
        success: false,
        err: err.message
      });
    }
  }

    static async createRegistrar(req, res, next) {
    try {
      const user = await userService.createRegistrar(req.body);

      res.status(HttpStatus.CREATED).json({
        data: user
      });
    } catch (err) {
      res.json({
        success: false,
        err: err.message
      });
    }
  }

  /**
   * Update a user.
   *
   * @param {Object} req
   * @param {Object} res
   * @param {Function} next
   */
  static update(req, res, next) {
    userService
      .updateUser(req.params.id, req.body)
      .then(data => res.json({ data }))
      .catch(err => next(err));
  }

  /**
   * Delete a user.
   *
   * @param {Object} req
   * @param {Object} res
   * @param {Function} next
   */
  static deleteUser(req, res, next) {
    userService
      .deleteUser(req.params.id)
      .then(data => res.status(HttpStatus.NO_CONTENT).json({ data }))
      .catch(err => next(err));
  }
}

export default UserController;
