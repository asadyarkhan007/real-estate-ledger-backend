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
  return User.where({ email: data.email }).fetch();
}

export function getUserByEmailAndUserType(data) {
  return User.where({ email: data.email, user_type:data.userType }).fetch();
}

export function getUserByEmailAndUserTypeAndOrgId(data) {
  return User.where({ email: data.email, user_type:data.userType,
  org_id:data.orgId }).fetch();
}

export function getUserByUsername(data) {
  return User.where({ username: data.username }).fetch();
}

export function getUserByUsernameAndUserType(data) {
  return User.where({ username: data.username, user_type:data.userType }).fetch();
}

export function getUserByUsernameAndUserTypeAndOrgId(data) {
  return User.where({ username: data.username, user_type:data.userType,
  managing_org:data.orgId }).fetch();
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
    managing_org: data.managing_org,
    blockchain_key: data.blockchain_key
  }).save();
}

export function createCustomer(data) {
  return new User({
    username: data.username,
    password: passwordHash.generate(data.password),
    email: data.email,
    phone_number: data.phone_number,
    nic: data.nic,
    managing_org: data.managing_org,
    blockchain_key: data.blockchain_key,
    user_type:3
  }).save();
}


export function createRegistrar(data) {
  return new User({
    username: data.username,
    password: passwordHash.generate(data.password),
    email: data.email,
    phone_number: data.phone_number,
    nic: data.nic,
    managing_org: data.managing_org,
    blockchain_key: data.blockchain_key,
    user_type:2
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
    ...data
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
