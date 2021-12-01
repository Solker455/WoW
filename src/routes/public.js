import React from "react";
import { Routes, Route } from 'react-router-dom';
import { PveChart } from "../components/charts/pveChart";
import { PvpChart } from "../components/charts/pvpChart";
import { StatsHeroChart } from "../components/charts/statsHeroChart";
import { Header } from "../components/header";

export function PublicRoute() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path='/pvestats' element={<PveChart />} />
                <Route path="/pvpstats" element={<PvpChart />} />
                <Route path="/statshero" element={<StatsHeroChart />} />
            </Routes>
        </div>)
}
