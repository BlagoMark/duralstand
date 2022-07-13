import React from "react";
import { Field } from "redux-form";
import classes from "./FormsControls.module.css";

const FormControls = ({ meta, element }) => {
  const hasError = meta.error && meta.touched;
  return (
    <div
      className={classes.formControls + " " + (hasError ? classes.error : "")}
    >
      {element}
    </div>
  );
};

export const Textarea = ({ input, meta, ...props }) => {
  return (
    <FormControls
      {...props}
      meta={meta}
      input={input}
      element={<textarea {...props} {...input} />}
    />
  );
};

export const Input = ({ input, meta, ...props }) => {
  return (
    <FormControls
      {...props}
      meta={meta}
      input={input}
      element={<input {...props} {...input} />}
    />
  );
};

export const createField = (
  placeholder,
  name,
  validators,
  component,
  props = {}
) => (
  <Field
    placeholder={placeholder}
    name={name}
    validate={validators}
    component={component}
    {...props}
  ></Field>
);
