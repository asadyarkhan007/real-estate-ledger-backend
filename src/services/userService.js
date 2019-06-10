import User from '../models/user';
import passwordHash from 'password-hash';

/**
 * Get all users.
 *
 * @returns {Promise}
 */
export function getAllUsers() {
  return User.fetchAll({ withRelated: ['managingOrg'] });
}

/**
 * Get a user.
 *
 * @param   {Number|String}  id
 * @returns {Promise}
 */
export async function getUser(id) {
  const user = await new User({ id }).fetch({ withRelated: ['managingOrg'] });

  if (user) {
    return user;
  }
}

/**
 * Get user by email.
 *
 * @param   {Number|String}  data
 * @returns {Promise}
 */
export function getUserByEmail(data) {
  return User.where({ username: data.email }).fetch({ withRelated: ['managingOrg'] });
}

/**
 * Create new user.
 *
 * @param   {Object}  data
 * @returns {Promise}
 */
export function createUser(data) {
  return new User({
    username: data.username,
    password: passwordHash.generate(data.password),
    email: data.email,
    phone_number: data.phone_number,
    nic: data.nic,
    full_name: data.full_name,
    user_type: data.user_type || 3,
    managing_org: data.managing_org,
    blockchain_key: data.blockchain_key
  }).save();
}

/**
 * Update a user.
 *
 * @param   {Number|String}  id
 * @param   {Object}         data
 * @returns {Promise}
 */
export function updateUser(id, data) {
  return new User({ id }).save({
    ...data,
    password: passwordHash.generate(data.password)
  });
}

/**
 * Delete a user.
 *
 * @param   {Number|String}  id
 * @returns {Promise}
 */
export function deleteUser(id) {
  return new User({ id }).fetch().then(user => user.destroy());
}
