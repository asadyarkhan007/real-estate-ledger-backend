/**
 * Create table `plot`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
export function up(knex) {
  return knex.schema.createTable('plot', table => {
    table.increments();
    table
      .timestamp('created_at')
      .notNull()
      .defaultTo(knex.raw('now()'));
    table
      .timestamp('updated_at')
      .notNull()
      .defaultTo(knex.raw('now()'));
    table.integer('sector_id').unsigned();
    table.integer('address_id').unsigned();

    table.string('area_in_sq_yards').notNull();

    table
      .foreign('sector_id')
      .references('id')
      .inTable('sector');
    table
      .foreign('address_id')
      .references('id')
      .inTable('address');
  });
}

/**
 * Drop `plot`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
export function down(knex) {
  return knex.schema.dropTable('plot');
}
