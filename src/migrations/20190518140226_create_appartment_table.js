/**
 * Create table `apartment`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
export function up(knex) {
  return knex.schema.createTable('apartment', table => {
    table.increments();
    table
      .timestamp('created_at')
      .notNull()
      .defaultTo(knex.raw('now()'));
    table
      .timestamp('updated_at')
      .notNull()
      .defaultTo(knex.raw('now()'));

    table.integer('plot_id').unsigned();
    table
      .integer('building_id')
      .unsigned()
      .nullable();
    table.string('name').nullable();
    table.string('no_of_rooms').notNull();
    table.string('floor_no').notNull();

    table
      .foreign('plot_id')
      .references('id')
      .inTable('plot');

    table
      .foreign('building_id')
      .references('id')
      .inTable('building');
  });
}

/**
 * Drop `apartment`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
export function down(knex) {
  return knex.schema.dropTable('apartment');
}
