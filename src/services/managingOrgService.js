import Boom from 'boom';
import ManagingOrg from '../models/managingOrg';
import * as addressService from '../services/addressService';
/**
 * Get all managingOrg.
 *
 * @returns {Promise}
 */
export async function getAllManagingOrg() {
  const result = await ManagingOrg.fetchAll();

  return result;
}

/**
 * Get a ManagingOrg.
 *
 * @param   {Number|String}  id
 * @returns {Promise}
 */
export function getManagingOrg(id) {
  return new ManagingOrg({ id }).fetch().then(managingOrg => {
    if (!managingOrg) {
      throw Boom.notFound('Property not found');
    }

    return managingOrg;
  });
}

/**
 * Create new managingOrg.
 *
 * @param   {Object}  managingOrg
 * @returns {Promise}
 */
export async function createManagingOrg(managingOrg) {
  const address = await addressService.createAddress(managingOrg.address);

  
return new ManagingOrg({ name: managingOrg.name, address_id:address.get("id") }).save();
}

/**
 * Update a managingOrg.
 *
 * @param   {Number|String}  id
 * @param   {Object}         managingOrg
 * @returns {Promise}
 */
export function updateManagingOrg(id, managingOrg) {
  return new ManagingOrg({ id }).save({ name: managingOrg.name });
}

/**
 * Delete a managingOrg.
 *
 * @param   {Number|String}  id
 * @returns {Promise}
 */
export function deleteManagingOrg(id) {
  return new ManagingOrg({ id }).fetch().then(managingOrg => managingOrg.destroy());
}
