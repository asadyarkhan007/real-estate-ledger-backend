import { Router } from 'express';

import * as banglowController from '../controllers/banglow';

const router = Router();

/**
 * GET /api/property-type
 */
router.get('/', banglowController.fetchAll);

/**
 * GET /api/property-type/:id
 */
router.get('/:id', banglowController.fetchById);

/**
 * POST /api/property-type
 */
router.post('/', banglowController.create);

/**
 * PUT /api/property-type/:id
 */
router.put('/:id', banglowController.update);

/**
 * DELETE /api/property-type/:id
 */
router.delete('/:id', banglowController.deleteUser);

export default router;
