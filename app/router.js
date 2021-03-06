import Navigo from 'navigo'

import { pages } from './constants'

export default (intents) => {
  const navigo = new Navigo(null, true, '#')

  navigo
    .on('/', () => {
      intents.setPage(pages.HOME)
    })
    .on('/signin', () => {
      intents.setPage(pages.SIGNIN)
    })
    .on('/signup', () => {
      intents.setPage(pages.SIGNUP)
    })
    .on('/home', () => {
      intents.setPage(pages.HOME)
    })
    .on('/editor', () => {
      intents.setPage(pages.EDITOR)
    })
    .on('/editor/:slug', (params) => {
      const slug = params.slug
      intents.setPage(pages.EDITOR, { editedSlug: slug })
    })
    .on('/article/:slug', (params) => {
      const slug = params.slug
      intents.setPage(pages.ARTICLE, { slug })
    })
    .on('/settings', () => {
      intents.setPage(pages.SETTINGS)
    })
    .on('/@:username', (params) => {
      const username = params.username
      intents.setPage(pages.PROFILE, { profileName: username })
    })

    .on('/@:username/favorites', (params) => {
      const username = params.username
      intents.setPage(pages.PROFILE, { profileName: username, favorites: true })
    })

  return navigo
}
