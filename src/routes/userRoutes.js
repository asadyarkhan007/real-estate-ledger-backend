import { Router } from 'express';

import UserController from '../controllers/user';
import { findUser, userValidator } from '../validators/userValidator';

const router = Router();

/**
 * GET /api/users
 */
router.get('/', UserController.fetchAll);

/**
 * GET /api/users/:id
 */
router.get('/:id', UserController.fetchById);

/**
 * POST /api/users
 */
router.post('/', userValidator, UserController.create);

router.post('/createCustomer', userValidator, UserController.createCustomer);

router.post('/createRegistrar', userValidator, UserController.createRegistrar);
/**
 * POST /api/users/login
 */
router.post('/login', UserController.fetchByEmail);

router.post('/loginUsingUserType', UserController.fetchByEmailAndUserType);

router.post('/loginUsingUserTypeAndOrgId', UserController.fetchByEmailAndUserTypeAndOrgId);

router.post('/loginByUsername', UserController.fetchByUsername);

router.post('/loginByUsernameUsingUserType', UserController.fetchByUsernameAndUserType);

router.post('/loginByUsernameUsingUserTypeAndOrgId', UserController.fetchByUsernameAndUserTypeAndOrgId);

/**
 * PUT /api/users/:id
 */
router.put('/:id', findUser, UserController.update);

/**
 * DELETE /api/users/:id
 */
router.delete('/:id', findUser, UserController.deleteUser);

export default router;
