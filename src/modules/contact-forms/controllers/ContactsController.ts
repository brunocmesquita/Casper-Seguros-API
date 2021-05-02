import { Request, Response } from 'express';
import ListFormService from '../services/ListFormService';
import CreateFormService from '../services/CreateFormService';

export default class ContactsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listForms = new ListFormService();

    const contactForm = await listForms.execute();

    return response.json(contactForm);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, phone, insurance } = request.body;

    const createContactForm = new CreateFormService();

    const contactForm = await createContactForm.execute({
      name,
      email,
      phone,
      insurance,
    });

    return response.json(contactForm);
  }
}
