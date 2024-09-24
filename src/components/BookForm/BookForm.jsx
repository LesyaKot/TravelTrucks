import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import DatePickerField from '../DatePickerField/DatePickerField';
import FormBtn from '../FormBtn/FormBtn';
import css from './BookForm.module.css';

const initialValues = {
  name: "",
  email: "",
  date: "",
  comment: "",
};

const handleSubmit = (values, actions) => {
  toast("Camper successfully booked!", {
    style: {
      color: "#101828",
      backgroundColor: "#ffc531",
    },
  });
  actions.resetForm();
};

export default function BookForm() {
  return (
    <div className={css.bookFormWrap}>    
      <h2 className={css.title}>Book your campervan now</h2>
      <p className={css.text}>Stay connected! We are always ready to help you.</p>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          name: Yup.string().required('Required'),
          email: Yup.string().email('Invalid email address').required('Required'),
          date: Yup.date().required('Required'),
        })}
        onSubmit={handleSubmit}
      >
        <Form className={css.wrap} autoComplete="off">
          <Field
            className={css.input}
            label="Name"
            type="text"
            name="name"
            placeholder="Name*"
            required
          />
          <ErrorMessage className={css.error} name="name" component="span" />
          <Field
            className={css.input}
            label="Email"
            type="email"
            name="email"
            placeholder="Email*"
            required
          />
          <ErrorMessage className={css.error} name="email" component="span" />
          <Field
            component={DatePickerField}
            name="date"
            placeholderText="Select a date"
            required
          />
          <ErrorMessage className={css.error} name="date" component="span" />
          <Field
            className={css.comment}
            as="textarea"
            name="comment"
            placeholder="Comment"
            rows="4"
          />
          <FormBtn>Send</FormBtn>
        </Form>
      </Formik>
    </div>
  );
}
