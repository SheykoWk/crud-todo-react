import { useForm } from "react-hook-form";
import assignStatus from "../../services/assignStatus";
import createTask from "../../services/createTask";

const TaskForm = ({ token, handleSetTasks }) => {
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
        <div>
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
                <input
                    id="description"
                    placeholder="Maximo 150 caracteres"
                    type="text"
                    {...register("description", {
                        required: true,
                        maxLength: 150,
                    })}
                />
                {errors?.password?.type === "required" && (
                    <p>Este campo es requerido</p>
                )}
                {errors?.password?.type === "minLength" && (
                    <p>La descripcion no puede ser mayor a 150 caracteres</p>
                )}
                <input type="submit" value="Aceptar" />
            </form>
        </div>
    );
};

const CreateTaskForm = ({ onDisplay, token, onNewTask }) => {
    return (
        <>
            {onDisplay ? (
                <TaskForm token={token} handleSetTasks={onNewTask} />
            ) : null}
        </>
    );
};

export default CreateTaskForm;
