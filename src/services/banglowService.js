import Boom from 'boom';
import Banglow from '../models/banglow';

/**
 * Get all banglow.
 *
 * @returns {Promise}
 */
export async function getAllBanglow() {
  const result = await Banglow.fetchAll({ withRelated: ['plot', 'plot.address'] });

  return result;
}

/**
 * Get a Banglow.
 *
 * @param   {Number|String}  id
 * @returns {Promise}
 */
export function getBanglow(id) {
  return new Banglow({ id }).fetch({ withRelated: ['plot', 'plot.address'] }).then(banglow => {
    if (!banglow) {
      throw Boom.notFound('Property not found');
    }

    return banglow;
  });
}

/**
 * Create new banglow.
 *
 * @param   {Object}  data
 * @returns {Promise}
 */
export function createBanglow(data) {
  return new Banglow({
    no_of_rooms: data.no_of_rooms,
    no_of_floors: data.no_of_floors,
    plot_id: data.plot_id,
    name: data.name
  }).save();
}

/**
 * Update a banglow.
 *
 * @param   {Number|String}  id
 * @param   {Object}         data
 * @returns {Promise}
 */
export function updateBanglow(id, data) {
  return new Banglow({ id }).save({
    no_of_rooms: data.no_of_rooms,
    no_of_floors: data.no_of_floors,
    plot_id: data.plot_id,
    name: data.name
  });
}

/**
 * Delete a banglow.
 *
 * @param   {Number|String}  id
 * @returns {Promise}
 */
export function deleteBanglow(id) {
  return new Banglow({ id }).fetch().then(banglow => banglow.destroy());
}
