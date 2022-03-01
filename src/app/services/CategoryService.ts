import Category from '../models/Category'
import { ICategoryDTO } from './DTO/CreateCategoryDTO'
import slugify from 'slugify'

class CategoryService{
    async create({title, slug}: ICategoryDTO){
        const categoryTitleExists = await Category.findOne({where: {title: title}})

        if(categoryTitleExists){
            return {error: 'Categoria já existente'}
        }
        const category = await Category.create({title, slug}) 
        return {data: category}
    }

    async getCategoryByPk(id: number){
        const categorySearch = await Category.findByPk(id)
        if(categorySearch === null){
            return {error: 'Categoria não encontrada'}
        }
        //const category = categorySearch.toJSON()
        return {data: categorySearch}
    }

    async update(id: number, {title, slug} : ICategoryDTO){
        const categorySearch = await Category.findByPk(id)

        if(categorySearch === null){
            return {error: "Categoria não encontrada"}
        }
        await Category.update({title,slug}, {where: {id}})
        return {data: "Categoria Atualizada com sucesso!"}
    }

    async destroy(id: number){
        const categorySearch = await Category.findByPk(id)

        if(categorySearch === null){
            return {error: "Categoria não encontrada"}
        }
        await Category.destroy({where: {id}})
        return {data: "Categoria removida!"}
    }
}

export default new CategoryService()