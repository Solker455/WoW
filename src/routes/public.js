import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Header } from "../components/header";
import { Footer } from "../components/footer";

export function PublicRoute() {
    return (
        <div>
            <Header />
            <Routes>
            </Routes>
            <Footer />
        </div>)
}
