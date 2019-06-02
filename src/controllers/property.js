import HttpStatus from 'http-status-codes';

import * as propertyService from '../services/propertyService';

/**
 * Get all property.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function fetchAll(req, res, next) {
  propertyService
    .getAllProperty()
    .then(data => res.json({ data }))
    .catch(err => next(err));
}

/**
 * Get a property by its id.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function fetchById(req, res, next) {
  propertyService
    .getProperty(req.params.id)
    .then(data => res.json({ data }))
    .catch(err => next(err));
}

/**
 * Get a property by its orgId.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function fetchByOrg(req, res, next) {
  propertyService
    .getPropertiesByOrgId(req.params.orgId)
    .then(data => res.json({ data }))
    .catch(err => next(err));
}

/**
 * Create a new Property.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function create(req, res, next) {
  propertyService
    .createProperty(req.body)
    .then(data => res.status(HttpStatus.CREATED).json({ data }))
    .catch(err => next(err));
}

/**
 * Create a new Property.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function createProperty(req, res, next) {
  propertyService
    .createPropertyWithAllData(req.body)
    .then(data => res.status(HttpStatus.CREATED).json({ data }))
    .catch(err => next(err));
}

/**
 * Create a new Property.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function updateProperty(req, res, next) {
  propertyService
    .updatePropertyWithAllData(req.params.id, req.body)
    .then(data => res.status(HttpStatus.CREATED).json({ data }))
    .catch(err => next(err));
}

/**
 * Update a Property Type.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function update(req, res, next) {
  propertyService
    .updateProperty(req.params.id, req.body)
    .then(data => res.json({ data }))
    .catch(err => next(err));
}

/**
 * Delete a property type.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function deleteUser(req, res, next) {
  propertyService
    .deleteProperty(req.params.id)
    .then(data => res.status(HttpStatus.NO_CONTENT).json({ data }))
    .catch(err => next(err));
}
