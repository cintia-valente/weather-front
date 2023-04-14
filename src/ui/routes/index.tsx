import { BrowserRouter, Route, Routes, Navigate, useRoutes } from "react-router-dom";
import { RegisterWeather } from "../../pages/RegisterWeather";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RegisterWeather />} />
                {/* <Route path="/" element={<Navigate to="/home" />} /> */}
            </Routes>
        </BrowserRouter>
    );
}


