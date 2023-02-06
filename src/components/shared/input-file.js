import React from "react";
import Dropzone from "react-dropzone";
import uploadIcon from "../../assets/images/upload-icon.svg";
import { toast } from "react-hot-toast";
import { useFormikContext } from "formik";

const ImageUpload = ({ label, name, onChange }) => {
//   const { values, isValid, setFieldValue } = useFormikContext();
//   const handleDrop = (acceptedFiles) => {
//     setFieldValue("client_images", [...values.client_images, acceptedFiles[0]]);
    // setFieldValue('client_images', {...values.client_images, ['client_imgb'] : acceptedFiles[0]});

    // setFieldValue("client_imgb", acceptedFiles[0]);
    // console.log(acceptedFiles[0], values.client_images)
//   };
//   const handleDropRejected = () => {
//     return toast.error("Maximum file upload size is 1MB");
//   };
//   const handleFileChange = (e) => {
//     setFieldValue(name, e.target.files[0]);
//   }
  return (
    // <div className="w-full flex flex-col gap-y-35">
    //   <Dropzone
    //     onDrop={handleDrop}
    //     onDropRejected={handleDropRejected}
    //     accept={{
    //       "image/*": [".jpeg", ".png", ".jpg", ".gif", ".svg", ".pdf"],
    //     }}
    //     maxSize={50e5}
    //   >
    //     {({ getRootProps, getInputProps }) => (
    //       <section className="mt-8 relative mx-auto w-full h-[105px] rounded-lg flex justify-center items-center bg-grey-1 cursor-pointer">
    //         <div
    //           {...getRootProps()}
    //           className="flex flex-col items-center gap-y-27"
    //         >
    //           <input
    //             {...getInputProps()}
    //             className="opacity-0 absolute w-0 h-0"
    //           />
    //           <p className="text-dark-1 text-sm pb-4">{text}</p>
    //           <img src={uploadIcon} alt="" />

    //         </div>
    //       </section>
    //     )}
    //   </Dropzone>
    // </div>

    <div className="w-full bg-grey-1 text-center py-6">
      <h4>
       {label}
      </h4>
      <label htmlFor={`${name}-file`}>
        <img src={uploadIcon} className="mx-auto mt-2" />
      </label>
      <input
        hidden
        type="file"
        name={name}
        id={`${name}-file`}
        // capture="user"
        accept="image/*"
        onChange={onChange}
      />
    </div>
  );
};

export default ImageUpload;
