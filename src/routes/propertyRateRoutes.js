import { Router } from 'express';

import * as propertyRateController from '../controllers/propertyRate';

const router = Router();

/**
 * GET /api/property-type
 */
router.get('/', propertyRateController.fetchAll);

/**
 * GET /api/property-type/:id
 */
router.get('/:id', propertyRateController.fetchById);

/**
 * POST /api/property-type
 */
router.post('/', propertyRateController.create);

/**
 * PUT /api/property-type/:id
 */
router.put('/:id', propertyRateController.update);

/**
 * DELETE /api/property-type/:id
 */
router.delete('/:id', propertyRateController.deleteUser);

export default router;
