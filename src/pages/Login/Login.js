import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import GreenWave from "../../images/GreenWave";
import BlueWave from "../../images/BlueWave"
import "./Login.css";

const Login = ({ onCredentialsValue }) => {
    const {
        handleSubmit,
        register,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmitLogin = (data) => {
        onCredentialsValue(data);
        reset({
            query: "",
        });
    };
    return (
        <div className="login">
            <GreenWave />
            <div className="login-container">
                <div className="login-button_container">
                    <Link className="login-button login-btn" to="/">Iniciar Sesión</Link>
                    <Link className="login-button register-btn" to="/">Registrarme</Link>
                </div>
                <h2 className="login-header">Inicio de Sesión</h2>
                <form onSubmit={handleSubmit(onSubmitLogin)}>
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
                    <br/>
                    <label htmlFor="password">Contraseña</label>
                    <br/>
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
                    <br/>
                    <input type="submit" value="Aceptar" className="submit-btn" />
                </form>
            </div>
            <BlueWave />
        </div>
    );
};

export default Login;
