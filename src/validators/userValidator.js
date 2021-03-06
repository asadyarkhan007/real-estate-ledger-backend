import Joi from 'joi';

import validate from '../utils/validate';
import * as userService from '../services/userService';

const SCHEMA = {
  username: Joi.string()
    .label('username')
    .max(90)
    .required(),
  email: Joi.string()
    .label('email')
    .email()
    .required(),
  password: Joi.string()
    .label('password')
    .max(90)
    .required(),
  nic: Joi.string()
    .label('NIC')
    .max(90)
    .required()
};

/**
 * Validate create/update user request.
 *
 * @param   {Object}   req
 * @param   {Object}   res
 * @param   {Function} next
 * @returns {Promise}
 */
function userValidator(req, res, next) {
  return validate(req.body, SCHEMA)
    .then(() => next())
    .catch(err => next(err));
}

/**
 * Validate users existence.
 *
 * @param   {Object}   req
 * @param   {Object}   res
 * @param   {Function} next
 * @returns {Promise}
 */
function findUser(req, res, next) {
  return userService
    .getUser(req.params.id)
    .then(() => next())
    .catch(err => next(err));
}

export { findUser, userValidator };
