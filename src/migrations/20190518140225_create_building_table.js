/**
 * Create table `building`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
export function up(knex) {
  return knex.schema.createTable('building', table => {
    table.increments();
    table
      .timestamp('created_at')
      .notNull()
      .defaultTo(knex.raw('now()'));
    table
      .timestamp('updated_at')
      .notNull()
      .defaultTo(knex.raw('now()'));

    table.string('name').nullable();
    table.integer('plot_id').unsigned();
    table.string('no_of_floors').notNull();
    table.string('no_of_apartments_per_floor').notNull();

    table
      .foreign('plot_id')
      .references('id')
      .inTable('plot');
  });
}

/**
 * Drop `building`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
export function down(knex) {
  return knex.schema.dropTable('building');
}
