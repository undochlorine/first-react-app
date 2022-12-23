import React from "react";
import style from './Login.module.css'
import {NavLink} from "react-router-dom";
import hidden from '../../../assets/images/hidden.png'
import showed from '../../../assets/images/showed.png'

const Login = (props) => {

    const password = React.createRef();
    const username = React.createRef();
    const togglePasswordBtn = React.createRef();

    function togglePassword() {
        if(password.current.type === 'password') {
            password.current.type = 'text'
            togglePasswordBtn.current.src = hidden
        } else if(password.current.type === 'text') {
            password.current.type = 'password'
            togglePasswordBtn.current.src = showed
        }
    }

    function login() {
        const credentials = {
            username: username.current.value,
            password: password.current.value
        }
        if(
            credentials.password !== ''
            && credentials.password.length >= 8
            && credentials.password.length <= 22
            && credentials.username !== ''
            && credentials.username.length >= 4
            && credentials.username.length <= 48
        ) {
            props.submit(credentials)
        } else {
            alert('invalid password')
        }
    }

    return(
        <div className={style.Main}>
            <div className={style.topLight + ' ' + style.light}></div>
            <div className={style.wrapper}>
                <div className={style.content}>
                    <div className={style.label}>
                        <p>Back to family</p>
                    </div>
                    <div className={style.credentials}>
                        <div className={style.username}>
                            <input type="text" placeholder='Username' ref={username}/>
                        </div>
                        <div className={style.password}>
                            <input type="password" ref={password} placeholder='Password'/>
                            <img src={showed} onClick={togglePassword} ref={togglePasswordBtn} alt='toggle password type'/>
                        </div>
                        <div className={style.extra}>
                            <div className={style.forgotPassword}>
                                <p
                                    title='at the moment, there is nothing we can help with'
                                    onClick={() => {alert('try to remember again')}}
                                >Forgot the password?
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={style.footer}>
                        <button onClick={login}>Login</button>
                        <NavLink to="/registration">Have no account?</NavLink>
                    </div>
                </div>
            </div>
            <div className={style.bottomLight + ' ' + style.light}></div>
        </div>
    )
}

export default Login;