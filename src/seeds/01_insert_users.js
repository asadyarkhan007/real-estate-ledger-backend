import passwordHash from 'password-hash';

/**
 * Delete all existing entries and seed users table.
 *
 * @param   {Object} knex
 * @returns {Promise}
 */
export function seed(knex) {
  return knex('user')
    .del()
    .then(() => {
      return knex('managing_org').insert([
        {
          name: 'KDA'
        }
      ]);
    })
    .then(() => {
      return knex('property_type').insert([
        {
          name: 'Plot'
        },
        { name: 'Building' },
        { name: 'Apartment' },
        { name: 'Bungalow' }
      ]);
    })
    .then(() => {
      return knex('property_kind').insert([
        {
          name: 'Agriculture'
        },
        { name: 'Commercial' },
        { name: 'Residential' }
      ]);
    })
    .then(() => {
      return knex('user').insert([
        {
          username: 'mehdiraza',
          email: 'mehdiraza@gmail.com',
          password: passwordHash.generate('mehdi'),
          nic: '421015250',
          phone_number: '123456',
          managing_org: 1
        }
      ]);
    });
}
