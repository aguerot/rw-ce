import Navigo from 'navigo'

export default (intents) => {
  const navigo = new Navigo(null, true, '#')

  navigo
    .on('/', () => {
      intents.setPage('home')
      intents.start()
    })
    .on('/signin', () => {
      intents.setPage('signin')
    })
    .on('/signup', () => {
      intents.setPage('signup')
    })
    .on('/home', () => {
      intents.setPage('home')
      intents.start()
    })

  return navigo
}
