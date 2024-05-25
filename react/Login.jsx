import Parse from 'parse';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const login = async (evt) => {
        evt.preventDefault();
        const {username, password} = evt.target;
        if(!username.value || !password.value || username.value.trim() === "" || password.value.trim() === "") {
            alert("Missing username or password")
            return
        }
        try{
            await Parse.User.logIn(username.value, password.value)
            navigate("/main")
        }catch(e) {
            alert(e.message)
        }
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