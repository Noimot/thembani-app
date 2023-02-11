import React, { useState, useRef, useEffect } from "react";
import { useFormikContext } from "formik";
import cameraIcon from "../../assets/images/camera-icon.svg";

const Selfie = () => {
  const { values, setFieldValue } = useFormikContext();
  const [camera, setCamera] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const videoEle = useRef();
  const canvasEle = useRef();
  const imageEle = useRef();

  const cameraVisibility = () => {
    startCamera();
    setCamera(true);
  };

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      videoEle.current.srcObject = stream;
    } catch (err) {
      console.log(err);
    }
  };

  const takeSelfie = async () => {
    // Get the exact size of the video element.
    const width = videoEle.current.videoWidth;
    const height = videoEle.current.videoHeight;

    // get the context object of hidden canvas
    const ctx = canvasEle.current.getContext("2d");

    // Set the canvas to the same dimensions as the video.
    canvasEle.current.width = width;
    canvasEle.current.height = height;

    // Draw the current frame from the video on the canvas.
    ctx.drawImage(videoEle.current, 0, 0, width, height);

    // Get an image dataURL from the canvas.
    const imageDataURL = canvasEle.current.toDataURL("image/png");
    stopCam();
    setImageUrl(imageDataURL);
    setFieldValue("selfie", imageDataURL);
  };

  const stopCam = () => {
    const stream = videoEle.current.srcObject;
    const tracks = stream.getTracks();
    tracks.forEach((track) => {
      track.stop();
    });
  };

  const backToCam = () => {
    setImageUrl("");
    startCamera();
  };
  return (
    <div className="relative selfie mt-6 w-1/2 h-[350px] bg-grey-1 flex items-center justify-center flex-col">
      {camera ? (
        imageUrl === "" && (
          <div className="cam">
            <video
              width="100%"
              height="100%"
              className="video-player bg-grey-1"
              autoPlay={true}
              ref={videoEle}
            ></video>
            <div className="flex items-center justify-center">
              <button className="" onClick={takeSelfie} type="button">
                <img src={cameraIcon} alt="" />
              </button>
            </div>
          </div>
        )
      ) : (
        <div onClick={cameraVisibility}>
          <p className="text-dark-1 text-base font-medium flex justify-center items-center h-51">
            Click &nbsp; <span className="text-orange-1"> Here </span>&nbsp; to
            take a selfie
          </p>
        </div>
      )}

      <canvas ref={canvasEle} style={{ display: "none" }}></canvas>
      {imageUrl !== "" && (
        <div className="absolute top-0 w-4/5 h-20">
          <img className="preview-img" src={imageUrl} ref={imageEle} />

          <div className="btn-container flex items-center justify-center pt-6">
            <button
              className="text-dark-1 text-base font-medium text-center bg-white rounded-lg px-2 py-1"
              onClick={backToCam}
              type="button"
            >
              Back to camera
            </button>
            <a
              href={imageUrl}
              download="selfie.png"
              className="btn download-btn"
            >
              <i class="fa fa-download" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Selfie;
