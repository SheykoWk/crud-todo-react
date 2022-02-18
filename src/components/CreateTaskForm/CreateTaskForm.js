import { useForm } from "react-hook-form";
import createTask from "../../services/createTask";

const TaskForm = () => {
    const {
        handleSubmit,
        register,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmitCreate = (data) => {
        console.log(data);
        createTask(data).then((res) => {
            console.log(res);
        });
        reset({
            query: "",
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmitCreate)}>
            <label htmlFor="name">Nombre de la tarea </label>
            <input
                id="name"
                placeholder="Escribe tu correo electrónico"
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
            <label htmlFor="password">Contraseña</label>
            <input
                id="password"
                placeholder="Al menos 8 caracteres"
                type="password"
                {...register("password", {
                    required: true,
                    minLength: 6,
                })}
            />
            {errors?.password?.type === "required" && (
                <p>Este campo es requerido</p>
            )}
            {errors?.password?.type === "minLength" && (
                <p>La contraseña debe tener al menos 8 caracteres</p>
            )}
            <input type="submit" value="Aceptar" />
        </form>
    );
};

const CreateTaskForm = ({ onDisplay }) => {
    return <>{onDisplay ? <TaskForm /> : null}</>;
};

export default CreateTaskForm;
