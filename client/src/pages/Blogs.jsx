import MasterLayOut from "../components/MasterLayOut.jsx";
import GetAllBlogs from "../components/GetAllBlogs.jsx";

const Blogs = () => {
    return (
        <MasterLayOut>
            <GetAllBlogs limit={100} />  {/* Show all blogs */}
        </MasterLayOut>
    );
};

export default Blogs;
