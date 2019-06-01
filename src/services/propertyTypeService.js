import Boom from 'boom';

import PropertyType from '../models/propertyType';

/**
 * Get all propertyType.
 *
 * @returns {Promise}
 */
export async function getAllPropertyType() {
  const result = await PropertyType.fetchAll();

  return result;
}

/**
 * Get a propertyType.
 *
 * @param   {Number|String}  id
 * @returns {Promise}
 */
export function getPropertyType(id) {
  return new PropertyType({ id }).fetch().then(propertyType => {
    if (!propertyType) {
      throw Boom.notFound('Property not found');
    }

    return propertyType;
  });
}

/**
 * Create new propertyType.
 *
 * @param   {Object}  propertyType
 * @returns {Promise}
 */
export function createPropertyType(propertyType) {
  return new PropertyType({ name: propertyType.name }).save();
}

/**
 * Update a propertyType.
 *
 * @param   {Number|String}  id
 * @param   {Object}         propertyType
 * @returns {Promise}
 */
export function updatePropertyType(id, propertyType) {
  return new PropertyType({ id }).save({ name: propertyType.name });
}

/**
 * Delete a propertyType.
 *
 * @param   {Number|String}  id
 * @returns {Promise}
 */
export function deletePropertyType(id) {
  return new PropertyType({ id }).fetch().then(propertyType => propertyType.destroy());
}
