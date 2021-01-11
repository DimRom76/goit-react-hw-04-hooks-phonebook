import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

const defaultValues = { name: '', number: '' };

function ContactForm({ onSubmit }) {
  let schema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(25, 'Too Long!')
      .required('Requerid'),
    number: Yup.string().length(9, 'Wrong length!').required('Requerid'),
  });

  const { register, reset, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const onSubmitForm = data => {
    reset(defaultValues);
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <div className={s.form_field}>
        <label htmlFor="name" className={s.form_label}>
          Name
        </label>
        <input
          type="text"
          name="name"
          ref={register({ required: true })}
          className="form_input"
          placeholder="Input name..."
        />
        <p>{errors.name?.message}</p>
      </div>

      <div className={s.form_field}>
        <label htmlFor="number" className={s.form_label}>
          Number
        </label>
        <input
          type="tel"
          name="number"
          ref={register({ required: true })}
          className="form_input"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
          placeholder="555-55-55"
        />
        <p>{errors.number?.message}</p>
      </div>

      <button type="submit" className={s.form_field}>
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
