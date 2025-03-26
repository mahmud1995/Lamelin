import EventsModel from "../schema/Event.model";
import Errors, { Message, HttpCode } from "../libs/Errors";
import { Event, EventInput, EventUpdateInput } from "../libs/types/event";
import { shapeIntoMongooseObectId } from "../libs/config";
import { EventStatus } from "../libs/enums/event.enum";

class EventService {
  private readonly eventModel;

  constructor() {
    this.eventModel = EventsModel;
  }

  // SPA

  public async getEvents(): Promise<Event[]> {
    const result = await this.eventModel
      .find({
        eventStatus: EventStatus.PROCESS,
      })
      .sort({ createdAt: -1 })
      .exec();

    if (!result || result.length === 0) {
      throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);
    }
    return result as unknown as Event[];
  }

  // SSR
  public async getAllEvents(): Promise<Event[]> {
    const result = await this.eventModel
      .find({
        eventStatus: EventStatus.PROCESS,
      })
      .sort({ createdAt: -1 })
      .exec();
    console.log("result:", result);
    if (!result || result.length === 0) {
      throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);
    }
    return result as unknown as Event[];
  }

  public async createNewEvent(input: EventInput): Promise<Event> {
    try {
      const eventDocument = await this.eventModel.create(input);
      return eventDocument as unknown as Event;
    } catch (err) {
      console.log("Error, model: createNewEvent", err);
      throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    }
  }

  public async updateChosenEvent(
    id: string,
    input: EventUpdateInput
  ): Promise<Event> {
    id = shapeIntoMongooseObectId(id);
    const result = await this.eventModel
      .findByIdAndUpdate(id, input, { new: true })
      .exec();
    if (!result) throw new Errors(HttpCode.NOT_MODIFIED, Message.UPDATE_FAILED);
    return result as unknown as Event;
  }
}

export default EventService;
