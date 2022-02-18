import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import { useEffect, useState } from "react";
import loginUser from "./services/loginUser";


function App() {
    const [token, setToken] = useState(
        window.localStorage.getItem("token")
    );
    const [credentials, setCredentials] = useState({})
    const handleCredentials = (credentialsValue) => {
        setCredentials(credentialsValue)
    }

    const setLocalStorage = (value) => {
        try {
            setToken(value)
            window.localStorage.setItem("token", value)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        if(!token){
            console.log("no hay token")
            loginUser(credentials).then((response) => {
                console.log(response.data)
                setLocalStorage(response.data)
            }).catch((err) => {
                console.log(err)
            })
        } else {

        }
    }, [credentials, token])
    return (
        <div className="App">
            <Routes>
                <Route path="/"  element={ token ? <Home token={token} /> : <Login onCredentialsValue={handleCredentials}/>}/>
                {/* <Route path="/signin" element={ <Signin/>} /> */}
            </Routes>
        </div>
    );
}

export default App;
