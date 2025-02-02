import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import LogIn from "./pages/LogIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import Blogs from "./pages/Blogs.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import {Toaster} from "react-hot-toast";
import DashBoard from "./pages/DashBoard.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import Services from "./pages/Services.jsx";


const App = () => {
    return (
        <BrowserRouter>
            <Toaster position="top-center" reverseOrder={false}/>
            <Routes>
                <Route path="/" element={<HomePage /> } />
                <Route path="/login" element={ <LogIn/> } />
                <Route path="/signUp" element={ <SignUp/> } />
                <Route path="/blogs" element={<Blogs/>} />
                <Route path="/aboutus" element={<AboutUs/>} />
                <Route path="/contact" element={<ContactPage/>} />
                <Route path="/services" element={<Services/>} />
                <Route path="/dashboard" element={ <PrivateRoute> <DashBoard/> </PrivateRoute> } />

            </Routes>
        </BrowserRouter>
    );
};

export default App;