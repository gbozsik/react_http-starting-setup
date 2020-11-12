import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

instance.defaults.headers.common['Authorization'] = 'AUTH_TOKEN FROM INSTANCE'

instance.interceptors.request.use(request => {
    console.log('axios instance request succes', request)
    return request
}, error => {
    console.log('axiosInstance request error', error)
    return error
})

export default instance