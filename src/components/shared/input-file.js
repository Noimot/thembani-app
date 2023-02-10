import React from "react";
import uploadIcon from "../../assets/images/upload-icon.svg";
import { useFormikContext } from "formik";
import Dropzone from "react-dropzone";
import { toast } from "react-hot-toast";

const ImageUpload = ({ label, name, bg }) => {
  const { values, isValid, setFieldValue } = useFormikContext();
  const handleDrop = (acceptedFiles) => {
    setFieldValue(name, acceptedFiles[0]);
    // setFieldValue('client_images', {...values.client_images, ['client_imgb'] : acceptedFiles[0]});
    // setFieldValue("client_imgb", acceptedFiles[0]);
    console.log(acceptedFiles[0], 'images')
  };
  const handleDropRejected = () => {
    return toast.error("Maximum file upload size is 5MB");
  };
  const handleFileChange = (e) => {
    setFieldValue(name, e.target.files[0]);
  }
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
          <section className={`${bg ? bg: "bg-grey-1"} mt-8 relative mx-auto w-full h-[105px] rounded-lg flex justify-center items-center cursor-pointer`}>
            <div
              {...getRootProps()}
              className="flex flex-col items-center gap-y-27"
            >
              <input
                {...getInputProps()}
                className="opacity-0 absolute w-0 h-0"
              />
              <p className="text-dark-1 text-sm pb-4">{label}</p>
              <img src={uploadIcon} alt="" />

            </div>
          </section>
        )}
      </Dropzone>
    </div>

    // <div className={`w-full ${bg ? bg: "bg-grey-1"} text-center py-6 rounded-5 border-solid border-2 border-bg-grey-1`}>
    //   <h4>
    //    {label}
    //   </h4>
    //   <label htmlFor={`${name}-file`}>
    //     <img src={uploadIcon} className="mx-auto mt-2" />
    //   </label>
    //   <input
    //     hidden
    //     type="file"
    //     name={name}
    //     id={`${name}-file`}
    //     // capture="user"
    //     accept="**"
    //     onChange={onChange}
    //   />
    // </div>
  );
};

export default ImageUpload;
