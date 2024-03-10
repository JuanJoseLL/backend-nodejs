import TicketModel, { TicketInput, TicketDocument } from '../models/ticket.models';

class TicketService {
    // creamos el ticket recibiendo TicketInput
  public async createTicket(ticket: TicketInput): Promise<TicketInput> {
    try{
        const newTicket = await TicketModel.create(ticket);
        return newTicket;
    }catch(err){
      throw err;
    }
  }

  // hallar los asistentes a un evento de un organizador especifico
  public async findAsistantsByOrganizer(): Promise<TicketDocument[] | null>{
    return null;
  }

  // encontramos todos los tickets
  public async findAll(): Promise<TicketDocument[]>{
    try{
      const tickets = await TicketModel.find();
      return tickets;
    }catch(err){
        throw  err;
    }
  }

  // encontrar tickets por email de usuario
  public async findByUserEmail(userEmail: string): Promise<TicketDocument | null>{
    try{
      const ticket = await TicketModel.findOne({email: userEmail})
      return ticket
    }catch(error){
      throw error
    }
  }
}

export default new TicketService();
