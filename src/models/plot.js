import bookshelf from '../db';
import Address from './address';
import Sector from './sectorBlock';

const TABLE_NAME = 'plot';

/**
 * User model.
 */
class Plot extends bookshelf.Model {
  /**
   * Get table name.
   */
  get tableName() {
    return TABLE_NAME;
  }

  /**
   * Has belongsTo sector.
   */
  sector() {
    return this.belongsTo(Sector, 'sector_id');
  }

  /**
   * Has belongsTo address.
   */
  address() {
    return this.belongsTo(Address, 'address_id');
  }

  /**
   * Table has timestamps.
   */
  get hasTimestamps() {
    return true;
  }
}

export default Plot;
