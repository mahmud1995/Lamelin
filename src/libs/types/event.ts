import { ObjectId } from "mongoose";
import { EventStatus } from "../enums/event.enum";

export interface Event {
    _id: ObjectId;
    eventStatus: EventStatus;
    eventName: string;
    eventAuthor: string;
    eventDesc: string;
    eventImage: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface EventInput {
    eventStatus?: EventStatus;
    eventName: string;
    eventAuthor?: string;
    eventDesc?: string;
    eventImage?: string;
}

export interface EventUpdateInput {
    _id: ObjectId;
    eventStatus?: EventStatus;
    eventName?: string;
    eventAuthor?: string;
    eventDesc?: string;
    eventImage?: string;
}

