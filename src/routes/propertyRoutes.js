import { Router } from 'express';

import * as propertyController from '../controllers/property';

const router = Router();

/**
 * GET /api/property-type
 */
router.get('/', propertyController.fetchAll);

/**
 * GET /api/property-type/:orgId
 */
router.get('/org/:orgId', propertyController.fetchByOrg);


/**
 * GET /api/property-type/:id
 */
router.get('/:id', propertyController.fetchById);

/**
 * POST /api/property-type
 */
router.post('/', propertyController.create);

/**
 * POST /api/add-property
 */
router.post('/add-property', propertyController.createProperty);

/**
 * PUT /api/update-property
 */
router.put('/update-property/:id', propertyController.updateProperty);

/**
 * PUT /api/property-type/:id
 */
router.put('/:id', propertyController.update);

/**
 * DELETE /api/property-type/:id
 */
router.delete('/:id', propertyController.deleteUser);

export default router;
