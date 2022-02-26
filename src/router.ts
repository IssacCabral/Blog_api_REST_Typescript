import {Router} from 'express'
import CategoriesController from './controllers/CategoriesController'
const router = Router()

// Categories routes
router.post('/category', CategoriesController.create)
router.get('/categories', CategoriesController.findAll)
router.get('/category/:id', CategoriesController.findOne)
router.put('/category/:id', CategoriesController.update)
router.delete('/category/:id', CategoriesController.destroy)

export default router