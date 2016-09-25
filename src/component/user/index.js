import createUsersComponent from './User'
import loaderTemplate from 'core/templates/loader.handlebars'
import UserModel from 'models/user'
import usersTemplate from './templates/users.handlebars'

export default createUsersComponent({
  loaderTemplate,
  UserModel,
  usersTemplate
})