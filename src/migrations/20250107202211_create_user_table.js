/**
 * Create users table.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
export function up(knex) {
  return knex.schema.createTable('user', table => {
    table.increments();
    table
      .timestamp('created_at')
      .notNull()
      .defaultTo(knex.raw('now()'));
    table
      .timestamp('updated_at')
      .notNull()
      .defaultTo(knex.raw('now()'));
    table
      .string('username')
      .notNull()
      .unique();
    table.string('full_name').notNull();
    table.string('password').notNull();
    table
      .string('email')
      .unique()
      .notNull();
    table
      .integer('user_type')
      .unsigned()
      .nullable();
    table.integer('phone_number').unsigned();
    table.integer('nic').unsigned();
    table.integer('managing_org').unsigned();
    table.string('blockchain_key').nullable();

    table
      .foreign('managing_org')
      .references('id')
      .inTable('managing_org');
  });
}

/**
 * Drop users table.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
export function down(knex) {
  return knex.schema.dropTable('user');
}
