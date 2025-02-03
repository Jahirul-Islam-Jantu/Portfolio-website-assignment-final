import MasterLayOut from "../components/MasterLayOut.jsx";
import GetAllService from "../components/GetAllService.jsx";

const Services = () => {
    return (
        <MasterLayOut>
            <GetAllService limit={100}/>


        </MasterLayOut>
    );
};

export default Services;