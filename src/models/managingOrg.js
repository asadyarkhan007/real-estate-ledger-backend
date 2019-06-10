import bookshelf from '../db';
import Address from './address';

const TABLE_NAME = 'managing_org';

/**
 * User model.
 */
class ManagingOrg extends bookshelf.Model {
  /**
   * Get table name.
   */
  get tableName() {
    return TABLE_NAME;
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

export default ManagingOrg;
