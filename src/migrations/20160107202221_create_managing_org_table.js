/**
 * Create users table.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
export function up(knex) {
  return knex.schema.createTable('managing_org', table => {
    table.increments();
    table
      .timestamp('created_at')
      .notNull()
      .defaultTo(knex.raw('now()'));
    table
      .timestamp('updated_at')
      .notNull()
      .defaultTo(knex.raw('now()'));
    table.string('name').notNull();
    table.integer('active').unsigned().defaultTo(1);
    table.integer('address_id').unsigned();
    table
      .foreign('address_id')
      .references('id')
      .inTable('address');

  });
}

/**
 * Drop users table.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
export function down(knex) {
  return knex.schema.dropTable('managing_org');
}
