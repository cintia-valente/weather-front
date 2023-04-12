import { BrowserRouter, Route, Routes, Navigate, useRoutes } from "react-router-dom";
import Header from "../components/header/Header";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Header />} />
                {/* <Route path="/" element={<Navigate to="/home" />} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
