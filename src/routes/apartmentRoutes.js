import { Router } from 'express';

import * as apartmentController from '../controllers/apartment';

const router = Router();

/**
 * GET /api/property-type
 */
router.get('/', apartmentController.fetchAll);

/**
 * GET /api/property-type/:id
 */
router.get('/:id', apartmentController.fetchById);

/**
 * POST /api/property-type
 */
router.post('/', apartmentController.create);

/**
 * PUT /api/property-type/:id
 */
router.put('/:id', apartmentController.update);

/**
 * DELETE /api/property-type/:id
 */
router.delete('/:id', apartmentController.deleteUser);

export default router;
