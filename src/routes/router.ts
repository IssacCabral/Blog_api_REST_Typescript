import {Router} from 'express'
import CategoriesController from '../app/controllers/CategoriesController'
import ArticlesController from '../app/controllers/ArticlesController'
const router = Router()

// category routes
router.post('/category', CategoriesController.create)
router.get('/categories', CategoriesController.findAll)
router.get('/category/:id', CategoriesController.findByPk)
router.put('/category/:id', CategoriesController.update)
router.delete('/category/:id', CategoriesController.destroy)

// article routes
router.post('/article', ArticlesController.create)
router.get('/articles', ArticlesController.findAll)
router.get('/article/:id', ArticlesController.findByPk)
router.put('/article/:id', ArticlesController.update)
router.delete('/article/:id', ArticlesController.destroy)
// pagination
router.get('/articles/page/:num', ArticlesController.pagination)

export default router