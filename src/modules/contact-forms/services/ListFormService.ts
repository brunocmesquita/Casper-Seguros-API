import { getCustomRepository } from 'typeorm';
import ContactForm from '../typeorm/entities/ContactForm';
import ContactsRepository from '../typeorm/repositories/ContactsRepository';

class ListProductService {
  public async execute(): Promise<ContactForm[]> {
    const contactsRepository = getCustomRepository(ContactsRepository);

    const contactForm = contactsRepository.find();

    return contactForm;
  }
}

export default ListProductService;
