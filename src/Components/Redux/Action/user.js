import { userServices } from "../../Servieces"
import { createrAction } from "."
import { FETCH_LOGIN } from "./type"


export const fetchLogin = (user) => {
    return (dispatch) => {
        userServices.signIn(user).then(res => {
            dispatch(createrAction(FETCH_LOGIN, res.data))
            localStorage.setItem('credentails', JSON.stringify(res.data))
        }).catch(err => {
            console.log(err)
        })
    }
}

