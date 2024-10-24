/* eslint-disable no-restricted-globals */

// Web Worker context
self.onmessage = async function (e) {
  const { mood, frameCount, basePath } = e.data;
  const frames = [];

  for (let i = 1; i <= frameCount; i++) {
    const imgSrc = `${basePath}${i.toString().padStart(3, '0')}.png`;
    try {
      const response = await fetch(imgSrc);
      const blob = await response.blob();
      const objectURL = URL.createObjectURL(blob);
      frames.push(objectURL);
    } catch (error) {
      console.error(`Error loading image ${imgSrc}:`, error);
    }
  }

  self.postMessage({ mood, frames });
};