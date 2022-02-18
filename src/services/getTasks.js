import axios from 'axios';

const BASE_URL = "https://tasks-crud.academlo.com/api/tasks"

const getTasks = async (token) => {


    const response = await axios.get(BASE_URL, {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
    return response
}

export default getTasks