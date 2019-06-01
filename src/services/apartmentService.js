import Boom from 'boom';
import Apartment from '../models/apartment';

/**
 * Get all apartment.
 *
 * @returns {Promise}
 */
export async function getAllApartment() {
  const result = await Apartment.fetchAll({ withRelated: ['building', 'building.plot', 'building.plot.address'] });

  return result;
}

/**
 * Get a Apartment.
 *
 * @param   {Number|String}  id
 * @returns {Promise}
 */
export function getApartment(id) {
  return new Apartment({ id })
    .fetch({ withRelated: ['building', 'building.plot', 'building.plot.address'] })
    .then(apartment => {
      if (!apartment) {
        throw Boom.notFound('Property not found');
      }

      return apartment;
    });
}

/**
 * Create new apartment.
 *
 * @param   {Object}  data
 * @returns {Promise}
 */
export function createApartment(data) {
  return new Apartment({
    name: data.name,
    no_of_rooms: data.no_of_rooms,
    floor_no: data.floor_no,
    plot_id: data.plot_id,
    building_id: data.building_id
  }).save();
}

/**
 * Update a apartment.
 *
 * @param   {Number|String}  id
 * @param   {Object}         data
 * @returns {Promise}
 */
export function updateApartment(id, data) {
  return new Apartment({ id }).save({
    name: data.name,
    no_of_rooms: data.no_of_rooms,
    floor_no: data.floor_no,
    plot_id: data.plot_id,
    building_id: data.building_id
  });
}

/**
 * Delete a apartment.
 *
 * @param   {Number|String}  id
 * @returns {Promise}
 */
export function deleteApartment(id) {
  return new Apartment({ id }).fetch().then(apartment => apartment.destroy());
}
