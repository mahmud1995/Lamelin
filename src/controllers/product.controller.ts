import { Request, Response } from "express";
import Errors from "../libs/Errors";
import { T } from "../libs/types/common";

const productController: T = {};

productController.getAllProducts = async (req: Request, res: Response) => {
    try {
        console.log("getAllProducts");
        res.render("products");
    } catch (err) {        
        console.log("Error, getAllProducts", err);
        if (err instanceof Errors) res.status(err.code).json(err)
        else res.status(Errors.standard.code).json(Errors.standard);
    }
};

productController.createNewProduct = async (req: Request, res: Response) => {
    try {
        console.log("");
    }
    catch(err) {
        console.log(" ", err);
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
    }
};


productController.updateChosenProduct = async (req: Request, res: Response) => {
    try {
        console.log("");
    }
    catch(err) {
        console.log(" ", err);
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
    }
};


export default productController;