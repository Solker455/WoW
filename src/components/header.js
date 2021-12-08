import React from "react";
import { PublicLink } from "../routes/links/public";
import { useSelector } from "react-redux";
import { PrivateLink } from "../routes/links/private";
import { Button } from "antd";
import { apiCode } from "../api/api";

export function Header() {
    let auth = useSelector(state => state.auth.auth) //получение статуса авторизации
    let battletag = useSelector(state => state.auth.battletag) //получение имени аккаунта battle.net
    const onClickLogout = function () { //функция выхода из аккаунта
        localStorage.removeItem('token');
        localStorage.removeItem('auth');
        localStorage.removeItem('battletag');
        document.location.href = 'http://localhost:3000';
    }

    if (auth) {
        return (<div className='menu-block'>
            <div className='logo'>
            </div>
            <PrivateLink />
            <div className='userBlock'>
                <div className='battleTag'>{battletag}</div>
                <Button className='btnPrimary buttonAuth' type="primary" htmlType="submit" size='large' shape='round' onClick={onClickLogout}>Выход</Button>
            </div>
        </div>)
    } else {
        return (<div className='menu-block'>
            <div className='logo'>
            </div>
            <PublicLink />
            <Button className='btnPrimary buttonAuth' type="primary" htmlType="submit" size='large' shape='round' onClick={apiCode}>Battle.net</Button>
        </div>)
    }
}