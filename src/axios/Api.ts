import axios from 'axios'

const baseURL = 'https://my-json-server.typicode.com/Alexey404/bdJSON'

export const getListPosts = async (id: number | null) => {
  const url = baseURL + '/posts'
  const reqest = await axios(url, {
    method: 'get',
    params: { authorId: id },
  })
  return reqest.data
}

export const getComments = async (id: number) => {
  const url = baseURL + '/comments'
  const reqest = await axios(url, {
    method: 'get',
    params: { idPost: id },
  })
  return reqest.data
}

export const getProfile = async (id: number) => {
  const url = baseURL + '/profile/' + id
  const reqest = await axios(url, {
    method: 'get',
  })
  return reqest.data
}