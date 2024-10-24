import { ProductStatus } from "../libs/enums/product.enum";
import { shapeIntoMongooseObectId } from "../libs/config";
import Errors, { Message, HttpCode } from "../libs/Errors";
import { Product, ProductInput, ProductInquiry, ProductUpdateInput } from "../libs/types/product";
import ProductModel from "../schema/Product.model";
import { T } from "../libs/types/common";
import { ObjectId } from "mongoose";
import ViewService from "./View.service";
import { ViewInput } from "../libs/types/view";
import { ViewGroup } from "../libs/enums/view.enum";


class ProductService {
    private readonly productModel;
    public viewService: any;

    constructor() {
        this.productModel = ProductModel;
    }

    /**SPA */
    public async getProducts(inquiry: ProductInquiry): Promise<Product[]> {
        console.log("inquiry:", inquiry);
        const match: T = { productStatus: ProductStatus.PROCESS}

        if(inquiry.productCollection)
            match.productCollection = inquiry.productCollection;
        if(inquiry.search) {
            match.productName = { $regex: new RegExp(inquiry.search, "i") }
        }   
            
        const sort: T = inquiry.order === "productPrice" 
            ? { [inquiry.order]: 1 } // dynamic key ni xosil qib beradi
            : { [inquiry.order]: -1 };
        const result = await this.productModel.aggregate([
            {$match: match},
            {$sort: sort},
            {$skip: (inquiry.page * 1 - 1 )*inquiry.limit }, // 3  x 1,2,3 tashlab yubor
            {$limit: inquiry.limit * 1 },
        ]).exec();
        if(!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);
        return result;
    }

    public async getProduct(memberId: ObjectId | null, id: string): Promise<Product> {
        const productId = shapeIntoMongooseObectId(id);
        
        let result = await this.productModel
        .findOne({ _id: productId, productStatus: ProductStatus.PROCESS, })
        .exec();
        if(!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);
        // TODO: If authenticated users => first => view log creation
        if(memberId) {
            // Check Existence
            const input: ViewInput = {
                memberId: memberId,
                viewRefId: productId,
                viewGroup: ViewGroup.PRODUCT
            };
            const existView = await this.viewService.checkViewExistence(input);
            console.log("exist: =>", !!existView);
            if(!existView) {
                // Insert View
                console.log("PLANNING TO INSERT NEW VIEW!");
                await this.viewService.insertMemberView(input);
                // Increase Counts
                result = await this.productModel
                .findByIdAndUpdate(
                    productId,
                    { $inc: { productViews: +1 }}, 
                    { new : true},
                )
                .exec();
            }
        }
        return result as unknown as Product;
    };

    /** SSR */
    public async getAllProducts(): Promise<Product[]> {
        const result = await this.productModel.find().exec();
        if(!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);
        // @ts-ignore
        return result;
    }

    public async createNewProduct(input: ProductInput): Promise<Product> {
        try {
            // @ts-ignore
            return await this.productModel.create(input);
        } catch (err) {
            console.log("Error, model:createNewProduct", err);
            throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
        }
    }

    public async updateChosenProducrt(
        id: string, 
        input: ProductUpdateInput
    ): Promise<Product> {
        id = shapeIntoMongooseObectId(id);
        const result = await this.productModel
        .findByIdAndUpdate({ _id: id}, input, {new: true} )
        .exec();
        if(!result) throw new Errors(HttpCode.NOT_MODIFIED, Message.UPDATE_FAILED);
        // @ts-ignore
        return result;
        
    }
}

export default ProductService;