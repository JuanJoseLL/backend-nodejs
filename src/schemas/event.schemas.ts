import mongoose, { Document, Schema } from 'mongoose';


export interface EventDocument extends Document {
  title: string;
  description: string;
  date: Date;
  time: string;
  location: string;
  organizer: mongoose.Schema.Types.ObjectId; 
}


const EventSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  location: { type: String, required: true },
  organizer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, {
  timestamps: true, 
});


const EventModel = mongoose.model<EventDocument>('Event', EventSchema);

export default EventModel;
