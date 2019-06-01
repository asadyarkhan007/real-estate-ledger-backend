import { Router } from 'express';

import * as sectorController from '../controllers/sector';

const router = Router();

/**
 * GET /api/property-type
 */
router.get('/', sectorController.fetchAll);

/**
 * GET /api/property-type/:id
 */
router.get('/:id', sectorController.fetchById);

/**
 * POST /api/property-type
 */
router.post('/', sectorController.create);

/**
 * PUT /api/property-type/:id
 */
router.put('/:id', sectorController.update);

/**
 * DELETE /api/property-type/:id
 */
router.delete('/:id', sectorController.deleteUser);

export default router;
