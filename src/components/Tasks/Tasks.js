import { useState } from "react";
import Select from "react-select";
import EditIcon from "../../images/EditIcon";

const Tasks = ({ title, description, status }) => {
    const options = [
        { value: "terminada", label: "Terminada" },
        { value: "pausa", label: "En pausa" },
        { value: "iniciada", label: "Iniciada" },
    ];

    const [currentStatus, setCurrentStatus] = useState(options[2]);
    

    return (
        <div>
            <div>
                <h1>{title}</h1>
                <EditIcon />
            </div>
            <hr />
            <h2>DESCRIPCIÓN</h2>
            <p>{description}</p>
            <hr />
            <Select options={options} defaultValue={currentStatus} onChange={(e) => setCurrentStatus(e) }/>
        </div>
    );
};

export default Tasks;
