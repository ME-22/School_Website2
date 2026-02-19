import axios from 'axios';

const baseUrl = '/api/cart'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const add = (newDevice) => {
    const request = axios.post(baseUrl, newDevice)
    return request.then(response => response.data)
}

const update = (user_id, productUpdate) => {
    console.log(productUpdate)
    const request = axios.put(`${baseUrl}/${user_id}`, productUpdate)
    return request.then(response => response.data)
}

const remove = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

export default {
    getAll: getAll,
    add: add,
    update: update,
    remove: remove,
}