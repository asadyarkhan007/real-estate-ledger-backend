import Boom from 'boom';
import Plot from '../models/plot';

/**
 * Get all plot.
 *
 * @returns {Promise}
 */
export async function getAllPlot() {
  const result = await Plot.fetchAll({ withRelated: ['address', 'sector'] });

  return result;
}

/**
 * Get a Plot.
 *
 * @param   {Number|String}  id
 * @returns {Promise}
 */
export function getPlot(id) {
  return new Plot({ id }).fetch({ withRelated: ['address', 'sector'] }).then(plot => {
    if (!plot) {
      throw Boom.notFound('Property not found');
    }

    return plot;
  });
}

/**
 * Create new plot.
 *
 * @param   {Object}  data
 * @returns {Promise}
 */
export function createPlot(data) {
  return new Plot({
    sector_id: data.sector_id,
    area_in_sq_yards: data.area_in_sq_yards,
    address_id: data.address_id
  }).save();
}

/**
 * Update a plot.
 *
 * @param   {Number|String}  id
 * @param   {Object}         data
 * @returns {Promise}
 */
export function updatePlot(id, data) {
  return new Plot({ id }).save({
    sector_id: data.sector_id,
    area_in_sq_yards: data.area_in_sq_yards,
    address_id: data.address_id
  });
}

/**
 * Delete a plot.
 *
 * @param   {Number|String}  id
 * @returns {Promise}
 */
export function deletePlot(id) {
  return new Plot({ id }).fetch().then(plot => plot.destroy());
}
