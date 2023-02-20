import React from "react";
import uploadIcon from "../../assets/images/upload-icon.svg";
import { useFormikContext } from "formik";
import Dropzone from "react-dropzone";
import { toast } from "react-hot-toast";

const ImageUpload = ({ label, name, bg, className}) => {
  const { values, isValid, setFieldValue, error, touched } = useFormikContext();
  const handleDrop = (acceptedFiles) => {
    setFieldValue(name, acceptedFiles[0]);
    console.log(acceptedFiles[0], "images");
  };
  const handleDropRejected = () => {
    return toast.error("Maximum file upload size is 5MB");
  };
  const handleFileChange = (e) => {
    setFieldValue(name, e.target.files[0]);
  };
  return (
    <div className="w-full flex flex-col gap-y-35">
      <Dropzone
        onDrop={handleDrop}
        onDropRejected={handleDropRejected}
        accept={{
          "image/*": [".jpeg", ".png", ".jpg", ".gif", ".svg", ".pdf"],
        }}
        maxSize={50e5}
      >
        {({ getRootProps, getInputProps }) => (
          <section
            className={`${
              bg ? bg : "bg-grey-1"
            } mt-8 py-4 relative mx-auto w-full h-auto rounded-lg flex justify-center items-center cursor-pointer`}
          >
            <div
              {...getRootProps()}
              className="flex flex-col items-center gap-y-27"
            >
              <input
                {...getInputProps()}
                className="opacity-0 absolute w-0 h-0"
              />
              <p className={`${className} text-dark-1 text-sm pb-4`}>{label}</p>
              <img src={uploadIcon} alt="" />
             <p className="text-sm pt-2 capitalize">{values[name].name}</p> 
            </div>
          </section>
        )}
      </Dropzone>

    </div>
  );
};

export default ImageUpload;
