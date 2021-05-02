import { getCustomRepository } from 'typeorm';
import ContactForm from '../typeorm/entities/ContactForm';
import ContactsRepository from '../typeorm/repositories/ContactsRepository';

interface IRequest {
  name: string;
  email: string;
  phone: string;
  insurance: string;
}

class CreateFormService {
  public async execute({
    name,
    email,
    phone,
    insurance,
  }: IRequest): Promise<ContactForm> {
    const contactsRepository = getCustomRepository(ContactsRepository);

    const contactForm = contactsRepository.create({
      name,
      email,
      phone,
      insurance,
    });

    await contactsRepository.save(contactForm);

    return contactForm;
  }
}

export default CreateFormService;
