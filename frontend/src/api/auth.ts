import axios from 'axios'

export const LoginRequest =  async (email:string, password:string) => {
    return axios.post("http://localhost:5173/login",{
        email, password
    })
}