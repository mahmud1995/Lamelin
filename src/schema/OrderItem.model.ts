import mongoose, { mongo, Schema, Types} from "mongoose";

const orderItemSchema = new Schema ({
    itemQuantity: {
        type: Number,
        required: true,
    },
    
    itemPrice: {
        type: Number,
        required: true,
    },

    orderId: {
        type: Schema.Types.ObjectId,
        ref: "Order",
    },

    productId: {
        type: Schema.Types.ObjectId,
        ref: "Product",
    }
}, {timestamps: true});

export default mongoose.model("orderItem", orderItemSchema);