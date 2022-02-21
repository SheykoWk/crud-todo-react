import { useEffect, useState } from "react";
import assignStatus from '../../services/assignStatus';
import EditIcon from "../../images/EditIcon";
import "./Task.css";

const Tasks = ({ title, description, status, id , token}) => {
    const [currentStatus, setCurrentStatus] = useState({
        value: "Iniciado",
        color: "#44c8c6",
        index: 2
    });
    const statusCompare = [
        { value: "Terminado", color: "#42bb7f", index: 0},
        { value: "En pausa", color: "#fdb567", index: 1 },
        { value: "Iniciado", color: "#44c8c6", index: 2 },
    ];
    
    const handleChange = (event) => {
        setCurrentStatus(event.target.value)
        const changedStatus = statusCompare.find((status) => status.value === event.target.value)
        console.log(changedStatus)
        assignStatus(id, changedStatus.index + 1 )
    }

    
    useEffect(() => {
        const statusCompare = [
            { value: "Terminado", color: "#42bb7f", index: 0},
            { value: "En pausa", color: "#fdb567", index: 1 },
            { value: "Iniciado", color: "#44c8c6", index: 2 },
        ];
        if (status) {
            setCurrentStatus(statusCompare[status - 1]);
        }

    }, [status]);

    return (
        <div className="task-container">
            <div className="task-header">
                <h1>{title}</h1>
                <EditIcon />
            </div>
            <hr />
            <h2 className="task-description-header">DESCRIPCIÓN</h2>
            <p className="task-description">{description}</p>
            <hr className="separator-bottom" />
            <div className="select-status">
                <select
                    value={currentStatus.value}
                    onChange={handleChange}
                >
                    <option>Terminado</option>
                    <option>En pausa</option>
                    <option>Iniciado</option>
                </select>
            </div>
            <div
                className="task-status"
                style={{ backgroundColor: currentStatus.color }}
            ></div>
        </div>
    );
};

export default Tasks;
