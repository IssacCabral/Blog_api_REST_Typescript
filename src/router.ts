import {Router} from 'express'
import CategoriesController from './controllers/CategoriesController'
import ArticlesController from './controllers/ArticlesController'
const router = Router()

// category routes
router.post('/category', CategoriesController.create)
router.get('/categories', CategoriesController.findAll)
router.get('/category/:id', CategoriesController.findOne)
router.put('/category/:id', CategoriesController.update)
router.delete('/category/:id', CategoriesController.destroy)

// article routes
router.post('/article', ArticlesController.create)
router.get('/articles', ArticlesController.findAll)
router.get('/article/:id', ArticlesController.findOne)
router.put('/article/:id', ArticlesController.update)
router.delete('/article/:id', ArticlesController.destroy)

export default router