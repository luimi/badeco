import Parse from 'parse';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Login = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if(Parse.User.current()) goToMain()
    }, [])
    const login = async (evt) => {
        evt.preventDefault();
        const {username, password} = evt.target;
        if(!username.value || !password.value || username.value.trim() === "" || password.value.trim() === "") {
            alert("Missing username or password")
            return
        }
        try{
            await Parse.User.logIn(username.value, password.value)
            goToMain()
        }catch(e) {
            alert(e.message)
        }
    }
    const goToMain = () => {
        navigate("/main")
    }
    return <div>
        <form onSubmit={login}>
            <input type="text" placeholder="User" name="username" />
            <input type="password" placeholder="Password" name="password" />
            <button type="submit">Login</button>
        </form>
    </div>
}

export default Login;