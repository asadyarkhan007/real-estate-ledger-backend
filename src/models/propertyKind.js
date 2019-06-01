import bookshelf from '../db';

const TABLE_NAME = 'property_kind';

/**
 * User model.
 */
class PropertyKind extends bookshelf.Model {
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

export default PropertyKind;
