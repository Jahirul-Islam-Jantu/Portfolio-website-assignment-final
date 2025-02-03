export const createServices = async (req) => {
    try{
        return {status: "Success", data: result , message: "Service Created Successfully"};
    }catch(err){
        return {status: "failed", error: err, message: "Service Creation Failed"};
    }
}

export const getServices = async (req) => {
    try{
        return {status: "Success", data: result , message: "Service showed Successfully"};
    }catch(err){
        return {status: "failed", error: err, message: "Service shown Failed"};
    }
}

export const updateServices = async (req) => {
    try{
        return {status: "Success", data: result , message: "Service updated Successfully"};
    }catch(err){
        return {status: "failed", error: err, message: "Service update Failed"};
    }
}

export const deleteServices = async (req) => {
    try{
        return {status: "Success", data: result , message: "Service deleted Successfully"};
    }catch(err){
        return {status: "failed", error: err, message: "Service delete Failed"};
    }
}