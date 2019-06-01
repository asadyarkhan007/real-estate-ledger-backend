import { Router } from 'express';
import swaggerSpec from './utils/swagger';
import userRoutes from './routes/userRoutes';
import propertyTypeRoutes from './routes/propertyTypeRoutes';
import propertyKindRoutes from './routes/propertyKindRoutes';
import propertyRoutes from './routes/propertyRoutes';
import propertyRateRoutes from './routes/propertyRateRoutes';
import addressRoutes from './routes/addressRoutes';
import sectorRoutes from './routes/sectorRoutes';
import buildingRoutes from './routes/buildingRoutes';
import plotRoutes from './routes/plotRoutes';
import apartmentRoutes from './routes/apartmentRoutes';
import banglowRoutes from './routes/banglowRoutes';
import managingOrgRoutes from './routes/managingOrgRoutes';

/**
 * Contains all API routes for the application.
 */
const router = Router();

/**
 * GET /api/swagger.json
 */
router.get('/swagger.json', (req, res) => {
  res.json(swaggerSpec);
});

/**
 * GET /api
 */
router.get('/', (req, res) => {
  res.json({
    app: req.app.locals.title,
    apiVersion: req.app.locals.version
  });
});

router.use('/users', userRoutes);
router.use('/property-type', propertyTypeRoutes);
router.use('/property-kind', propertyKindRoutes);
router.use('/property-rate', propertyRateRoutes);
router.use('/property', propertyRoutes);
router.use('/address', addressRoutes);
router.use('/sector', sectorRoutes);
router.use('/building', buildingRoutes);
router.use('/plot', plotRoutes);
router.use('/apartment', apartmentRoutes);
router.use('/banglow', banglowRoutes);
router.use('/managing-org', managingOrgRoutes);

export default router;
