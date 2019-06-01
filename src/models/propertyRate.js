import bookshelf from '../db';
import PropertyType from './propertyType';
import PropertyKind from './propertyKind';

const TABLE_NAME = 'property_rate';

/**
 * User model.
 */
class PropertyRate extends bookshelf.Model {
  /**
   * Get table name.
   */
  get tableName() {
    return TABLE_NAME;
  }

  /**
   * Has belongsTo propertyType.
   */
  propertyType() {
    return this.belongsTo(PropertyType, 'property_type_id');
  }

  /**
   * Has belongsTo propertyKind.
   */
  propertyKind() {
    return this.belongsTo(PropertyKind, 'property_kind_id');
  }

  /**
   * Table has timestamps.
   */
  get hasTimestamps() {
    return true;
  }
}

export default PropertyRate;
