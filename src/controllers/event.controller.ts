import { Response, Request } from 'express';
import EventService from '../services/event.service';
import { EventDocument, EventInput } from '../models/event.models';

class EventController {

  private eventService: EventService;

  constructor() {
    this.eventService = new EventService();
  }

  public async createEvent(req: Request, res: Response) {
    try {
      const event: EventInput = req.body;
      const newEvent: EventDocument = await this.eventService.createEvent(event);
      return res.status(201).json(newEvent);
    } catch (err) {
      return res.status(500).json(err);
    }
  }

  public async getEvents(req: Request, res: Response) {
    try {
      const events: EventDocument[] = await this.eventService.findAll();
      return res.json(events);
    } catch (err) {
      return res.status(500).json(err);
    }
  }

  public async getEventsByOrganizer(req: Request, res: Response) {
    try {
      const organizerId: string = req.params.id;
      const events: EventDocument[] | null = await this.eventService.getEventsByOrganizer(organizerId);
      if (!events) {
        return res.status(404).json({ message: 'No events found for the given organizer'});
      }
      return res.json(events);
    } catch (err) {
      return res.status(500).json(err);
    }
  }

  public async updateEvent(req: Request, res: Response) {
    try {
      const eventId: string = req.params.id;
      const eventInput: EventInput = req.body;
      const updatedEvent: EventDocument | null = await this.eventService.updateEvent(eventId, eventInput);
      if (!updatedEvent) {
        return res.status(404).json({ message: 'Event not found'});
      }
      return res.json(updatedEvent);
    } catch (err) {
      return res.status(500).json(err);
    }
  }

  public async deleteEvent(req: Request, res: Response) {
    try {
      const eventId: string = req.params.id;
      const deletedEvent: EventDocument | null = await this.eventService.deleteEvent(eventId);
      if (!deletedEvent) {
        return res.status(404).json({ message: 'Event not found'});
      }
      return res.json(deletedEvent);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
}

export default new EventController();
