import React from "react";
import { Field } from "formik";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function DatePickerForm({name, placeholder}) {
  return (
    <Field name={name}>
      {({form, field}) => {
        const {setFieldValue} = form
        const { value } = field
        return (
          <DatePicker
            id="birthDate"
            selected={value}
            onChange={date => setFieldValue(name, date)}
            placeholderText={placeholder}
            dateFormat="dd/MM/yyyy"
            />
        );
      }}
    </Field>
  );
}