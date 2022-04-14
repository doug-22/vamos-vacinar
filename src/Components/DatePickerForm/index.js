import React from "react";
import { Field } from "formik";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function DatePickerForm({name, placeholder, ageCalendar}) {

  const getDateTomorrow = () => {
    let currentDate = new Date();
    let tomorrowDate = new Date();
    tomorrowDate.setDate(currentDate.getDate() + 1)
    return tomorrowDate;
  }

  return (
    <Field name={name}>
      {({form, field}) => {
        const {setFieldValue} = form
        const { value } = field
        return (
          <DatePicker
            id={name}
            selected={value}
            onChange={date => setFieldValue(name, date)}
            placeholderText={placeholder}
            dateFormat="dd/MM/yyyy"
            minDate={ !ageCalendar && getDateTomorrow()}
            />
        );
      }}
    </Field>
  );
}