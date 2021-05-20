import { Request, Response } from 'express';
import ListFormService from '../services/ListFormService';
import CreateFormService from '../services/CreateFormService';
import InsertObsService from '../services/InsertObsService';
import InsertCheckboxService from '../services/InsertCheckboxService';

export default class ContactsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listForms = new ListFormService();

    const contactForm = await listForms.execute();

    return response.json(contactForm);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, phone, insurance, observation } = request.body;

    const createContactForm = new CreateFormService();

    const contactForm = await createContactForm.execute({
      name,
      email,
      phone,
      insurance,
      observation,
    });

    return response.json(contactForm);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { observation } = request.body;
    const { id } = request.params;

    const updateForm = new InsertObsService();

    const obsUpdate = await updateForm.execute({
      id,
      observation,
    });
    return response.json(obsUpdate);
  }

  public async updateContacted(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { contacted } = request.body;
    const { id } = request.params;

    const updateForm = new InsertCheckboxService();

    const contactedUpdate = await updateForm.execute({
      id,
      contacted,
    });
    return response.json(contactedUpdate);
  }
}
