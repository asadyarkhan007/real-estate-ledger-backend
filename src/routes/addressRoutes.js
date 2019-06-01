import { Router } from 'express';

import * as addressController from '../controllers/address';

const router = Router();

/**
 * GET /api/property-type
 */
router.get('/', addressController.fetchAll);

/**
 * GET /api/property-type/:id
 */
router.get('/:id', addressController.fetchById);

/**
 * POST /api/property-type
 */
router.post('/', addressController.create);

/**
 * PUT /api/property-type/:id
 */
router.put('/:id', addressController.update);

/**
 * DELETE /api/property-type/:id
 */
router.delete('/:id', addressController.deleteUser);

export default router;
