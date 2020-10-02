const API_BASE = 'https://conduit.productionready.io/api'

const header = {
  'Content-Type': 'application/json;charset=utf-8'
}

const getAuthHeader = (token) => {
  return {
    Authorization: `Token ${token}`
  }
}

const getEndpoint = (path) => {
  return [API_BASE, path].join('')
}

export const auth = (email, password) => {
  const data = {
    user: { email, password }
  }
  const endpoint = getEndpoint('/users/login')

  return fetch(endpoint, {
    method: 'POST',
    headers: { ...header },
    body: JSON.stringify(data)
  }).then(response => response.json())
    .then(data => {
      return {
        authenticated: true,
        authInfo: data
      }
    })
}

export const getArticles = (offset = 0, limit = 10, tag = '') => {
  var params = [
    `offset=${offset}`,
    `limit=${limit}`
  ]

  if (tag) {
    params.push(`tag=${tag}`)
  }

  const endpoint = getEndpoint(`/articles?${params.join('&')}`)

  return fetch(endpoint, {
    headers: { ...header }
  }).then(response => response.json())
}

export const getFeeds = (token, offset = 0, limit = 10) => {
  const endpoint = getEndpoint(`/articles/feed?limit=${limit}&offset=${offset}`)

  return fetch(endpoint, {
    headers: { ...header, ...getAuthHeader(token) }
  }).then(response => response.json())
}

export const getTags = () => {
  const endpoint = getEndpoint('/tags')

  return fetch(endpoint, {
    headers: { ...header }
  }).then(response => response.json())
}

export const register = (username, email, password) => {
  const endpoint = getEndpoint('/users')
  const data = {
    user: { username, email, password }
  }

  return fetch(endpoint, {
    method: 'POST',
    headers: { ...header },
    body: JSON.stringify(data)
  }).then(response => response.json())
    .then(data => {
      return {
        registered: true,
        userInfo: data
      }
    })
}
