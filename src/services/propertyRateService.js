import Boom from 'boom';
import PropertyRate from '../models/propertyRate';

/**
 * Get all propertyRate.
 *
 * @returns {Promise}
 */
export async function getAllPropertyRate() {
  const result = await PropertyRate.fetchAll();

  return result;
}

/**
 * Get a PropertyRate.
 *
 * @param   {Number|String}  id
 * @returns {Promise}
 */
export function getPropertyRate(id) {
  return new PropertyRate({ id }).fetch().then(propertyRate => {
    if (!propertyRate) {
      throw Boom.notFound('Property not found');
    }

    return propertyRate;
  });
}

/**
 * Create new propertyRate.
 *
 * @param   {Object}  propertyRate
 * @returns {Promise}
 */
export function createPropertyRate(propertyRate) {
  return new PropertyRate({ name: propertyRate.name }).save();
}

/**
 * Update a propertyRate.
 *
 * @param   {Number|String}  id
 * @param   {Object}         propertyRate
 * @returns {Promise}
 */
export function updatePropertyRate(id, propertyRate) {
  return new PropertyRate({ id }).save({ name: propertyRate.name });
}

/**
 * Delete a propertyRate.
 *
 * @param   {Number|String}  id
 * @returns {Promise}
 */
export function deletePropertyRate(id) {
  return new PropertyRate({ id }).fetch().then(propertyRate => propertyRate.destroy());
}
