import { BrowserRouter, Route, Routes, Navigate, useRoutes } from "react-router-dom";
import { RegisterWeather } from "../../pages/RegisterWeather";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Home } from "../../pages/Home";
import { ListWeather } from "../../pages/ListWeather";

export const Router = () => {
    return (
        <BrowserRouter>
        <div className="style-app">
            <Header/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cadastro-metereologico" element={<RegisterWeather />} />
                    <Route path="/lista-de-cidades" element={<ListWeather />} />
                </Routes>   
            <Footer/>
        </div>
        </BrowserRouter>
    );
}


