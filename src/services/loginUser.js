import axios from 'axios';

const BASE_URL = "https://tasks-crud.academlo.com/api/auth/login"

const loginUser = async (credentials) => {
    const response = await axios.post(BASE_URL, {
        email: credentials.email,
        password: credentials.password
    })
    return response
}

export default loginUser