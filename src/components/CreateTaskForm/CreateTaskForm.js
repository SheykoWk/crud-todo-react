import { useForm } from "react-hook-form";
import CloseIcon from "../../images/CloseIcon";
import assignStatus from "../../services/assignStatus";
import createTask from "../../services/createTask";
import "./CreateTaskForm.css";

const TaskForm = ({ token, handleSetTasks, onDisplay }) => {
    const {
        handleSubmit,
        register,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmitCreate = (data) => {
        createTask(data, token).then(async (res) => {
            handleSetTasks(res.data);
            await assignStatus(res.data.id, 1);
        });
        reset({
            query: "",
        });
    };

    return (
        <div className="form">
            <div className="form-container">
                <button
                    className="close-button"
                    onClick={() => onDisplay(false)}
                >
                    <CloseIcon />
                </button>
                <h2>Agregar Tarea</h2>
                <form onSubmit={handleSubmit(onSubmitCreate)}>
                    <label htmlFor="name">Nombre de la tarea </label>
                    <input
                        id="name"
                        placeholder="Nombre de la tarea"
                        type="text"
                        {...register("name", {
                            required: true,
                            maxLength: 50,
                        })}
                    />
                    {errors?.name?.type === "required" && (
                        <p>Este campo es requerido</p>
                    )}
                    {errors?.name?.type === "maxLength" && (
                        <p>El titulo debe tener maximo 50 caracteres.</p>
                    )}
                    <label htmlFor="description">Descripcion</label>
                    <textarea
                        id="description"
                        placeholder="Maximo 150 caracteres"
                        {...register("description", {
                            required: true,
                            maxLength: 150,
                        })}
                    />
                    {errors?.password?.type === "required" && (
                        <p>Este campo es requerido</p>
                    )}
                    {errors?.password?.type === "minLength" && (
                        <p>
                            La descripcion no puede ser mayor a 150 caracteres
                        </p>
                    )}
                    <div className="form-btn-container">
                        <button type="button" onClick={() => onDisplay(false)} className="cancel-btn">Cancelar</button>
                        <input
                            type="submit"
                            value="Aceptar"
                            className="submit-btn"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

const CreateTaskForm = ({ onDisplay, token, onNewTask, display }) => {
    return (
        <>
            {display ? (
                <TaskForm
                    token={token}
                    handleSetTasks={onNewTask}
                    onDisplay={onDisplay}
                />
            ) : null}
        </>
    );
};

export default CreateTaskForm;
