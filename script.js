const videoElement = document.getElementById("video");
const button = document.getElementById("button");

//  Prompt to select media stream, pass to video element,then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();

    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    // Catch Error Here
    console.log("whoops, error here:", error);
  }
}

button.addEventListener("click", async () => {
  // Disable Button
  button.disabled = true;
  if (document.pictureInPictureElement) {
    await document.exitPictureInPicture();
  } else {
    await videoElement.requestPictureInPicture();
  }
  // Reset Button
  button.disabled = false;
});

// On Load
selectMediaStream();
