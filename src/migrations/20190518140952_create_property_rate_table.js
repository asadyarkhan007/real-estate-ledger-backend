/**
 * Create table `property_rate`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
export function up(knex) {
  return knex.schema.createTable('property_rate', table => {
    table.increments();
    table
      .timestamp('created_at')
      .notNull()
      .defaultTo(knex.raw('now()'));
    table
      .timestamp('updated_at')
      .notNull()
      .defaultTo(knex.raw('now()'));

    table.integer('property_type_id').unsigned();
    table.integer('property_kind_id').unsigned();
    table.integer('price_per_sq_yard').unsigned();
    table.timestamp('start_date').nullable();
    table.timestamp('end_date').nullable();

    table
      .foreign('property_type_id')
      .references('id')
      .inTable('property_type');
    table
      .foreign('property_kind_id')
      .references('id')
      .inTable('property_kind');
  });
}

/**
 * Drop `property_rate`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
export function down(knex) {
  return knex.schema.dropTable('property_rate');
}
