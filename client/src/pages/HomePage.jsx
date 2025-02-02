import MasterLayOut from "../components/MasterLayOut.jsx";
import Slider from "../components/Slider.jsx";
import GetAllBlogs from "../components/GetAllBlogs.jsx";

const HomePage = () => {
    return (
        <MasterLayOut>
            <Slider/>
            <GetAllBlogs/>

        </MasterLayOut>
    );
};

export default HomePage;