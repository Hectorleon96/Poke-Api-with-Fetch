const errorText = document.querySelector(`.errorText`);
const startButton = document.querySelector(`.select-pokemon-button`);
const renderContainer = document.querySelector(`.main-content-box`);
const resultImages = document.querySelectorAll(".resultImages");
const resultData = document.querySelectorAll(".data");
const renderImages = document.getElementById("results");

export const domElements = {
  start: startButton,
  error: errorText,
  result: resultData,
  images: resultImages,
  render_images: renderImages,
  render: renderContainer,
};
