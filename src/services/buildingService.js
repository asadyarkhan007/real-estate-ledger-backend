import Boom from 'boom';
import Building from '../models/building';

/**
 * Get all building.
 *
 * @returns {Promise}
 */
export async function getAllBuilding() {
  const result = await Building.fetchAll({ withRelated: ['plot', 'plot.address'] });

  return result;
}

/**
 * Get a Building.
 *
 * @param   {Number|String}  id
 * @returns {Promise}
 */
export function getBuilding(id) {
  return new Building({ id }).fetch({ withRelated: ['plot', 'plot.address'] }).then(building => {
    if (!building) {
      throw Boom.notFound('Property not found');
    }

    return building;
  });
}

/**
 * Create new building.
 *
 * @param   {Object}  data
 * @returns {Promise}
 */
export function createBuilding(data) {
  return new Building({
    name: data.name,
    plot_id: data.plot_id,
    no_of_floors: data.no_of_floors,
    no_of_apartments_per_floor: data.no_of_apartments_per_floor
  }).save();
}

/**
 * Update a building.
 *
 * @param   {Number|String}  id
 * @param   {Object}         data
 * @returns {Promise}
 */
export function updateBuilding(id, data) {
  return new Building({ id }).save({
    name: data.name,
    plot_id: data.plot_id,
    no_of_floors: data.no_of_floors,
    no_of_apartments_per_floor: data.no_of_apartments_per_floor
  });
}

/**
 * Delete a building.
 *
 * @param   {Number|String}  id
 * @returns {Promise}
 */
export function deleteBuilding(id) {
  return new Building({ id }).fetch().then(building => building.destroy());
}
