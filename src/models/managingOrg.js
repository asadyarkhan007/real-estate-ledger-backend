import bookshelf from '../db';

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
   * Table has timestamps.
   */
  get hasTimestamps() {
    return true;
  }
}

export default ManagingOrg;
