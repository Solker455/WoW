import React from "react";
import { PublicLink } from "../routes/links/public";
import { useSelector } from "react-redux";
import { PrivateLink } from "../routes/links/private";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { apiCode } from "../api/api";

export function Header() {
    let auth = useSelector(state => state.auth.auth)
    let dispatch = useDispatch();
    let battletag = useSelector(state => state.auth.battletag)
    const onClickLogout = function () {
        dispatch({ type: 'LOGOUT' });
    }
    const onClickLogin = function () {
        apiCode()
    }
    if (auth) {
        return (<div className='menu-block'>
            <div className='logo'>
            </div>
            <PrivateLink />
            <div className='userBlock'>
            <div className='battleTag'>{battletag}</div>
            <Button className='btnPrimary buttonAuth' type="primary" htmlType="submit" size='large' shape='round' onClick={() => onClickLogout()}>Выход</Button>
            </div>
        </div>)
    } else {
        return (<div className='menu-block'>
            <div className='logo'>
            </div>
            <PublicLink />
            <Button className='btnPrimary buttonAuth' type="primary" htmlType="submit" size='large' shape='round' onClick={() => onClickLogin()}>Battle.net</Button>
        </div>)
    }
}