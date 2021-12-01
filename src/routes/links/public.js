import React from "react";
import { Link } from "react-router-dom";

export function PublicLink() {
    return (
        <div className='menu-block'>
            <div className="menu">
                <Link className="link" to="/">Главная</Link>
                <Link className="link" to="/pvpstats">PvP статистика</Link>
                <Link className="link" to="/pvestats">PvE статистика</Link>
                <Link className="link" to="/statshero">Сравнение персонажей</Link>
            </div>
        </div>
    )
}
