import { Field, Form, Formik, ErrorMessage } from 'formik';
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import FormBtn from '../FormBtn/FormBtn';
import css from './BookForm.module.css';


const DatePickerField = ({ field, form, ...props }) => {
  const { setFieldValue } = form;
  const { name } = field;

  return (
    <DatePicker
      selected={field.value ? new Date(field.value) : null}
      onChange={(date) => setFieldValue(name, date)}
      {...props}
    />
  );
};

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
    <div>    
     <h2 className={css.title}>Book your campervan now</h2>
     <p className={css.text}>Stay connected! We are always ready to help you.</p>
    <Formik
      initialValues={{ initialValues }}
      validationSchema={Yup.object({
        bookingDate: Yup.date().required('Required'),
      })}
      onSubmit={handleSubmit}
    >
      <Form className={css.wrap} autoComplete="off">
          <Field
            className={css.input}
            label="Name"
            type="text"
            name="name"
            id={nameFieldId}
            placeholder="Name*"
            required
          />
          <ErrorMessage className={css.error} name="name" component="span" />
          <Field
            className={css.input}
            label="Email"
            type="email"
            name="email"
            id={emailFieldId}
            placeholder="Email*"
            required
          />
          <ErrorMessage className={css.error} name="email" component="span" />
          <DatePickerField name="date" id={dateFieldId} required />
          <ErrorMessage className={css.error} name="date" component="span" />
          <Field
            className={css.comment}
            as="textarea"
            name="comment"
            id={commentFieldId}
            placeholder="Comment"
            rows="4"
          />
          <FormBtn>Send</FormBtn>
        </Form>
    </Formik>
    </div>
  );
}