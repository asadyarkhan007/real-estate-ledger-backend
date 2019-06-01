import bookshelf from '../db';
import Plot from './plot';

const TABLE_NAME = 'building';

/**
 * User model.
 */
class Building extends bookshelf.Model {
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
   * Table has timestamps.
   */
  get hasTimestamps() {
    return true;
  }
}

export default Building;
