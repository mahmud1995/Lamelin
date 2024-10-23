import { ProductStatus } from "../libs/enums/product.enum";
import { shapeIntoMongooseObectId } from "../libs/config";
import Errors, { Message, HttpCode } from "../libs/Errors";
import { Product, ProductInput, ProductInquiry, ProductUpdateInput } from "../libs/types/product";
import ProductModel from "../schema/Product.model";
import { T } from "../libs/types/common";

class ProductService {
    private readonly productModel;

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