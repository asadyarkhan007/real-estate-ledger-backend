import bookshelf from '../db';
import ManagingOrg from './managingOrg';

const TABLE_NAME = 'user';

/**
 * User model.
 */
class User extends bookshelf.Model {
  /**
   * Get table name.
   */
  get tableName() {
    return TABLE_NAME;
  }

  /**
   * Has belongsTo managingOrg.
   */
  managingOrg() {
    return this.belongsTo(ManagingOrg, 'managing_org');
  }

  /**
   * Table has timestamps.
   */
  get hasTimestamps() {
    return true;
  }
}

export default User;
