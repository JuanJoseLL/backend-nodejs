import EventModel, { EventInput, EventDocument } from '../models/event.models';

class EventService {
  
  public async createEvent(eventInput: EventInput): Promise<EventDocument> {
    try {
      const event = await EventModel.create(eventInput);
      return event;
    } catch (err) {
      throw err;
    }
  }

  
  public async findAll(): Promise<EventDocument[]> {
    try {
      const events = await EventModel.find();
      return events;
    } catch (err) {
      throw err;
    }
  }

  
  public async getEventsByOrganizer(organizerId: string): Promise<EventDocument[] | null> {
    try {
      const events = await EventModel.find({ organizer: organizerId });
      return events;
    } catch (err) {
      throw err;
    }
  }


  public async updateEvent(eventId: string, eventInput: Partial<EventInput>): Promise<EventDocument | null> {
    try {
      const updatedEvent = await EventModel.findByIdAndUpdate(eventId, eventInput, { new: true });
      return updatedEvent;
    } catch (err) {
      throw err;
    }
  }

  
  public async deleteEvent(eventId: string): Promise<EventDocument | null> {
    try {
      const deletedEvent = await EventModel.findByIdAndDelete(eventId);
      return deletedEvent;
    } catch (err) {
      throw err;
    }
  }
}

export default new EventService();
