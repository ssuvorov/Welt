import createNewsComponent from './News'
import loaderTemplate from 'core/templates/loader.handlebars'
import NewsModel from 'models/news'
import UserModel from 'models/user'
import newsTemplate from './templates/news.handlebars'

export default createNewsComponent({ loaderTemplate, NewsModel, UserModel, newsTemplate })