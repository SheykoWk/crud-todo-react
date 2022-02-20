import { useEffect, useState } from "react";
import Tasks from "../../components/Tasks/Tasks";
import getTasks from "../../services/getTasks";
import CreateTaskForm from "../../components/CreateTaskForm/CreateTaskForm";
import "./Home.css";
import UserIcon from "../../images/UserIcon";
import SearchIcon from "../../images/SearchIcon";
import PlusIcon from "../../images/PlusIcon";

const Home = ({ token }) => {
    const [tasksAvailable, setTasksAvailable] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [formDisplay, setFormDisplay] = useState(true);

    const handleSetTasks = (data) => {
        setTasks([...tasks, data])
    }

    const listTask = tasks.map((task) => {
        return (
            <Tasks
                title={task.name}
                description={task.description}
                status={task.status_id}
                key={task.id}
                id={task.id}
                token={token}
            />
        );
    });

    useEffect(() => {
        if (token) {
            setTasksAvailable(true);
            getTasks(token)
                .then((res) => {
                    setTasks(res.data);
                })
                .catch((err) => console.error(err));
        }
    }, [token]);

    return (
        <div>
            <div className="header">
                <UserIcon />
                <div className="header-container">
                    <div className="header-title">
                        <h1>Tareas</h1>
                    </div>
                    <div className="header-buttons">
                        <div className="search-box">
                            <SearchIcon />
                            <input type="text" placeholder="Buscar tarea" />
                        </div>
                        <button
                            onClick={() => setFormDisplay(!formDisplay)}
                            className="newtask-btn"
                        >
                            <PlusIcon />
                            Crear nueva tarea
                        </button>
                    </div>
                </div>
            </div>
            <CreateTaskForm onDisplay={formDisplay} token={token} onNewTask={handleSetTasks} />
            <div className="tasks-container">
                {tasksAvailable ? listTask : null}
            </div>
        </div>
    );
};

export default Home;
