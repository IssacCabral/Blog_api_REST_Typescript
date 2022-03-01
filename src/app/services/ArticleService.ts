import Article from '../models/Article'
import Category from '../models/Category'
import { IArticleDTO } from './DTO/CreateArticleDTO'

class ArticleService{
    async create({title, slug, body, categoryId}: IArticleDTO){
        const articleTitleExists = await Article.findOne({where: {title}})
        const categoryIdExists = await Category.findByPk(categoryId)

        let error = []
        articleTitleExists !== null ? error.push({error: "Já existe um artigo com esse nome!"}) : ""
        !categoryIdExists ? error.push({error: "Id de categoria inválido"}) : ""

        if(error.length > 0) return {error}

        const article = await Article.create({title, slug, body, categoryId})
        return {data: article}
    }

    async getArticleById(id: number){
        const articleSearch = await Article.findByPk(id)
        
        if(articleSearch === null){
            return {error: "Artigo não encontrado"}
        }
        return {data: articleSearch}
    }

    async update(id: number, {title, slug, body, categoryId}: IArticleDTO){
        const articleIdExists = await Article.findByPk(id)
        const categoryIdExists = await Category.findByPk(categoryId)
        const articleTitleExists = await Article.findOne({where: {title}})

        let error = []

        !articleIdExists ? error.push({error: "Artigo não encontrado"}) : ""
        !categoryIdExists ? error.push({error: "Categoria não encontrada"}) : ""
        articleTitleExists !== null ? error.push({error: "Já existe um artigo com esse nome!"}) : ""

        if(error.length > 0) return {error}

        await Article.update({title,slug,body,categoryId}, {where: {id}})
        return {data: "Artigo atualizado com sucesso!"}
    }

    async destroy(id: number){
        const articleSearch = await Article.findByPk(id)
        if(articleSearch === null){
            return {error: "Artigo não encontrado"}
        }
        await Article.destroy({where: {id}})
        return {data: "Artigo removido"}
    }

    async findAndCountAll(pageNum: number){

    }
}

export default new ArticleService()