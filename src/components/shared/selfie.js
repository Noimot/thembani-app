import React, { useState, useRef, useEffect } from "react";
import { useFormikContext } from "formik";
import cameraIcon from "../../assets/images/camera-icon.svg";

const Selfie = () => {
    const {values, setFieldValue} = useFormikContext();
  const [imageUrl, setImageUrl] = useState("");
  const videoEle = useRef();
  const canvasEle = useRef();
  const imageEle = useRef();

  useEffect(() => {
    startCamera();
  }, []);

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
    setFieldValue('selfie', imageDataURL)
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
    <div className="selfie mt-6">
      {imageUrl === "" && (
        <div className="cam">
          <video
            width="48%"
            height="100%"
            className="video-player bg-grey-1"
            autoPlay={true}
            ref={videoEle}
          ></video>
          <button className="" onClick={takeSelfie}>
            <img src={cameraIcon} alt="" />
          </button>
        </div>
      )}

      <canvas ref={canvasEle} style={{ display: "none" }}></canvas>
      {imageUrl !== "" && (
        <div className="preview w-[49%] h-20">
          <img className="preview-img" src={imageUrl} ref={imageEle} />

          <div className="btn-container">
            <button className="" onClick={backToCam}>
              <img src={cameraIcon} alt="" />
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
