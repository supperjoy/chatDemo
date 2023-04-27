import axios from 'axios'

const requests = axios.create({
    timeout: 5000,
    proxy:{
        host: 'http://42.193.6.69',
        port: 8081,
    }
})

requests.interceptors.request.use((config)=>{
    return config;
})

requests.interceptors.response.use((res)=>{
    return res.data
}),(error)=>{
    return Promise.reject(new Error(error.message))
}

export default requests;