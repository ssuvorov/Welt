import createAppComponent from './App'
import Users from 'component/user'
import News from 'component/news'
import Router from 'core/router'

export default createAppComponent({
  Users, News, Router
})