import bookshelf from '../db';
import Plot from './plot';
import Building from './building';

const TABLE_NAME = 'apartment';

/**
 * User model.
 */
class Apartment extends bookshelf.Model {
  /**
   * Get table name.
   */
  get tableName() {
    return TABLE_NAME;
  }

  /**
   * Has belongsTo plot.
   */
  plot() {
    return this.belongsTo(Plot, 'plot_id');
  }

  /**
   * Has belongsTo building.
   */
  building() {
    return this.belongsTo(Building, 'building_id');
  }

  /**
   * Table has timestamps.
   */
  get hasTimestamps() {
    return true;
  }
}

export default Apartment;
