import {Request, Response} from 'express'
import Article from '../models/Article'
import slugify from 'slugify'

class ArticlesController{
    async create(req: Request, res: Response){
        const {title, body, categoryId} = req.body
        const article = await Article.create({
            title,
            slug: slugify(title, {lower: true}),
            body: body,
            categoryId: categoryId
        })
        return res.status(201).json(article)
    }

    async findAll(req: Request, res: Response){
        const categories = await Article.findAll()
        return res.json(categories)
    }

    async findOne(req: Request, res: Response){
        const id = parseInt(req.params.id)
        const article = await Article.findOne({
            where: {
                id: id
            }
        })
        return article ? res.status(200).json(article) : res.sendStatus(404)
    }

    async update(req: Request, res: Response){
        const id = parseInt(req.params.id)
        const {title, body, categoryId} = req.body 
        await Article.update({
            title,
            slug: slugify(title, {lower: true}),
            body,
            categoryId
        }, {where: {
            id: id
        }})
        return res.status(204).end()
    }

    async destroy(req: Request, res: Response){
        const id = parseInt(req.params.id)
        await Article.destroy({
            where: {
                id: id
            }
        })
        return res.status(204).end()
    }
}

export default new ArticlesController()