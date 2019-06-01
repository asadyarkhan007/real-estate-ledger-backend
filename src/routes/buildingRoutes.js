import { Router } from 'express';

import * as buildingController from '../controllers/building';

const router = Router();

/**
 * GET /api/property-type
 */
router.get('/', buildingController.fetchAll);

/**
 * GET /api/property-type/:id
 */
router.get('/:id', buildingController.fetchById);

/**
 * POST /api/property-type
 */
router.post('/', buildingController.create);

/**
 * PUT /api/property-type/:id
 */
router.put('/:id', buildingController.update);

/**
 * DELETE /api/property-type/:id
 */
router.delete('/:id', buildingController.deleteUser);

export default router;
