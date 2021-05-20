import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import ContactForm from '../typeorm/entities/ContactForm';
import ContactsRepository from '../typeorm/repositories/ContactsRepository';

interface IRequest {
  id: string;
  contacted: boolean;
}

class InsertCheckboxService {
  public async execute({ id, contacted }: IRequest): Promise<ContactForm> {
    const contactsRepository = getCustomRepository(ContactsRepository);

    const contactedForm = await contactsRepository.findById(id);
    if (!contactedForm) {
      throw new AppError('Formulário inexistente');
    }

    contactedForm.contacted = contacted;

    await contactsRepository.save(contactedForm);

    return contactedForm;
  }
}

export default InsertCheckboxService;
