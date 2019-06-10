/**
 * Create table `property`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
export function up(knex) {
  return knex.schema.createTable('property', table => {
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
    table.integer('plot_id').unsigned();
    table.integer('banglow_id').unsigned();
    table.integer('building_id').unsigned();
    table.integer('apartment_id').unsigned();
    table.integer('managing_org_id').unsigned();

    table.string('name');

    table
      .foreign('property_type_id')
      .references('id')
      .inTable('property_type');
    table
      .foreign('property_kind_id')
      .references('id')
      .inTable('property_kind');

    table
      .foreign('plot_id')
      .references('id')
      .inTable('plot');

    table
      .foreign('banglow_id')
      .references('id')
      .inTable('banglow');

    table
      .foreign('building_id')
      .references('id')
      .inTable('building');

    table
      .foreign('apartment_id')
      .references('id')
      .inTable('apartment');

    table
      .foreign('managing_org_id')
      .references('id')
      .inTable('managing_org');
  });
}

/**
 * Drop `property`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
export function down(knex) {
  return knex.schema.dropTable('property');
}
