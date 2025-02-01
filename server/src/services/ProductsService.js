import ProductModel from "../model/ProductModel.js";

export const CreateProductService= async (req) => {
    try{
        let reqBody = req.body;
        let result = await ProductModel.create(reqBody);
        return {status: "Success", data: result , message: "Product Created Successfully"};

    }catch(err){
        return {status: "Error", error: err, message: "Product Creation failed"};
    }
}


export const getProductService= async (req) => {
    try{
        let result = await ProductModel.find();
        return {status: "Success", data: result };

    }catch(err){
        return {status: "Error", error: err, message: "No Products"};
    }
}

export const deleteProductService= async (req) => {
    try{
        let id =  req.params.id;
         let result =  await ProductModel.deleteOne({_id: id});
        return {status: "Success", data: result };

    }catch(err){
        return {status: "Error", error: err, message: "No Products"};
    }
}