import React from "react"

export function Hero() {
    const LoginClick = function () {
        window.location.href = 'https://oauth.battle.net/oauth/authorize?client_id=7347dbd64c2b4689aecc2bf54350bab2&redirect_uri=http://localhost:3000/&region=eu&response_type=code'
        let strGET = window.location.search.replace('?code=', '')
        console.log(strGET)
    }
    return (
        <div className='header'>
            <button onClick={LoginClick}>Battle.net Вход</button>
        </div>
    );
}
