import Property from '../models/property';
import * as addressService from '../services/addressService';
import * as plotService from '../services/plotService';
import * as buildingService from '../services/buildingService';
import * as apartmentService from '../services/apartmentService';
import * as banglowService from '../services/banglowService';
import { logger } from 'handlebars';
import { PROPERTY_TYPE } from '../constants/appConstants';

/**
 * Get all properties.
 *
 * @returns {Promise}
 */
export function getAllProperty() {
  return Property.fetchAll({
    withRelated: [
      'plot',
      'plot.address',
      'propertyType',
      'propertyKind',
      'managingOrg',
      'building',
      'apartment',
      'banglow'
    ]
  });
}

/**
 * Get a property.
 *
 * @param   {Number|String}  id
 * @returns {Promise}
 */
export async function getProperty(id) {
  const property = await new Property({ id }).fetch({
    withRelated: [
      'plot',
      'plot.address',
      'propertyType',
      'propertyKind',
      'managingOrg',
      'building',
      'apartment',
      'banglow'
    ]
  });

  if (property) {
    return property;
  }
}

/**
 * Create new property.
 *
 * @param   {Object}  data
 * @returns {Promise}
 */
export function createProperty(data) {
  return new Property({
    property_type_id: data.property_type_id,
    property_kind_id: data.property_kind_id,
    plot_id: data.plot_id,
    banglow_id: data.banglow_id,
    building_id: data.building_id,
    apartment_id: data.apartment_id,
    managing_org_id: data.managing_org_id,
    name: data.name
  }).save();
}

/**
 * Create new property.
 *
 * @param   {Object}  data
 * @returns {Promise}
 */
export async function createPropertyWithAllData(data) {
  const propertyTypeId = parseInt(data.property_type_id);

  try {
    if (propertyTypeId === PROPERTY_TYPE.PLOT) {
      const address = await addressService.createAddress(data.address);

      const plot = await plotService.createPlot({
        address_id: address.get('id'),
        sector_id: data.sector_id,
        area_in_sq_yards: data.area_in_sq_yards
      });

      return new Property({
        property_type_id: data.property_type_id,
        property_kind_id: data.property_kind_id,
        plot_id: plot.get('id'),
        name: data.plot_no,
        managing_org_id: data.managing_org_id
      }).save();
    }

    if (propertyTypeId === PROPERTY_TYPE.BUILDING) {
      const building = await buildingService.createBuilding({
        ...data.building
      });

      return new Property({
        property_type_id: data.property_type_id,
        property_kind_id: data.property_kind_id,
        building_id: building.get('id'),
        plot_id: building.get('plot_id'),
        name: building.get('name'),
        managing_org_id: data.managing_org_id
      }).save();
    }

    if (propertyTypeId === PROPERTY_TYPE.APARTMENT) {
      const apartment = await apartmentService.createApartment({
        ...data.apartment
      });

      const building = await buildingService.getBuilding(apartment.get('building_id'));

      return new Property({
        property_type_id: data.property_type_id,
        property_kind_id: data.property_kind_id,
        building_id: apartment.get('building_id'),
        apartment_id: apartment.get('id'),
        plot_id: building.get('plot_id'),
        name: apartment.get('name'),
        managing_org_id: data.managing_org_id
      }).save();
    }

    if (propertyTypeId === PROPERTY_TYPE.BANGLOW) {
      const banglow = await banglowService.createBanglow({
        ...data.banglow
      });

      return new Property({
        property_type_id: data.property_type_id,
        property_kind_id: data.property_kind_id,
        plot_id: banglow.get('plot_id'),
        banglow_id: banglow.get('id'),
        name: banglow.get('name'),
        managing_org_id: data.managing_org_id
      }).save();
    }
  } catch (err) {
    logger(err);
  }
}

/**
 * Update a property.
 *
 * @param   {Number|String}  id
 * @param   {Object}         data
 * @returns {Promise}
 */
export async function updatePropertyWithAllData(id, data) {
  const propertyTypeId = parseInt(data.property_type_id);

  try {
    if (propertyTypeId === PROPERTY_TYPE.PLOT) {
      await addressService.updateAddress(data.address.id, data.address);

      const plot = await plotService.updatePlot(data.plot_id, {
        address_id: data.address.id,
        sector_id: data.sector_id,
        area_in_sq_yards: data.area_in_sq_yards
      });

      return new Property({
        property_type_id: data.property_type_id,
        property_kind_id: data.property_kind_id,
        plot_id: plot.get('id'),
        managing_org_id: data.managing_org_id
      }).save();
    }

    if (propertyTypeId === PROPERTY_TYPE.BUILDING) {
      const building = await buildingService.updateBuilding(data.building.id, {
        ...data.building
      });

      return new Property({
        property_type_id: data.property_type_id,
        property_kind_id: data.property_kind_id,
        building_id: building.get('id'),
        plot_id: building.get('plot_id'),
        managing_org_id: data.managing_org_id
      }).save();
    }

    if (propertyTypeId === PROPERTY_TYPE.APARTMENT) {
      const apartment = await apartmentService.updateApartment(data.apartment.id, {
        ...data.apartment
      });

      const building = await buildingService.getBuilding(apartment.get('building_id'));

      return new Property({
        property_type_id: data.property_type_id,
        property_kind_id: data.property_kind_id,
        building_id: apartment.get('building_id'),
        plot_id: building.get('plot_id'),
        managing_org_id: data.managing_org_id
      }).save();
    }

    if (propertyTypeId === PROPERTY_TYPE.BANGLOW) {
      const banglow = await banglowService.updateBanglow(data.banglow.id, {
        ...data.banglow
      });

      return new Property({
        property_type_id: data.property_type_id,
        property_kind_id: data.property_kind_id,
        plot_id: banglow.get('plot_id'),
        managing_org_id: data.managing_org_id
      }).save();
    }
  } catch (err) {
    logger(err);
  }
}

/**
 * Update a property.
 *
 * @param   {Number|String}  id
 * @param   {Object}         data
 * @returns {Promise}
 */
export function updateProperty(id, data) {
  return new Property({ id }).save({
    property_type_id: data.property_type_id,
    property_kind_id: data.property_kind_id,
    plot_id: data.plot_id,
    banglow_id: data.banglow_id,
    building_id: data.building_id,
    apartment_id: data.apartment_id,
    managing_org_id: data.managing_org_id,
    name: data.name
  });
}

/**
 * Delete a property.
 *
 * @param   {Number|String}  id
 * @returns {Promise}
 */
export function deleteProperty(id) {
  return new Property({ id }).fetch().then(property => property.destroy());
}
