import Boom from 'boom';
import PropertyKind from '../models/propertyKind';

/**
 * Get all propertyKind.
 *
 * @returns {Promise}
 */
export async function getAllPropertyKind() {
  const result = await PropertyKind.fetchAll();

  return result;
}

/**
 * Get a PropertyKind.
 *
 * @param   {Number|String}  id
 * @returns {Promise}
 */
export function getPropertyKind(id) {
  return new PropertyKind({ id }).fetch().then(propertyKind => {
    if (!propertyKind) {
      throw Boom.notFound('Property not found');
    }

    return propertyKind;
  });
}

/**
 * Create new propertyKind.
 *
 * @param   {Object}  propertyKind
 * @returns {Promise}
 */
export function createPropertyKind(propertyKind) {
  return new PropertyKind({ name: propertyKind.name }).save();
}

/**
 * Update a propertyKind.
 *
 * @param   {Number|String}  id
 * @param   {Object}         propertyKind
 * @returns {Promise}
 */
export function updatePropertyKind(id, propertyKind) {
  return new PropertyKind({ id }).save({ name: propertyKind.name });
}

/**
 * Delete a propertyKind.
 *
 * @param   {Number|String}  id
 * @returns {Promise}
 */
export function deletePropertyKind(id) {
  return new PropertyKind({ id }).fetch().then(propertyKind => propertyKind.destroy());
}
