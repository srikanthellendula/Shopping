import { useState } from "react"
import './index.css'

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onUserName = (event) =>{
        setUsername(event.target.value)


    }

    const onPassword = (event) => {
        setPassword(event.target.value)
    }

    const onLogin = async() =>{
        if (username !=='' && password !==''){
           
            try{
                const response = await fetch('https://fakestoreapi.com/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                      },
                    body: JSON.stringify({username, password})
                })
                
                if (response.ok){

                    const data = await response.json()
                    localStorage.setItem('token', data.token)

                }
                else {
                    console.log('Login failed')
                }

                
            }
            
            catch(error){
                console.log(error)
            }
           
            setUsername('')
            setPassword('')

        }
        
    }
    return(
    <div className="login-bg">
        <label htmlFor="username"> User Name </label>
        <input id='username' type='text' onChange={onUserName} value={username}/>
        <label htmlFor="password"> Password </label>
        <input id='password' type='password' onChange={onPassword} value={password}/>
        <button onClick={onLogin}> Login </button>

    </div>)
}

export default Login