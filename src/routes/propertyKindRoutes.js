import { Router } from 'express';

import * as propertyKindController from '../controllers/propertyKind';

const router = Router();

/**
 * GET /api/property-type
 */
router.get('/', propertyKindController.fetchAll);

/**
 * GET /api/property-type/:id
 */
router.get('/:id', propertyKindController.fetchById);

/**
 * POST /api/property-type
 */
router.post('/', propertyKindController.create);

/**
 * PUT /api/property-type/:id
 */
router.put('/:id', propertyKindController.update);

/**
 * DELETE /api/property-type/:id
 */
router.delete('/:id', propertyKindController.deleteUser);

export default router;
