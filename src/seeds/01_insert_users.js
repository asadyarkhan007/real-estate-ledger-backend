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
          street: 'Building F-1 Block 2',
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
      return knex('address').insert([
        {
          street: 'Building F-4 Block 3',
          area: 'Tariq Road',
          city: 'Karachi',
          province: 'Sindh',
          country: 'Pakistan'
        }
      ]).returning('id').then((id) => {
        return knex('managing_org').insert([
          {
            name: 'KMC',
            full_name: 'Karachi Municipal Corporationy',
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

      
        temp.push({
          username: "admin",
          email: "admin@rels.com",
          password: passwordHash.generate('password'),
          nic: 4220160229691,
          phone_number: '03222733782',
          managing_org: null,
          full_name: 'Administrator',
          blockchain_key: '0x0A08a58433108f1a8dF080Ef552f137b2f7b8ce0',
          user_type: 1
        });

       temp.push({
          username: "kdaregistrar1",
          email: "kdaregistrar1@kda.com",
          password: passwordHash.generate('password'),
          nic: 4220160229692,
          phone_number: '03222733783',
          managing_org: 1,
          full_name: 'Hammad KDA',
          blockchain_key: '0xC37A4a1EFfd92c55Ada5607480dfD7d0dd25146A',
          user_type: 2
        });

         temp.push({
          username: "kdaregistrar2",
          email: "kdaregistrar2@kda.com",
          password: passwordHash.generate('password'),
          nic: 4220160229693,
          phone_number: '03222733784',
          managing_org: 1,
          full_name: 'Aslam KDA',
          blockchain_key: '0xE485D7A5832e587359278029E2242A326b8C01C0',
          user_type: 2
        });

        temp.push({
          username: "kmcregistrar1",
          email: "kmcregistrar1@kmc.com",
          password: passwordHash.generate('password'),
          nic: 4220160229694,
          phone_number: '03222733785',
          managing_org: 2,
          full_name: 'Amir KMC',
          blockchain_key: '0x7826146Ef0867019393c5b4D7d30CC0e7E5C0440',
          user_type: 2
        });

       temp.push({
          username: "asadkhan",
          email: "asadkhan@gmail.com",
          password: passwordHash.generate('password'),
          nic: 4220160229695,
          phone_number: '03222733787',
          managing_org: null,
          full_name: 'Asad Ullah Yar Khan',
          blockchain_key: '0xA1036A1079F8676B65165Db78C34348358206b69',
          user_type: 3
        });

       temp.push({
          username: "zulfiqar",
          email: "zulfiqar@nu.edu.pk",
          password: passwordHash.generate('password'),
          nic: 4220160229699,
          phone_number: '03222733789',
          managing_org: null,
          full_name: 'Zulfiqar Ali Memom',
          blockchain_key: '0x0b2F996aA29D21C3296DF83FaEB4597aD2Af2cF1',
          user_type: 3
        });

         temp.push({
          username: "rafi",
          email: "rafi@nu.edu.pk",
          password: passwordHash.generate('password'),
          nic: 4220160229612,
          phone_number: '03222733789',
          managing_org: null,
          full_name: 'Rafi Ullah Khan',
          blockchain_key: '0x0BBde9db7c589f748067d687390F2797a9F7804f',
          user_type: 3
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
