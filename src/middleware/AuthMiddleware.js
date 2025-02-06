import mongoose from "mongoose";

const UserMiddleWare = (req, res, next) => {
    let email = req.headers["email"];
    let id = req.params.id;
    if (!id || !email) {
        res.status(400).json({ message: "User not found" });
    } else if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({ message: "invalid Id" });
    }
    req.email = email;
    req._id = id;
    next();
};

export default UserMiddleWare;
