import React from "react";
import { useField } from "formik";

const TextArea = ({ name, required, palceholder, employer, ...rest }) => {
  const [field, { error, touched }] = useField({
    name: name,
    type: name,
  });
  return (
    <div>
      <div
        className={`${employer && !error && !touched ? 'border-2 border-solid border-red-4': null} h-86 rounded-lg px-4 pt-4 bg-grey-1`}
      >
        <textarea
          className="w-full h-full bg-grey-1 capitalize border-0 outline-0 resize-none text-xs"
          {...field}
          {...rest}
        />
      </div>
      {error && touched ? (
        <span className="text-red-1 pt-11 text-Gilroy-regular text-xs">
          {error}
        </span>
      ) : null}
    </div>
  );
};

export default TextArea;
