import React from "react";
import { useField } from "formik";

const FormSelect = ({
  label,
  name,
  required,
  onChange,
  employer,
  value,
  ...rest
}) => {
  const [field, { error, touched }] = useField({
    name: name,
    type: name,
  });
  return (
    <div className="w-full">
      <div className={`${employer && !error && !touched ? 'border-2 border-solid border-red-4': null} h-51 bg-grey-1 rounded-lg px-4`}>
        <select
          className="w-full h-full bg-inherit capitalize border-0 outline-0 text-sm text-dark-3"
          value={value}
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
