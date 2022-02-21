import axios from "axios"

const assignStatus = async( taskId, status) => {
    const token = window.localStorage.getItem("token")
    const BASE_URL = `https://tasks-crud.academlo.com/api/tasks/${taskId}/status/${status}`
    const response = await axios.post(BASE_URL,{
        
    }, {
        headers: {
            Authorization: "Bearer " + token,
        },
    })
    return response
}

export default assignStatus