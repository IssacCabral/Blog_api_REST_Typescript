import Sequelize from 'sequelize'
import connection from '../config/db_connection'
import Category from './Category'

const Article = connection.define('articles', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      slug: {
        type: Sequelize.STRING,
        allowNull: false
      },
      body: {
          type: Sequelize.TEXT,
          allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()'),
        field: 'createdAt'
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()'),
        field: 'updatedAt'
      }
})

// 1 artigo pertence a uma categoria 1 x 1 --> belongsTo()
Article.belongsTo(Category, {foreignKey: 'categoryId'})  // Adds categoryId to Article
// 1 categoria possui vários artigos 1 x n --> hasMany()
Category.hasMany(Article, {foreignKey: 'categoryId'}) 

export default Article