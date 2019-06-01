import Boom from 'boom';
import Address from '../models/address';

/**
 * Get all address.
 *
 * @returns {Promise}
 */
export async function getAllAddress() {
  const result = await Address.fetchAll();

  return result;
}

/**
 * Get a Address.
 *
 * @param   {Number|String}  id
 * @returns {Promise}
 */
export function getAddress(id) {
  return new Address({ id }).fetch().then(address => {
    if (!address) {
      throw Boom.notFound('Property not found');
    }

    return address;
  });
}

/**
 * Create new address.
 *
 * @param   {Object}  data
 * @returns {Promise}
 */
export function createAddress(data) {
  return new Address({ street: data.street, area: data.area, city: data.city, country: data.country }).save();
}

/**
 * Update a address.
 *
 * @param   {Number|String}  id
 * @param   {Object}         data
 * @returns {Promise}
 */
export function updateAddress(id, data) {
  return new Address({ id }).save({ street: data.street, area: data.area, city: data.city, country: data.country });
}

/**
 * Delete a address.
 *
 * @param   {Number|String}  id
 * @returns {Promise}
 */
export function deleteAddress(id) {
  return new Address({ id }).fetch().then(address => address.destroy());
}
