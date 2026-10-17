import { Route, Routes } from "react-router"
import Login from "./pages/login"
import { Toaster } from "sonner"

const Main = () => {
    return (
        <div>
        <Routes>
            <Route path="/" element={<Login />} />
        </Routes>
        
        <Toaster/>
        </div>
    
    )
}

export default Main