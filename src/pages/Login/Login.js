import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = ({ onCredentialsValue }) => {
    const {
        handleSubmit,
        register,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmitLogin = (data) => {
        console.log(data)
        onCredentialsValue(data);
        reset({
            query: "",
        });
    };
    return (
        <div>
            <div>
                <div>
                    <Link to="/login">Iniciar Sesión</Link>
                    <Link to="/signin">Registrarme</Link>
                </div>
                <h2>Inicio de Sesión</h2>
                <form
                    onSubmit={handleSubmit(onSubmitLogin)}
                >
                    <label htmlFor="email">Correo Electrónico</label>
                    <input
                        id="email"
                        placeholder="Escribe tu correo electrónico"
                        type="email"
                        {...register("email", {
                            required: true,
                        })}
                    />
                    {errors?.email?.type === "required" && (
                        <p>Este campo es requerido</p>
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
            </div>
        </div>
    );
};

export default Login;
