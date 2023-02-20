import uploadIcon from "../../assets/images/upload-icon.svg";
import Dropzone from "react-dropzone";
import { toast } from "react-hot-toast";

const FileUpload = ({ label, name, handleDrop, bg }) => {

  const handleDropRejected = () => {
    return toast.error("Maximum file upload size is 5MB");
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
  );
};

export default FileUpload;