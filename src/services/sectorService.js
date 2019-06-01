import Boom from 'boom';
import Sector from '../models/sectorBlock';

/**
 * Get all sector.
 *
 * @returns {Promise}
 */
export async function getAllSector() {
  const result = await Sector.fetchAll();

  return result;
}

/**
 * Get a Sector.
 *
 * @param   {Number|String}  id
 * @returns {Promise}
 */
export function getSector(id) {
  return new Sector({ id }).fetch().then(sector => {
    if (!sector) {
      throw Boom.notFound('Property not found');
    }

    return sector;
  });
}

/**
 * Create new sector.
 *
 * @param   {Object}  sector
 * @returns {Promise}
 */
export function createSector(sector) {
  return new Sector({ name: sector.name }).save();
}

/**
 * Update a sector.
 *
 * @param   {Number|String}  id
 * @param   {Object}         sector
 * @returns {Promise}
 */
export function updateSector(id, sector) {
  return new Sector({ id }).save({ name: sector.name });
}

/**
 * Delete a sector.
 *
 * @param   {Number|String}  id
 * @returns {Promise}
 */
export function deleteSector(id) {
  return new Sector({ id }).fetch().then(sector => sector.destroy());
}
