import { useEffect, useState } from "react"
import Tasks from "../../components/Tasks/Tasks"
import getTasks from "../../services/getTasks"
import CreateTaskButton from "../../components/CreateTaskButton/CreateTaskButton"
import CreateTaskForm from '../../components/CreateTaskForm/CreateTaskForm';

const Home = ({token}) => {

    const [tasksAvailable, setTasksAvailable] = useState(false)
    const [tasks, setTasks] = useState([])
    const [formDisplay, setFormDisplay] = useState(true)

    const handleDisplayForm = (value) => {
        setFormDisplay(value)
    }

    const listTask = tasks.map((task) => {
        return <Tasks title={task.name} description={task.description} key={task.id}/>
    })

    console.log("home", token)
    useEffect(() => {
        if(token){
            setTasksAvailable(true)
            getTasks(token).then((res) => {
                console.log(res.data)
                setTasks(res.data)
            }).catch(err => console.error(err))
        }
    }, [token])

    return(
        <div>
            <CreateTaskButton onDisplayForm={handleDisplayForm} />
            <CreateTaskForm onDisplay={formDisplay} token={token}/>
            {tasksAvailable ? listTask : null}
        </div>
    )
}


export default Home