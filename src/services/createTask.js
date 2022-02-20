import axios from "axios";

const createTask = async (data) => {
    const token = window.localStorage.getItem("token")
    const BASE_URL = "https://tasks-crud.academlo.com/api/tasks";
    const response = await axios.post(
        BASE_URL,
        {
            name: data.name,
            description: data.description,
        },
        {
            headers: {
                Authorization: "Bearer " + token,
            },
        }
    );
    return response;
};

export default createTask;
