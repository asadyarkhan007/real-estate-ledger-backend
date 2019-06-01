import { Router } from 'express';

import * as managingOrgController from '../controllers/managingOrg';

const router = Router();

/**
 * GET /api/property-type
 */
router.get('/', managingOrgController.fetchAll);

/**
 * GET /api/property-type/:id
 */
router.get('/:id', managingOrgController.fetchById);

/**
 * POST /api/property-type
 */
router.post('/', managingOrgController.create);

/**
 * PUT /api/property-type/:id
 */
router.put('/:id', managingOrgController.update);

/**
 * DELETE /api/property-type/:id
 */
router.delete('/:id', managingOrgController.deleteUser);

export default router;
