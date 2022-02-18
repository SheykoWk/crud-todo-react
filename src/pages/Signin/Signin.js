import { Link } from "react-router-dom";

const Signin = () => {
    return (
        <div>
            <Link to="/login">Iniciar Sesión</Link> <br />
            <Link to="/signin">Registrarme</Link>
            <br/>

            <button>Aceptar</button>
        </div>
    );
};

export default Signin;
