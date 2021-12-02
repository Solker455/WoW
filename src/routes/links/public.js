import React from "react";
import { Link } from "react-router-dom";

export function PublicLink() {
    return (
        <ul className="menu">
            <li className="link"><Link className="link-item" to="/">Главная</Link></li>
            <li className="link"><Link className="link-item" to="/pvpstats">PvP статистика</Link></li>
            <li className="link"><Link className="link-item" to="/pvestats">PvE статистика</Link></li>
            <li className="link"><Link className="link-item" to="/statshero">Сравнение персонажей</Link></li>
        </ul>
    )
}
