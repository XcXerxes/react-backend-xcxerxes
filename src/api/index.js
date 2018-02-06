import config from '@/config'

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    const error = new Error(response.statusText)
    error.response = response
    throw error
  }
}
const parseJSON = response => {
  return response.json()
}

const parseParams = (params = {}) => {
  let options = {
    method: params.method || 'GET',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  if (params.method) {
    if (params.method === 'POST' || params.method === 'PUT') {
      options.body = JSON.stringify(params.data)   
    }
  }
  return options
}

export default {
  login (data) {
    return fetch(`${config.api}/login`, parseParams({method: 'POST', data}))
      .then(checkStatus)
      .then(parseJSON)
      .then(data)
      .catch(err => {
        Promise.reject(err)
      })
  }
}
