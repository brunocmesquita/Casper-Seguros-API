import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import ContactForm from '../typeorm/entities/ContactForm';
import ContactsRepository from '../typeorm/repositories/ContactsRepository';

interface IRequest {
  contact_id: string;
}

class InsertCheckboxService {
  public async execute({ contact_id }: IRequest): Promise<ContactForm> {
    const contactsRepository = getCustomRepository(ContactsRepository);

    const contactedForm = await contactsRepository.findById(contact_id);
    if (!contactedForm) {
      throw new AppError('Formulário inexistente');
    }

    contactedForm.contacted = true;

    await contactsRepository.save(contactedForm);

    return contactedForm;
  }
}

export default InsertCheckboxService;
