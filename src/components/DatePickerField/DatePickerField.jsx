import { Field } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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

export default DatePickerField;
