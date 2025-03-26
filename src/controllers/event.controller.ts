import { Request, Response } from "express";
import { T } from "../libs/types/common";
import EventService from "../models/Event.service";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { AdminRequest } from "../libs/types/member";
import { EventInput } from "../libs/types/event";

const eventService = new EventService();

const eventController: T = {};


// SPA
eventController.getEvents = async (req: Request, res: Response) =>{
    try {
        console.log("getEvents");
        const result = await eventService.getEvents();
        res.status(HttpCode.OK).json(result);
    } catch (err) {
        console.log("Error, getEvents:", err);
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
    }
}



// SSR

eventController.getAllEvents = async (req: Request, res: Response) => {
    try {
        console.log("getAllEvents");

        const data = await eventService.getAllEvents();
        console.log("data:",data)
        res.render('event', {events: data});
    } catch (err) {
        console.log("Error, getAllEvents:", err);
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
    }
};

eventController.createNewEvent = async (req: AdminRequest, res: Response) => {
    try {
        console.log("createNewEvent");
        if(!req.file) throw new Errors(HttpCode.INTERNAL_SERVER_ERROR, Message.CREATE_FAILED);
        const data: EventInput = req.body;
        data.eventImage = req.file.path
        // data.eventImage = req.files?.map(ele => {
        //     return ele.path.replace(/\\/g, '/')
        // });
        await eventService.createNewEvent(data);
        res.send(`
            <script>alert("Sucessfuly creation!");
            window.location.replace('/admin/event/all')
            </script>`
        );
    } catch (err) {
        console.log("Error, createNewEvent", err);
        const message = err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
        res.send(
            `<script>
              alert("${message}");
              window.location.replace('/admin/product/all')
            </script>`
        )
    }
};

eventController.updateChosenEvent = async (req: Request, res: Response) => {
    try {
        console.log('updateChosenEvent');
        const id = req.params.id;
        const result = await eventService.updateChosenEvent(id, req.body);
        
        res.status(HttpCode.OK).json({data: result});
    } catch (err) {
        console.log('Error, updateNewEvent:', err);
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
    }
};

export default eventController;