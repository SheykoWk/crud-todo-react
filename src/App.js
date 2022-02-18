import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signin from "./pages/Signin/Signin";
import { useEffect, useState } from "react";
import loginUser from "./services/loginUser";


function App() {
    const [token, setToken] = useState(
        window.localStorage.getItem("token")
    );
    const [credentials, setCredentials] = useState({})
    const [isUser, setIsUser] = useState(false)
    const handleCredemtials = (credentialsValue) => {
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
        if(credentials){
            setIsUser(true)
            loginUser(credentials).then((response) => {
                console.log(response.data)
                setLocalStorage(response.data)
            }).catch((err) => {
                console.log(err)
            })
        }
    }, [credentials])
    return (
        <div className="App">
            {token}
            <Routes>
                <Route path="/"  element={ <Home token={token} />}/>
                <Route path="/login" element={ <Login onCredentialsValue={handleCredemtials}/>} />
                <Route path="/signin" element={ <Signin/>} />
            </Routes>
        </div>
    );
}

export default App;
