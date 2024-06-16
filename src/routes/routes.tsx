import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LoginPage, RegisterPage, DashboardPage } from "../pages/exports"

const PageRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route path="/login" element={<LoginPage />}/>
                    <Route path="/register" element={<RegisterPage />}/>
                    <Route path="/dashboard" element={<DashboardPage />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default PageRoutes