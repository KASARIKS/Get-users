// Request senders

import axios from 'axios'

// Base form of server request
const instance = axios.create({
    baseURL: `https://jsonplaceholder.typicode.com/`,
    withCredentials: true,
})

export const usersAPI = {
    getUsers() {
        return instance.get(`/users`)
            .then(response => response.data)
    }
}