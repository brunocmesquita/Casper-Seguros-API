import { Router } from 'express';
import ContactsController from '../controllers/ContactsController';
import { celebrate, Joi, Segments } from 'celebrate';

const contactsRouter = Router();
const contactsController = new ContactsController();

contactsRouter.get('/', contactsController.index);

contactsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      phone: Joi.string()
        .length(11)
        .pattern(/^[0-9]+$/)
        .required(),
      insurance: Joi.string().required(),
      observation: Joi.string().optional(),
    },
  }),
  contactsController.create,
);

contactsRouter.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      observation: Joi.string().required(),
    },
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  contactsController.update,
);

export default contactsRouter;
