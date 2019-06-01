import { Router } from 'express';

import * as plotController from '../controllers/plot';

const router = Router();

/**
 * GET /api/property-type
 */
router.get('/', plotController.fetchAll);

/**
 * GET /api/property-type/:id
 */
router.get('/:id', plotController.fetchById);

/**
 * POST /api/property-type
 */
router.post('/', plotController.create);

/**
 * PUT /api/property-type/:id
 */
router.put('/:id', plotController.update);

/**
 * DELETE /api/property-type/:id
 */
router.delete('/:id', plotController.deleteUser);

export default router;
