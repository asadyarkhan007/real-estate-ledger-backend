import bookshelf from '../db';
import Plot from './plot';
import PropertyType from './propertyType';
import PropertyKind from './propertyKind';
import Banglow from './banglow';
import Building from './building';
import Apartment from './apartment';
import ManagingOrg from './managingOrg';

const TABLE_NAME = 'property';

/**
 * User model.
 */
class Property extends bookshelf.Model {
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
   * Has belongsTo banglow.
   */
  banglow() {
    return this.belongsTo(Banglow, 'banglow_id');
  }

  /**
   * Has belongsTo building.
   */
  building() {
    return this.belongsTo(Building, 'building_id');
  }

  /**
   * Has belongsTo apartment.
   */
  apartment() {
    return this.belongsTo(Apartment, 'apartment_id');
  }

  /**
   * Has belongsTo managingOrg.
   */
  managingOrg() {
    return this.belongsTo(ManagingOrg, 'managing_org_id');
  }

  /**
   * Table has timestamps.
   */
  get hasTimestamps() {
    return true;
  }
}

export default Property;
