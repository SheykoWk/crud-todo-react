import axios from 'axios';
const createTask = async (data) => {
    const BASE_URL = "https://tasks-crud.academlo.com/api/tasks"
    const response = await axios.post(BASE_URL, data)
    return response
}

export default createTask