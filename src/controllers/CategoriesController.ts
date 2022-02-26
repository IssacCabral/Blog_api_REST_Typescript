import {Request, Response} from 'express'
import Category from '../models/Category'

class CategoriesController{
    async create(req: Request, res: Response){
        const {title, slug} = req.body
        const category = await Category.create({
            title,
            slug
        })
        return res.status(201).json(category)
    }

    async findAll(req: Request, res: Response){
        const categories = await Category.findAll()
        return res.json(categories)
    }

    async findOne(req: Request, res: Response){
        const id = parseInt(req.params.id)
        const category = await Category.findOne({
            where: {
                id: id
            }
        })
        return category ? res.status(200).json(category) : res.sendStatus(404)
    }

    async update(req: Request, res: Response){
        const id = parseInt(req.params.id)
        const {title, slug} = req.body 
        await Category.update({
            title,
            slug
        }, {where: {
            id: id
        }})
        return res.status(204).end()
    }

    async destroy(req: Request, res: Response){
        const id = parseInt(req.params.id)
        await Category.destroy({
            where: {
                id: id
            }
        })
        return res.status(204).end()
    }
}

export default new CategoriesController()