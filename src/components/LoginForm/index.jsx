import { useState } from "react";
import axios from "axios";
import { setAccessToken } from "../../features/userSlice";
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom";
import { setUser } from "../../features/userSlice.js";
function LoginForm(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e){
        e.preventDefault()
        const data = {
            username,
            password,
        }
       const response = await axios.post("http://localhost:3001/api/login", data)
       console.log(response.data);
       dispatch(setAccessToken(response.data.ACCESS_TOKEN));
       dispatch(setUser(response.data.user))
       navigate("/todo")
    }

    return (
    <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" autoComplete="off"
                value={username}
                onChange={(e)=>{
                    setUsername(e.target.value)
                }}
            />
            <label htmlFor="password">Password</label>
            <input type="password"  id="password" 
                value={password}
                onChange={(e)=>{
                setPassword(e.target.value)
                }}
            />
            <button type="submit">Login</button>
        </form>
    </div>
    )
}
export default LoginForm;