import Login from "./Login";
import {connect} from "react-redux";
import {login} from "../../../redux/reducers/auth-reducer";
import axios from "axios";

const mapStateToProps = () => {

}
const mapDispatchToProps = (dispatch) => {
    async function submit(credentials) {
        try {
            // const response = (await fetch(`https://localhost:5000/login`, {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     credentials: 'include',
            //     body: JSON.stringify({
            //         "username": credentials.username,
            //         "password": credentials.password
            //     })
            // }))
            console.log('test')
            const response = await axios.post(
                // 'https://camo-server.cyclic.app/login',
                'http://localhost:5000/login',
                {
                    "username": credentials.username,
                    "password": credentials.password
                }
                // {
                    // withCredentials: true,
                    // headers: {
                    //     "Access-Control-Allow-Credentials": "true",
                    //     "Access-Control-Allow-Headers": "X-PINGOTHER, Content-Type",
                    //     "Access-Control-Allow-Methods": "GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS",
                    //     "Access-Control-Allow-Origin": "http://localhost:3000/login"
                    // }
                // }
            )
            console.log(response)
        } catch (e) {
            console.error(e)
        }
    }

    return {
        submit,
        login: (credentials) => dispatch(login(credentials))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)