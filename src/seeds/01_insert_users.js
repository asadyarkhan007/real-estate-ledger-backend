import passwordHash from 'password-hash';
import Fakerator from 'fakerator';
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
      return knex('address').insert([
        {
          street: 'AbdulAsfani Road',
          area: 'Gulshan-e-Iqbal',
          city: 'Karachi',
          province: 'Sindh',
          country: 'Pakistan'
        }
      ]).returning('id').then((id) => {
        return knex('managing_org').insert([
          {
            name: 'KDA',
            full_name: 'Karachi Development Authority',
            active: true,
            address_id:id
          }
        ]);
      })
    })    
    .then(() => {
      return knex('property_type').insert([
        { name: 'Plot' },
        { name: 'Building' },
        { name: 'Apartment' },
        { name: 'Bungalow' }
      ]);
    })
    .then(() => {
      return knex('property_kind').insert([
        { name: 'Agriculture'},
        { name: 'Commercial' },
        { name: 'Residential'}
      ]);
    })
    .then(() => {
      const temp = [];
      const fakerator = Fakerator('de-DE');

      for (let i = 0; i < 1; i++)
        temp.push({
          username: "admin",
          email: fakerator.internet.email(),
          password: passwordHash.generate('admin'),
          nic: fakerator.random.number(1000000000),
          phone_number: '03222733782',
          managing_org: null,
          full_name: 'Administrator',
          user_type: 1//fakerator.random.number(1, 3)
        });

       temp.push({
          username: "registrar",
          email: fakerator.internet.email(),
          password: passwordHash.generate('registrar'),
          nic: fakerator.random.number(1000000000),
          phone_number: '03222733781',
          managing_org: 1,
          full_name: 'Registrar',
          user_type: 2//fakerator.random.number(1, 3)
        });

      return knex('user')
        .insert(temp)
        .then(() => {
          const temp = [];

          for (let i = 0; i < 50; i++) temp.push({ name: i });

          return knex('sector').insert(temp);
        });
    });
}
