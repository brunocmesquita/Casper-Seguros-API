import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import ContactForm from '../typeorm/entities/ContactForm';
import ContactsRepository from '../typeorm/repositories/ContactsRepository';

interface IRequest {
  id: string;
  observation: string;
}

class InsertObsService {
  public async execute({ id, observation }: IRequest): Promise<ContactForm> {
    const contactsRepository = getCustomRepository(ContactsRepository);

    const obsForm = await contactsRepository.findById(id);
    if (!obsForm) {
      throw new AppError('Formulário inexistente');
    }

    obsForm.observation = observation;

    await contactsRepository.save(obsForm);

    return obsForm;
  }
}

export default InsertObsService;
