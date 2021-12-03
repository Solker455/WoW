import React from "react";
import { Routes, Route } from 'react-router-dom';
import { PveChart } from "../components/charts/pveChart";
import { PvpChart } from "../components/charts/pvpChart";
import { StatsHeroChart } from "../components/charts/statsHeroChart";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Login } from "../components/login";
import { Register } from "../components/register";

export function PublicRoute() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path='/pvestats' element={<PveChart />} />
                <Route path="/pvpstats" element={<PvpChart />} />
                <Route path="/statshero" element={<StatsHeroChart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
            <Footer />
        </div>)
}
