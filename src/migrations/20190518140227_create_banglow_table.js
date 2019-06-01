/**
 * Create table `banglow`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
export function up(knex) {
  return knex.schema.createTable('banglow', table => {
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

    table.string('name').nullable();
    table.string('no_of_rooms').notNull();
    table.string('no_of_floors').notNull();

    table
      .foreign('plot_id')
      .references('id')
      .inTable('plot');
  });
}

/**
 * Drop `banglow`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
export function down(knex) {
  return knex.schema.dropTable('banglow');
}
