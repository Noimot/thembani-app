import React from "react";
import { useField } from "formik";

const FormSelect = ({
  label,
  name,
  required,
  onChange,
  employer,
  ...rest
}) => {
  const [field, { error, touched }] = useField({
    name: name,
    type: name,
  });
  return (
    <div className="w-full">
      <div className={`${employer && 'border-2 border-solid border-red-4'} h-51 bg-grey-1 rounded-lg px-4`}>
        <select
          className="w-full h-full bg-inherit capitalize border-0 outline-0 text-sm text-dark-3"
          {...field}
          {...rest}
        />
      </div>
      {error && touched ? (
        <span className="text-red-1 pt-11  text-xs">
          {error}
        </span>
      ) : null}
    </div>
  );
};

export default FormSelect;
