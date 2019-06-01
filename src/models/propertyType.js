import bookshelf from '../db';

const TABLE_NAME = 'property_type';

/**
 * User model.
 */
class PropertyType extends bookshelf.Model {
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

export default PropertyType;
