import React from "react"
import { useSelector } from "react-redux";

export function Header(props) {
    let token = useSelector(state => state.login.token)
    if (token) {
        return (
            <div>
                <button onClick={props.logoutClick}>Выход</button>
            </div>
        )
    } else {
        return (
            <div className='header'>
                <button onClick={props.loginClick}>Battle.net Вход</button>
            </div>
        );
    }
}