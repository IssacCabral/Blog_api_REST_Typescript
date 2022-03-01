import {Request, response, Response} from 'express'
import Category from '../models/Category'
import slugify from 'slugify'
import CategoryService from '../services/CategoryService' 

class CategoriesController{
    async create(req: Request, res: Response){
        const {title} = req.body
        const category = await CategoryService.create({
            title,
            slug: slugify(title, {lower: true})
        })
        return category["error"] ? res.status(404).json(category) : res.status(201).json(category.data)
    }

    async findAll(req: Request, res: Response){
        const categories = await Category.findAll()
        return res.json(categories)
    }

    async findByPk(req: Request, res: Response){
        const id = parseInt(req.params.id)
        const data = await CategoryService.getCategoryByPk(id)
        return data["error"] ? res.status(404).json(data) : res.status(200).json(data.data)
    }

    async update(req: Request, res: Response){
        const id = parseInt(req.params.id)
        const {title} = req.body 
        const data = await CategoryService.update(id, {
            title, 
            slug: slugify(title, {lower: true})
        })

        return data["error"] ? res.status(404).json(data) : res.status(200).json(data.data)
    }

    async destroy(req: Request, res: Response){
        const id = parseInt(req.params.id)
        const data = await CategoryService.destroy(id)
        return data["error"] ? res.status(404).json(data) : res.status(200).json(data.data)
    }
}

export default new CategoriesController()