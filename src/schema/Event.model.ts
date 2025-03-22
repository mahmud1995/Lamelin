import mongoose, {Schema} from "mongoose";
import { EventStatus } from "../libs/enums/event.enum";


const eventSchema = new Schema (
    {
     
        eventStatus: {
            type: String,
            enum: EventStatus,
            default: EventStatus.PAUSE
        },

        eventName: {
            type: String,
            required: true,
        },
        
        eventAuthor: {
            type: String,
            required: true,
        },

        eventDesc: {
            type: String,
            required: true,
        },

        eventImage: {
            type: String,
        },

    },
    {timestamps: true}
);

export default mongoose.model("Event", eventSchema);