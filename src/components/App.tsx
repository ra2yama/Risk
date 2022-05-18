import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom"
import Home from "../components/Home"
import { User } from "../providers/user";
import Login from "../components/Login"
import Signup from "../components/Signup"

const App = () => {
    const {user} = User.useContainer();

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}>
                </Route>
                <Route path="/login" element={user ? <Navigate to={"/"}/>: <Login/>}>
                </Route>
                <Route path="/signup" element={user ? <Navigate to={"/"}/>: <Signup/>}>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;