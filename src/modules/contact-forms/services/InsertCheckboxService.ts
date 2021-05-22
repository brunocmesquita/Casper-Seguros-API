import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import ContactForm from '../typeorm/entities/ContactForm';
import ContactsRepository from '../typeorm/repositories/ContactsRepository';

interface IRequest {
  id: string;
  contacted: boolean;
  observation: string;
}

class InsertCheckboxService {
  public async execute({
    id,
    contacted,
    observation,
  }: IRequest): Promise<ContactForm> {
    const contactsRepository = getCustomRepository(ContactsRepository);

    const contactedForm = await contactsRepository.findById(id);
    if (!contactedForm) {
      throw new AppError('Formulário inexistente');
    }

    contactedForm.contacted = contacted;
    contactedForm.observation = observation;

    await contactsRepository.save(contactedForm);

    return contactedForm;
  }
}

export default InsertCheckboxService;
