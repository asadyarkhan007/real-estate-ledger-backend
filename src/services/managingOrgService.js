import Boom from 'boom';
import ManagingOrg from '../models/managingOrg';
import * as addressService from '../services/addressService';
import { logger } from 'handlebars';

/**
 * Get all managingOrg.
 *
 * @returns {Promise}
 */
export async function getAllManagingOrg() {
  const result = await ManagingOrg.fetchAll({ withRelated: ['address'] });

  return result;
}

/**
 * Get a ManagingOrg.
 *
 * @param   {Number|String}  id
 * @returns {Promise}
 */
export function getManagingOrg(id) {
  return new ManagingOrg({ id }).fetch({ withRelated: ['address'] }).then(managingOrg => {
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
  try {
    const address = await addressService.createAddress(managingOrg.address);

    return new ManagingOrg({
      name: managingOrg.name,
      full_name: managingOrg.full_name,
      address_id: address.get('id'),
      active: true
    }).save();
  } catch (err) {
    logger(err);
  }
}

/**
 * Update a managingOrg.
 *
 * @param   {Number|String}  id
 * @param   {Object}         managingOrg
 * @returns {Promise}
 */
export async function updateManagingOrg(id, managingOrg) {
  try {
    const address = await addressService.updateAddress(managingOrg.address.id, managingOrg.address);

    return new ManagingOrg({ id }).save({
      name: managingOrg.name,
      full_name: managingOrg.full_name,
      address_id: address.get('id'),
      active: true
    });
  } catch (err) {
    logger(err);
  }
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
