import { EntityRepository, Repository } from 'typeorm';
import ContactForm from '../entities/ContactForm';

@EntityRepository(ContactForm)
class ContactsRepository extends Repository<ContactForm> {
  public async findByName(name: string): Promise<ContactForm | undefined> {
    const contactForm = await this.findOne({
      where: {
        name,
      },
    });

    return contactForm;
  }

  public async findById(id: string): Promise<ContactForm | undefined> {
    const contactForm = await this.findOne({
      where: {
        id,
      },
    });

    return contactForm;
  }

  public async findByEmail(email: string): Promise<ContactForm | undefined> {
    const contactForm = await this.findOne({
      where: {
        email,
      },
    });

    return contactForm;
  }
}

export default ContactsRepository;
