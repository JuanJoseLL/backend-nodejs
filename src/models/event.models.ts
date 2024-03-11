import mongoose from "mongoose";

export interface EventInput {
    title: string;
    description: string;
    date: Date;
    time: string; 
    location: string;
    organizer: mongoose.Schema.Types.ObjectId; 
}

export interface EventDocument extends mongoose.Document, EventInput {}

const EventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true }, 
    location: { type: String, required: true },
    organizer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
}, {timestamps: true, collection: "events"});

const EventModel = mongoose.model<EventDocument>("Event", EventSchema);

export default EventModel;
