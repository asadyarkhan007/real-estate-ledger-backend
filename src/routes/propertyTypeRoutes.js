import { Router } from 'express';

import * as propertyTypeController from '../controllers/propertyType';

const router = Router();

/**
 * GET /api/property-type
 */
router.get('/', propertyTypeController.fetchAll);

/**
 * GET /api/property-type/:id
 */
router.get('/:id', propertyTypeController.fetchById);

/**
 * POST /api/property-type
 */
router.post('/', propertyTypeController.create);

/**
 * PUT /api/property-type/:id
 */
router.put('/:id', propertyTypeController.update);

/**
 * DELETE /api/property-type/:id
 */
router.delete('/:id', propertyTypeController.deleteUser);

export default router;
