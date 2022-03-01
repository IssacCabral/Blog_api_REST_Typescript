import {Request, Response} from 'express'
import Article from '../models/Article'
import ArticleService from '../services/ArticleService'
import slugify from 'slugify'

class ArticlesController{
    async create(req: Request, res: Response){
        const {title, body, categoryId} = req.body
        const article = await ArticleService.create({
            title,
            slug: slugify(title, {lower: true}),
            body,
            categoryId
        })
        return article["error"] ? res.status(400).json(article.error) : res.status(200).json(article.data)
    }

    async findAll(req: Request, res: Response){
        const categories = await Article.findAll()
        return res.json(categories)
    }

    async findByPk(req: Request, res: Response){
        const id = parseInt(req.params.id)
        const article = await ArticleService.getArticleById(id)

        return article["error"] ? res.status(404).json(article) : res.status(200).json(article.data)
    }

    async update(req: Request, res: Response){
        const id = parseInt(req.params.id)
        const {title, body, categoryId} = req.body 
        const data = await ArticleService.update(id, {
            title, 
            slug: slugify(title, {lower: true}), 
            body, 
            categoryId
        })

        return data["error"] ? res.status(400).json(data.error) : res.status(200).json(data.data)
    }

    async destroy(req: Request, res: Response){
        const id = parseInt(req.params.id)
        const data = await ArticleService.destroy(id)
        return data["error"] ? res.status(404).json(data) : res.status(200).json(data.data)
    }
}

export default new ArticlesController()